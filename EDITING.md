# Editing the websites

All the websites live on the `main` branch, each in its own folder under `sites/`.
Edit the file, then release (see `RELEASING.md`). One release updates all of them.

| Website | Folder | What the files are |
|---|---|---|
| mirasai.co **and** mirasai.co/v3 | `sites/v3/` | Plain HTML pages (one source, built twice) |
| mirasai.co/v1 | `sites/v1/` | Plain HTML pages |
| mirasai.co/v2 | `sites/v2/` | React components (`.tsx`) |

`sites/main/` is the previous mirasai.co (live until November 2026). It is kept
for reference only; nothing builds from it.

## Find a page

Each page is `index.html` inside a folder named like its address:

- `mirasai.co/about` and `mirasai.co/v3/about` → `sites/v3/about/index.html`
- `mirasai.co/v1/contact` → `sites/v1/contact/index.html`
- Home page → `index.html` directly in the site's folder

The quickest way to find any word or sentence: search for it in your editor
across the `sites/` folder (in VS Code, Cmd+Shift+F).

## Text that is not in the page files

A few sections are added by the build scripts, so search there too if a
sentence is not found under `sites/`:

| Website | Section | File |
|---|---|---|
| mirasai.co and /v3 | Services page body, home page FAQ, careers job descriptions, service page descriptions | `scripts/assemble-v3.mjs` |
| mirasai.co and /v3 | Work page app cards and every case study page (`/work/...`) | `scripts/v3-work.mjs` |

## Styles and images

- Styles: `styles.css` in each HTML site's folder; for v2, `sites/v2/index.css`.
- Images for mirasai.co and v3: `sites/v3/projects/`.
- Images for v2: `public/`.

## Check before releasing

Run `npm run build`, then open `dist/` with any static server, for example
`python3 -m http.server 8090 -d dist`, and visit http://localhost:8090.
