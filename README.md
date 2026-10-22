# Prepared Advantage Academy website

Astro static site. 34 pages: home, 6 class pages, classes overview, schedule, about, FAQ, gallery, contact, 18 city pages, service-area index, thanks and 404.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo **in one commit** so Vercel builds once.
2. Vercel → New Project → import the repo. It detects Astro. Click Deploy.
3. Project Settings → Domains → add `preparedadvantage.com` and `www.preparedadvantage.com`.
4. In **GoDaddy** DNS, point the domain at Vercel using the records Vercel shows you (A record for the root, CNAME for www). Remove the old Hibu records.
5. Cancel the Hibu site only after the new one is live on the domain.

## Before launch checklist

- [ ] **Photos** — the site loads the generated photos from the Higgsfield CDN. To self-host, download each one from the Higgsfield library, save it in `public/images/` with the names in `src/data/images.ts`, then set `USE_LOCAL = true` in that file. When Don sends real photos, use the same file names.
- [ ] **Logo** — the header uses a mark built from the colored targets on his classroom wall. If Don has an original logo file he owns, swap it into `src/components/Header.astro`.
- [ ] **Prices** — LTC, permitless carry, requalification and private training show "Call for price". Add prices in `src/data/classes.ts` (`price` and `priceValue`) if Don wants them shown.
- [ ] **Contact form** — after launch, submit one test entry. FormSubmit emails preparedaa@aol.com a one-time activation link; click it and the form works from then on. Check the AOL spam folder.
- [ ] **City distances** in `src/data/areas.ts` are approximate road miles. Adjust any that look off.
- [ ] **Google Business Profile** — make sure the website link is `https://www.preparedadvantage.com/`. Add business hours ("by appointment" or class times) since the profile shows them as missing. Claim the listing if it's unclaimed ("Own this business?" shows on Google).
- [ ] **Search Console** — the existing verification tag is kept, so the property stays verified. Submit `/sitemap-index.xml` and request indexing on the home page.

## Where to edit things

| What | File |
|---|---|
| Phone, email, address, license numbers, Google links, rating | `src/data/site.ts` |
| Classes (copy, prices, hours, FAQs) | `src/data/classes.ts` |
| City pages | `src/data/areas.ts` |
| General FAQs | `src/data/faqs.ts` |
| Photos | `src/data/images.ts` |
| Colors and fonts | `src/styles/global.css` |
| Upcoming-dates board | `src/components/NextClasses.astro` |

## SEO and AI search built in

- Unique title, description and canonical URL on every page; Open Graph and Twitter tags with a share image
- LocalBusiness + EducationalOrganization schema site-wide (address, geo, 100-mile service area, license numbers, Facebook and Google Maps links)
- Person schema for Don, Course schema on each class page, FAQPage and BreadcrumbList schema
- A page per class and per city, cross-linked
- `sitemap-index.xml`, `robots.txt` that welcomes AI crawlers, and `/llms.txt` summary for AI assistants
- 301 redirects from the old Hibu URLs (`vercel.json`) so existing Google rankings carry over
- Google Maps embed and directions links to his listing
- The schedule board calculates the next class dates from his recurring pattern, so it never goes stale

## Content updates from the old site

- TCLEOSE → TCOLE (renamed 2014); CHL → License to Carry (renamed 2016); added permitless carry context
- Fixed "Prepper Spray" typo
- Old dated schedule replaced with the recurring pattern
- Hibu video, Hibu legal links and Hibu-hosted images removed
