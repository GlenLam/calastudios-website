# calastudios.app

Studio site for CaLa Studios LLC, the umbrella company behind Stop Motion Movie Maker, WallyPaper and Kawali. Static HTML with no build step and no third-party requests, served by GitHub Pages at **https://calastudios.app**. It replaces the earlier Google Sites page. Each app keeps its own site, with its own support page and privacy policy (the URLs in its App Store listing). This site introduces the studio and links to them.

Questions go to support@calastudios.app.

## Pages

| Path | File | Purpose |
| --- | --- | --- |
| `/` | `index.html` | The studio and its apps, how we make apps, where to get help |
| `/privacy` | `privacy.html` | Privacy policy for this website, with links to each app's own policy |
| `/404` | `404.html` | Not-found page |
| `/home` | `home.html` | Redirect to `/` (old Google Sites address) |
| `/wallypaper` | `wallypaper/index.html` | Redirect to https://wallypaper.app/ (old Google Sites address) |
| `/wallypaper/wallypaper-privacy-policy` | `wallypaper/wallypaper-privacy-policy.html` | Redirect to https://wallypaper.app/privacy (old Google Sites address) |

GitHub Pages can't send server redirects, so the three redirect pages use `<meta http-equiv="refresh">` plus `location.replace`, with a canonical link to the new address. Search engines treat that as a permanent redirect. They stay out of `sitemap.xml`. Neither App Store listing uses them (both point at their own sites), so they only catch old bookmarks and search results.

## Layout

- `assets/css/site.css`: the one stylesheet. Light only, like the app sites. The colors are the original Google Sites page's: white, CaLa orange `#EA9010` (the logo, buttons, the smile under "yours", arrows), cream `#FDF4E7` (that orange at 10% on white, for the hero, the "How we make apps" band and the app cards' icon panels), text `#212121` and `#6A6A6A`, and the light green footer `#C9E3AD`. Button text is `#212121`, not white, because white on the orange is too faint to read. Type is the system font (SF Pro on Apple devices), so the site downloads no fonts.
- `assets/js/site.js`: fills in the footer year. Nothing else.
- `assets/img/`:
  - `logo.webp`: the "calastudios" wordmark on its orange pill, taken from the Google Sites header image (1288×393) and resized to 132 px tall. It shows at 40 px.
  - `icon-*.png`: the "ala" smiley (`CS_emoji.png`, 513 px). The 16 and 32 favicons keep its rounded corners. The 180, 192 and 512 icons are filled out to a square in its orange `#EA9123`, because iOS rounds touch icons itself and would turn transparent corners black.
  - `app-*.webp`: each app's `icon-512.png` from its own site, resized to 256 with `cwebp -q 86`.
  - `app-store-badge.svg`: Apple's badge.
  - `og-image.jpg`: a 1200×630 HTML composition (site.css, the wordmark, the headline and the three icons on cream), rendered with headless Chrome.
- The four icons in "How we make apps" follow Lucide (ISC license) and are inlined with `currentColor`.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`: the usual metadata.
- `CNAME`: `calastudios.app`, so the custom domain survives redeploys.
- `.nojekyll`: tells Pages to publish the files as they are.

## Updating

Edit the HTML, commit to `main`, push. Pages redeploys in about a minute. Every page links the stylesheet as `site.css?v=YYYYMMDD`: **when `site.css` changes, bump that date on all six pages** (add a letter for a second change the same day), or visitors can get new HTML with old styles.

App facts on this site (the one-line descriptions, devices, App Store URLs) follow each app's own site. When one changes there, update its card here and its entry in the JSON-LD at the top of `index.html`. The "How we make apps" promises must stay true for every app: no ads or tracking, things kept on the device, and people who answer email. Kawali deliberately makes no "no account" claim, so the studio site doesn't either. Check a new app against them before adding it.

### Adding an app

1. Add its icon as `assets/img/app-<name>.webp` (256 px, from its site's `icon-512.png`).
2. Copy a card (`<li class="app">`) in `index.html`.
3. Add a row to the help list, a link in `privacy.html`'s "Our apps", and a `SoftwareApplication` entry to the JSON-LD.
4. The hero shows three fanned icons. With a fourth app, choose which three appear there or adjust the positions.
5. Add a footer link back to https://calastudios.app on the app's own site.

### When Kawali goes live

Replace `<span class="soon" data-store>…</span>` on Kawali's card with the badge, the same markup as the other two cards with Kawali's App Store URL. Add `downloadUrl` to Kawali's JSON-LD entry.
