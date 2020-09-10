---
title: Updating from 1.4.3 to 1.5.0
author: Conrad VanLandingham
---

Override names have been added (or changed) to all instances of `styled` and `withTheme`. This will require updating.

How are they named?

- The namming convention is `package-name.File/ComponentName.StyledComponentName`.
- For example, `H1` has been changed to `ui-kit.Typography.H1`.

Action required

1. Open the theme overrides
2. Search for an identifiable part of each override name from theme overrides (ex: `H1`) in this search within github: (https://github.com/ApollosProject/apollos-apps/search?p=1&q=H1&type=Code&unscoped_q=H1)
3. Easily see where changes were made and update names accordingly (ex: `ui-kit.Typography.H1`)
