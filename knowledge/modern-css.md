---
title: Modern CSS Techniques
date: 2026-03-21
tags: [web, css, design]
author: Tech Lead
---

# Modern CSS Techniques

CSS has evolved rapidly. Here are some modern features you should be using.

## 1. CSS Grid
Grid is the most powerful layout system available in CSS. It's a 2D system, meaning it can handle both columns and rows.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
\`\`\`

## 2. Container Queries
Finally, we can style elements based on the size of their container rather than the viewport.

## 3. Logical Properties
Use \`margin-inline\` instead of \`margin-left\`/\`margin-right\` for better internationalization support.

### Resources
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
