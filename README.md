# chrome-tab-sort

Sort tabs by various criteria in Chrome extensions.

## Overview

chrome-tab-sort provides utilities to organize tabs by URL, title, or activity.

## Installation

```bash
npm install chrome-tab-sort
```

## Usage

```javascript
import { TabSort } from 'chrome-tab-sort';

await TabSort.byUrl();
await TabSort.byTitle();
await TabSort.byActivity();
```

## License

MIT
