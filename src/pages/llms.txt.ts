import { site, fullAddress } from '../data/site';
import { classes } from '../data/classes';
import { areas } from '../data/areas';
import { faqs } from '../data/faqs';

// Plain-text summary for AI assistants (llmstxt.org convention).
export function GET() {
  const body = `# ${site.name}

> Locally and veteran-owned security officer and firearms training academy in Longview, Texas, in business since ${site.founded}. Teaches Texas Level 2 (unarmed) and Level 3 (armed) security officer classes, Level 3 requalification, Texas License to Carry (LTC), permitless carry training, pepper spray certification, and private and basic handgun lessons. All classes are taught by Don Radcliffe.

- Phone: ${site.phone}
- Email: ${site.email}
- Address: ${fullAddress} (${site.locationNote})
- Google: ${site.googleRating} stars from ${site.googleReviewCount} reviews (${site.googleCid})
- Facebook: ${site.facebook}
- Texas DPS license numbers: ${site.licenseNumbers.join(', ')}
- Payment: cash or check, at the time of class
- Sign up: call to reserve a seat
- Serves students within about ${site.serviceRadiusMiles} miles of Longview

## Instructor

Don Radcliffe: former Dallas police officer and Dallas County constable; Texas handgun license instructor since 1995; Texas Level 3 security instructor since 2010; TCOLE-certified firearms instructor; NRA Certified Range Safety Officer; Intermediate Peace Officer certification.

## Schedule

- License to Carry and permitless carry: 2nd and 4th Saturday of every month, 8:00 am to 2:30 pm (November and December vary)
- Level 3 requalification: 2nd Tuesday of each month when practical, 9:00 am to 2:30 pm
- Level 2 ($100): every other month starting in January, Wednesday, 9:00 am to 2:30 pm
- Level 3 ($300): follows Level 2, Thursday and Friday then Monday to Wednesday, 8:00 am to about 5:00 pm
- Private training: any time

## Classes

${classes.map((c) => `- [${c.name}](${site.url}/classes/${c.slug}/): ${c.summary}${c.price ? ` ${c.price}.` : ''}`).join('\n')}

## FAQ

${faqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Service area

${areas.map((a) => `- [${a.city}, TX](${site.url}/areas/${a.slug}/)`).join('\n')}

## Pages

- [Schedule](${site.url}/schedule/)
- [About](${site.url}/about/)
- [FAQ](${site.url}/faq/)
- [Contact](${site.url}/contact/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
