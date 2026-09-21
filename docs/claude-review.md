# Site review: open issues and recommendations

Started 2026-09-21 during a full audit of mitchellaaron.com. Open items are checkboxes, grouped by what it takes to deploy them. When one ships, tick it and move it to **Done** with the date.

## Ground rules

- **The droplet runs Node 10.22.0 with npm 6.** Code must run on Node 10. Adding or upgrading a package the server uses means running `npm install` on the droplet, so plan for that before doing it.
- **Deploy flow:** build locally, commit `src/dist/`, push, then `git pull` on the droplet. The server reads `src/dist/bundle.js` and `src/index.html` from disk, so front-end changes go live on pull. Changes to `src/server_3000.js` or `src/api/` also need the Node process restarted.
- **Build with `npm run build` before committing.** `npm start` writes a development build with a source map into `src/dist/`.
- **Run `nvm use` in every new terminal.** This machine defaults to Node 22, and npm 7+ fails with `ERESOLVE` on this project's old `react-redux`/`redux` pair.
- **`.env` is read only when the server starts.** Restart `npm start` after editing it.
- **Port 3000 is often taken locally** by other projects (e.g. the fake-sports-league Next.js dev server). Run `PORT=3001 npm start` to use another port. Production uses 3000 because `PORT` isn't set there.

## Open: front-end only (rebuild, commit, `git pull`)

- [ ] **The login form shows the raw word "pending"** while it waits ([LoginForm.js](../src/components/LoginForm/LoginForm.js)). It also shows the "magic word" message for every failure, including network errors.
- [ ] **Accessibility pass.**
  - Icons and images have no `alt` text: social icons, hamburger, modal prev/next/close, `InlineImage`, contact art.
  - Icon-only buttons need `aria-label`.
  - Gallery and case-study menus are `<li onClick>` rather than links, so they can't be reached by keyboard or opened in a new tab ([NavigationLinksGalleries.js](../src/components/Global/Navigation/NavigationLinksGalleries/NavigationLinksGalleries.js), [NavigationLinksCaseStudies.js](../src/components/Global/Navigation/NavigationLinksCaseStudies/NavigationLinksCaseStudies.js)).
  - The social links put a `<button>` inside an `<a>`.
  - Contact form `<label>`s aren't tied to their inputs.
- [ ] **Link previews are the same for every page.** Crawlers don't run JavaScript, so the per-page `react-helmet` tags are never seen; only the site-wide tags in [index.html](../src/index.html) count. Per-page previews need the server to inject meta tags (a server restart). The modal's `og:image` also builds a broken URL (`'https://mitchellaaron.com/images/' + image.url`, where `image.url` is already a full URL) in [Modal.js](../src/components/Modal/Modal.js).
- [ ] **Content to refresh:**
  - The bio says "lead designer of the Trust & Safety team from January 2021 to present"; confirm it's still true ([HomeAbout.js](../src/components/Content/HomeAbout/HomeAbout.js)).
  - The newest review quotes are from 2022.
  - The Web Development intro lists older tools (Jade, Haml, Stylus, Flux, Rails, PHP) and describes the projects as Cogo Labs-era work ([Projects.js](../src/components/Gallery/Projects/Projects.js)).
- [ ] **The privacy policy is dated 12/22/2016.** It describes Google Analytics and says no data is stored, but the login token is kept in `localStorage`. Update it together with the analytics decision below.
- [ ] **The README is out of date.** Add `nvm use`, the port 3000 note, `.env` keys and the deploy steps above.

## Open: server changes (`git pull` + restart, no `npm install`)

Batch these so the droplet only restarts once. Nothing is open here right now; per-page link previews (above) would be the next one.

## Open: deferred decisions

### Case studies aren't confidential (the lock is cosmetic)

The password gate only hides the case studies in the page. Their full text and image URLs are readable in:
- the public GitHub repo: current code and every past commit ([RoverCRO.js](../src/components/Content/CaseStudy/RoverCRO/RoverCRO.js), [RoverHomepageVision.js](../src/components/Content/CaseStudy/RoverHomepageVision/RoverHomepageVision.js))
- the live `bundle.js`, and until the next deploy, the live `bundle.js.map`
- the case-study image URLs in DigitalOcean Spaces, which are public-read

**Status:** deferred on 2026-09-21. The current Rover case studies aren't very sensitive, so this will be handled when new case studies are added.

**Rule until then:** don't add a confidential case study as a React component under `src/`. It would be exactly as public as the current ones. Build the server-side delivery first.

