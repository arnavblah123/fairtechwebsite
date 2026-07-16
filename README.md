# Fairtech Engineers — Company Website

Static marketing site for **Fairtech Engineers**, a heavy fabrication company
(est. 1989, ISO 9001:2015 TUV Austria certified) with 3 manufacturing units in
Pune and Vadodara, India.

Plain HTML + CSS + vanilla JavaScript. No framework, no build step — the repo
root **is** the deployable site.

## Structure

```
index.html          Home — hero, stats, product/service snapshots, clients, mission
about.html          Company story, mission & vision, ISO certification, leadership, 3 units + maps
products.html       11 product lines with descriptions and photos
services.html       7 value-added services (photos pending — see checklist below)
capabilities.html   Machinery icon grid + spec table
clients.html        Client trust bar, Thermax relationship, OEM/EPC focus
contact.html        Enquiry form (formsubmit.co), phone/email, maps for all 3 units
css/style.css       Single shared stylesheet
js/main.js          Nav toggle, scroll reveal, active link, image fallbacks
favicon.svg         Star "ft" mark favicon
sitemap.xml         SEO sitemap
robots.txt          Crawler rules
images/             Photos (see images/README.md for the expected filenames)
```

## Deploying for free

The site is completely static, so any free static host works. Push this repo
to GitHub first, then pick one:

### Netlify

1. Sign up at [netlify.com](https://netlify.com) (free tier).
2. **Add new site → Import an existing project → GitHub** and select this repo.
3. Leave **Build command** empty and set **Publish directory** to `/` (root).
4. Deploy. You get a `*.netlify.app` URL immediately; add the custom domain
   (e.g. `fairtechengineers.co`) under **Domain settings** and follow the DNS
   instructions.

### Cloudflare Pages

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com) (free tier).
2. **Create a project → Connect to Git** and select this repo.
3. Framework preset: **None**. Build command: empty. Output directory: `/`.
4. Deploy. You get a `*.pages.dev` URL; attach the custom domain under
   **Custom domains** (easiest if the domain's DNS is on Cloudflare).

### Also works, zero config

- **Vercel**: import the repo, framework preset "Other", no build command.
- **GitHub Pages**: repo **Settings → Pages → Deploy from branch**, pick the
  default branch and `/ (root)`.

Every push to the connected branch redeploys automatically on all of these.

## Pre-launch checklist

### 1. Service photos still needed (7 placeholders)

These files are referenced by `services.html` but are **not** in `images/`
yet. The page shows a "Photo coming soon" treatment until each file is added
(no HTML changes needed — just drop the file in `images/`):

- [ ] `images/service_laser_cutting.jpg`
- [ ] `images/service_plasma_cutting.jpg`
- [ ] `images/service_epc_chimney_ducting_piping.jpg`
- [ ] `images/service_pressure_vessel_oil_gas.jpg`
- [ ] `images/service_pressure_vessel_wastewater.jpg`
- [ ] `images/service_painting_blasting_insulation.jpg`
- [ ] `images/service_export_packing.jpg`

### 2. Company photos

The real logo, ISO certificate, unit, product and machinery photos are all
committed in `images/`, with one exception:

- [ ] `images/machinery_magnetic_drill.png` — not yet added. The Capabilities
  page shows a clean striped "Magnetic Drill Machine" placeholder panel until
  this file is dropped into `images/` (no HTML change needed).

`images/README.md` lists every expected filename. Any page referencing a
missing image degrades gracefully to a named placeholder panel.

### 3. Contact form activation (one-time)

The contact form posts to [formsubmit.co](https://formsubmit.co) targeting
`info@fairtechengineers.co`. After the site is live, submit the form once —
FormSubmit sends a confirmation email to that inbox; click the activation
link and all subsequent submissions will be delivered. Optional hardening:
replace the email in the form `action` with the random alias FormSubmit
gives you after activation, so the address isn't scraped from the HTML.

### 4. Domain in SEO files

`sitemap.xml`, `robots.txt`, canonical links and Open Graph tags assume the
site will live at `https://www.fairtechengineers.co/`. If you deploy to a
different domain, search-and-replace that base URL across `sitemap.xml`,
`robots.txt` and the `<head>` of each HTML page.

## Local preview

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
