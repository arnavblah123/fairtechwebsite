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

### 1. Service photos — done

All 4 service cards now use real photos (`service_laser_plasma_cutting.jpg`,
`service_epc_chimney_ducting_piping.jpg`, `service_painting_blasting.jpg`,
`service_insulation_packing.jpg`) — nothing outstanding here.

### 1b. New machinery photos — done

The `capabilities.html` shop-floor cards all have photos now:
`machinery_laser_plasma_machine.jpg` (Laser & Plasma Machine, reusing the
services cutting photo), `machinery_bending_machine.png`, and
`machinery_shearing_machine.png` (both use the supplied press-brake photo).

### 1c. Client logos — all 14 live

All 14 client tiles on the home trust bar and `clients.html` now show real
logos: Thermax, Forbes Marshall, TKIL, Transformers & Rectifiers (TARIL),
Monarch Transformers, Ankur, L&T, Megha Engineering (MEIL), PNC Infratech,
Saint-Gobain, LM Wind Power, Nirma, Nestlé, GE.

Could still be improved (source files are edge-cropped):
- [ ] `images/client_saint_gobain.jpg` — cropped ("AINT-GOBA"); a full logo
  would look better.
- [ ] `images/client_nirma.png` — cropped ("IRMA"); a full logo would look
  better.

> Note: client logos are trademarks of their respective owners. Show them
> only for companies that are genuinely your clients/customers.

### 2. Company photos

All real photos are committed in `images/` — logo, ISO certificate, all
three plant photos (Unit-1 Chinchwad, Unit-2 Dehu and Unit-3 Savli, the
latter two taken from the company profile PDF), all 12 product photos and
12 machinery photos.

The folder also includes extra product variant photos (e.g.
`product_chimney_2.jpeg`) not yet used on any page — available for a future
gallery or image swap. If any image is ever missing, the page degrades
gracefully to a named placeholder panel.

### 3. Contact form activation (one-time)

The contact form posts to [formsubmit.co](https://formsubmit.co) targeting
`marketing@fairtechengineers.co`. After the site is live, submit the form
once — FormSubmit sends a confirmation email to that inbox; click the
activation link and all subsequent submissions will be delivered. Optional
hardening: replace the email in the form `action` with the random alias
FormSubmit gives you after activation, so the address isn't scraped from HTML.

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