**Plan when revisiting:**
1. Make the GitHub repo private. This hides the code and history in one step. The Web Development page links to this repo and invites visitors to read the code ([projects.js](../src/store/constants/projects.js)), so drop that sentence and link. Keeping the repo public would require rewriting git history, which isn't recommended.
2. Move case-study content out of the bundle. Store it as HTML files outside `src/`, either in the now-private repo or copied to the droplet like `.env`. Add an Express endpoint that returns a file only when the request has a valid token, and have the Gallery page fetch it after login. This needs no new packages, so it works on Node 10. The existing components can be rendered to HTML once with `ReactDOMServer.renderToStaticMarkup`, which keeps the layout and CSS classes. Needs a server restart.
3. Move the case-study images in Spaces to a new, hard-to-guess folder so the old public URLs stop working. Fully private images would need signed URLs and an S3 client package (an `npm install` on the droplet).
4. Consider rotating `SECRET_COOKIE_TOKEN` afterwards. Everyone who has logged in keeps access until it changes, because the token is a single shared value stored in `localStorage`.

Old bundles may already be in caches or the Wayback Machine, and that can't be undone.

### Analytics is dead

[index.html](../src/index.html) loads Universal Analytics (`UA-89439045-1`), which Google shut down in July 2023, so nothing has been recorded since. The options are GA4 (a new `G-` measurement ID), a privacy-friendly alternative, or removing it. Update the privacy policy to match whichever you choose. Deferred on 2026-09-21.

## Open: needs droplet work (plan a dedicated session)

- [ ] **Node 10 has been end-of-life since April 2021** and gets no security fixes. Upgrading Node on the droplet also means retesting the server packages: `express`, `body-parser`, `helmet`, `nodemailer` 0.7 (from 2014), `dotenv`, `xss`, and `forever` (consider pm2 or systemd).
- [ ] **Dependency alerts.** GitHub Dependabot reports 106 (it jumped from 21 once `package-lock.json` let it see nested dependencies) and `npm audit` reports 188. Most are in build tooling, but fix the server-side ones along with the Node upgrade. Don't run `npm audit fix` on Node 10; it upgrades to versions that don't run there.
- [ ] **Local build tooling is frozen in 2016–2018:** webpack 1, Babel 6, node-sass 4, React 16, react-router 3. It only builds under Node 10 (an x64 build via Rosetta on Apple Silicon). This is local-only because the droplet never builds, but it's the biggest long-term upkeep cost. The modern path is webpack 5 or Vite, Dart Sass, and a newer React/router.

## Done

### 2026-09-21
- Local setup on the new machine: added `.nvmrc` (10.22.0), updated `node-sass` to 4.14.1 and capped `webpack-dev-server` at `^3.11.3` for Node 10, and added `package-lock.json`. Pushed as `6ef138b`.
- **Server batch.** Deploying it needs `git pull` plus a restart of the Node process.
  - Only `src/dist` and `favicon.ico` are served now. Source files like `/server_3000.js` return the site page instead of code.
  - Deleted the `console.log` that printed the secret token.
  - Contact form: added a hidden honeypot field (`website`). Bot messages that fill it are discarded but look successful to the bot, and the server logs each one. Empty fields and invalid email addresses are rejected before any email is sent.
  - The port comes from `PORT`, defaulting to 3000.
  - Deleted the dead gzip route.
- Front-end additions:
  - The contact fields are `required` and the email field is `type="email"`.
  - Login and token requests that fail on the network or return a non-JSON error now end in an error instead of hanging on "pending". Error statuses such as 502 no longer count as success.
  - `index.html` now has a meta description, `og:type`, `og:url` and `twitter:card`.
- Front-end fix batch:
  - Links without a leading `/` (footer Terms/Privacy, "send me a message") were resolving to URLs like `/gallery/terms`, which crashed on refresh.
  - Unknown gallery names and bad image numbers now show the 404 page instead of a blank screen.
  - Login no longer shows the "magic word" error while a correct password is being checked, and no longer stores `"undefined"` as a token.
  - The "Walk to School" collage image URL is fixed and the image is shown again.
  - The Schillaci Guitars GitHub and website links are fixed.
  - Project wireframe and mockup links now point to Spaces; the old local `images/` paths opened the 404 page.
  - Content: "Lead Product Designer", headline trimmed to Trust & Safety, Raleigh, NC in the page descriptions, the bio's year count updates itself, typo fix.
  - `redux-logger` is no longer in production, so visitors' consoles stay clean.
  - The Home scroll listener leak, the invalid `<div id="app" />`, and four imports that only built on macOS are fixed.
  - `bundle.js.map` is removed from git and ignored going forward.
