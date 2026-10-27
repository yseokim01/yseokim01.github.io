# yseokim01.github.io

Blank website structure adapted from `ziseoklee.github.io`.

The original CSS, responsive navigation, light/dark theme, fonts, page paths,
section headings, tables, and forms are retained. Personal text, project and
publication data, images, documents, videos, and external service integrations
are omitted from the source site. The home page uses the supplied profile photo
at `assets/images/yseokim_profile.jpg`. The site logo and page icons use
the filled `assets/images/bunny_logo.png`. Logos switch to the transparent white
`assets/images/bunny_logo_dark.png` when the site's dark mode is selected.
Page icons independently follow the browser's color scheme: white in dark mode
and dark blue in light mode, updating automatically when that preference changes.
The original outlines are preserved as `assets/images/bunny_logo_outline.png` and
`assets/images/bunny_logo_outline_dark.png`; other image slots use CSS placeholders.
Empty home-page sections, the biography's About Me toggle, and Study navigation
are commented out. Other unfinished pages remain accessible. Publications is
blank apart from its page heading. Forms remain disabled until configured.

Edit the HTML pages to add content. Replace `.image-placeholder` spans with
your own images, and configure links and forms when ready. The home page's
Projects section is commented out for now; the project listing retains five
blank project cards. `myprojects.json` and `mypapers.bib`
are empty starter files; no content is fetched automatically.

Preview locally:

Open `index.html` directly in your browser or editor preview. Styles, scripts,
and navigation use page-relative paths, including on nested pages.

Alternatively, serve the repository:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. The same files also work on GitHub Pages and when
served from a subdirectory.

The adapted HTML5 UP theme retains its attribution and license in
`LICENSE-theme.txt`. The repository's existing `LICENSE` is unchanged.
