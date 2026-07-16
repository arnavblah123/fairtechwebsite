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

### 1b. New machinery photos needed (4)

Referenced by `capabilities.html`; each card shows a labelled placeholder
panel until the photo is dropped in:

- [ ] `images/machinery_laser_cutting_machine.png`
- [ ] `images/machinery_bending_machine.png`
- [ ] `images/machinery_cnc_plasma_cutting_machine.png`
- [ ] `images/machinery_shearing_machine.png`

### 1c. Client logos needed (9)

Referenced by the home trust bar and `clients.html`. Each tile shows a clean
text wordmark of the company name until its logo file is added, then the logo
appears automatically. Use transparent PNGs (~400×200px):

- [ ] `images/client_thermax.png`
- [ ] `images/client_forbes_marshall.png`
- [ ] `images/client_tkil.png`
- [ ] `images/client_transformers_rectifiers.png`
- [ ] `images/client_monarch_transformers.png`
- [ ] `images/client_ankur_scientific.png`
- [ ] `images/client_lnt.png`
- [ ] `images/client_megha_engineering.png`
- [ ] `images/client_pnc_infratech.png`

> Note: client logos are trademarks of their respective owners. Show them
> only for companies that are genuinely your clients/customers.

### 2. Company photos

All real photos are committed in `images/` — logo, ISO certificate, unit
plants, all 11 product photos and all 12 machinery photos. The folder also
includes extra product variant photos (e.g. `product_chimney_2.jpeg`,
`product_air_preheater_3.png`) that are not yet used on any page but are
available if you want to add a gallery or swap the primary image.

`images/README.md` lists the expected filenames. If any image is ever
missing, the page degrades gracefully to a named placeholder panel.

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
