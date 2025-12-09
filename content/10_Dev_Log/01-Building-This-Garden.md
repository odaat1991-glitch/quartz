---
title: Building My Digital Garden
date: 2025-12-09
tags: [dev, quartz, meta]
cssclasses: [wide-layout]
---

# Hello World!

I finally decided to carve out my own corner of the internet. This site is a "Digital Garden"—a place where my notes on coding, miniatures, and life can grow over time, rather than just vanishing into a social media feed.

## The Stack

I'm building this using **Quartz v4**, which turns my local **Obsidian** vault into a fast, static website.

The best part? I'm using **Antigravity** (an AI-powered IDE) to help me write the code. It feels like pair programming with a very patient senior dev.

## Customizing the Vibe

I wanted a specific aesthetic: **"Trans Girly Coder."**

We customized `quartz.config.ts` to use a deep "Catppuccin" style dark mode with pastel pink (`#f5c2e7`) and trans-pride blue (`#5bcefa`) accents. It looks super clean but still feels like *me*.

## The "Folder Name" Fix

One tricky part was that I like to number my folders in Obsidian to keep them sorted (e.g., `10_Dev_Log`), but I didn't want those ugly numbers showing up on the website sidebar.

We fixed this by injecting a custom map function into `quartz.layout.ts`:

```typescript
mapFn: (node) => {
  // strip numeric prefixes and underscores
  node.displayName = node.displayName.replace(/^\d+_/, "").replace(/_/g, " ")
}
```

Now, `10_Dev_Log` displays neatly as **Dev Log**.

## What's Next?

I'm going to start migrating my notes on **Warhammer/DnD Projects**, **Magic: The Gathering strategies**, **Concerts**, and a current **Game Review**.. Stay tuned!
