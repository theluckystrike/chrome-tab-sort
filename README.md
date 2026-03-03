# chrome-tab-sort

[![npm version](https://img.shields.io/npm/v/chrome-tab-sort)](https://npmjs.com/package/chrome-tab-sort)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-tab-sort/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-tab-sort/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-tab-sort?style=social)](https://github.com/theluckystrike/chrome-tab-sort)

> Sort tabs by various criteria in Chrome extensions.

**chrome-tab-sort** provides utilities to organize tabs by URL, title, or activity. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Overview

chrome-tab-sort provides utilities to organize tabs by URL, title, or activity.

## Features

- ✅ **Sort by URL** - Alphabetical URL sorting
- ✅ **Sort by Title** - Alphabetical title sorting
- ✅ **Sort by Activity** - Sort by last active time
- ✅ **Sort by Domain** - Group by domain
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-tab-sort
```

## Usage

```javascript
import { TabSort } from 'chrome-tab-sort';

// Sort current window by URL
await TabSort.byUrl();

// Sort by title
await TabSort.byTitle();

// Sort by activity (most recent first)
await TabSort.byActivity();

// Sort all windows
await TabSort.byUrl({ allWindows: true });
```

## API

### Methods

| Method | Description |
|--------|-------------|
| `TabSort.byUrl(options?)` | Sort tabs by URL |
| `TabSort.byTitle(options?)` | Sort tabs by title |
| `TabSort.byActivity(options?)` | Sort by last activity |
| `TabSort.byDomain(options?)` | Group by domain |

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allWindows | boolean | false | Sort all windows |
| ascending | boolean | true | Sort order |

## License

MIT — [Zovo](https://zovo.one)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/sort-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/sort-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [chrome-tab-search](https://github.com/theluckystrike/chrome-tab-search) - Tab search
- [chrome-tab-discard](https://github.com/theluckystrike/chrome-tab-discard) - Tab discarding
- [webext-tabs-overview](https://github.com/theluckystrike/webext-tabs-overview) - Tab dashboard

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
