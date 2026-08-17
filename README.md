# PARTCONCEPTS project page

Static project page for *PARTCONCEPTS: A Unified Mechanism for Fine-Grained Part
Localization and Generation* (NeurIPS 2026 submission). Plain HTML/CSS/JS, no
build step.

## Publish it on GitHub Pages

1. Create a new GitHub repo (public). If it's named `<username>.github.io`, the
   site is served at the root; any other name works too and is served at
   `https://<username>.github.io/<repo-name>/`.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial project page"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source → Deploy from
   a branch**, pick `main` / `(root)`, save. The page goes live at the URL
   above within a minute or two.

## Before sharing the link

This is currently wired up for an **anonymous, double-blind submission**:

- `index.html` has author names/affiliation, the Code and arXiv buttons, and
  the BibTeX entry all set to placeholders — search for `Anonymous` and the
  `<!-- NOTE -->` comment near the top of `<head>` to find every spot to
  update once the paper is de-anonymized.
- **Check your venue's dual-submission / anonymity policy** before making
  this page public while the paper is under review — a public project page
  can be considered a deanonymization risk at some venues.
- `paper.pdf` is a straight copy of the submitted PDF (~30MB) — swap it out
  or point `Paper (PDF)` at an arXiv/OpenReview link once one exists.

## Structure

```
index.html            all page content
assets/css/style.css   design tokens (light + dark via prefers-color-scheme) and layout
assets/js/main.js      BibTeX copy button + back-to-top button
assets/img/            figures cropped from the paper PDF
paper.pdf              local copy of the paper
```

Figures were cropped directly from the paper's rendered PDF pages (not the
paper's own embedded raster assets), so they include the paper's original
vector-drawn labels/arrows/captions baked in as pixels.
