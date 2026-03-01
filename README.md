# chrome-tab-sort — Tab Sorting Utilities
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-tab-sort`

Sort by title, URL, domain, last accessed, custom comparator, deduplicate, and pinned-first.

```typescript
import { TabSort } from 'chrome-tab-sort';
await TabSort.byDomain();
await TabSort.byLastAccessed();
const removed = await TabSort.deduplicate();
```
MIT License
