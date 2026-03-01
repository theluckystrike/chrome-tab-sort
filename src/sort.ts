/**
 * Tab Sort — Organize tabs by various criteria
 */
export class TabSort {
    /** Sort tabs by title (A-Z) */
    static async byTitle(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const sorted = [...tabs].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        await this.reorder(sorted);
    }

    /** Sort tabs by URL */
    static async byUrl(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const sorted = [...tabs].sort((a, b) => (a.url || '').localeCompare(b.url || ''));
        await this.reorder(sorted);
    }

    /** Sort tabs by domain, grouping same-domain tabs together */
    static async byDomain(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const sorted = [...tabs].sort((a, b) => {
            const domA = this.extractDomain(a.url || '');
            const domB = this.extractDomain(b.url || '');
            return domA.localeCompare(domB) || (a.title || '').localeCompare(b.title || '');
        });
        await this.reorder(sorted);
    }

    /** Sort tabs by last accessed time */
    static async byLastAccessed(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const sorted = [...tabs].sort((a, b) => (b.lastAccessed || 0) - (a.lastAccessed || 0));
        await this.reorder(sorted);
    }

    /** Reverse current tab order */
    static async reverse(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        await this.reorder(tabs.reverse());
    }

    /** Deduplicate tabs (remove duplicate URLs) */
    static async deduplicate(windowId?: number): Promise<number> {
        const tabs = await this.getTabs(windowId);
        const seen = new Set<string>();
        const dupes: number[] = [];
        tabs.forEach((t) => {
            if (t.url && seen.has(t.url)) { if (t.id) dupes.push(t.id); }
            else if (t.url) seen.add(t.url);
        });
        if (dupes.length) await chrome.tabs.remove(dupes);
        return dupes.length;
    }

    /** Sort with custom comparator */
    static async custom(comparator: (a: chrome.tabs.Tab, b: chrome.tabs.Tab) => number, windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const sorted = [...tabs].sort(comparator);
        await this.reorder(sorted);
    }

    /** Move pinned tabs to start */
    static async pinnedFirst(windowId?: number): Promise<void> {
        const tabs = await this.getTabs(windowId);
        const pinned = tabs.filter((t) => t.pinned);
        const unpinned = tabs.filter((t) => !t.pinned);
        await this.reorder([...pinned, ...unpinned]);
    }

    private static async getTabs(windowId?: number): Promise<chrome.tabs.Tab[]> {
        return chrome.tabs.query({ windowId: windowId || chrome.windows.WINDOW_ID_CURRENT });
    }

    private static async reorder(tabs: chrome.tabs.Tab[]): Promise<void> {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id) await chrome.tabs.move(tabs[i].id!, { index: i });
        }
    }

    private static extractDomain(url: string): string {
        try { return new URL(url).hostname; } catch { return url; }
    }
}
