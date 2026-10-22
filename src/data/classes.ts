// Each entry becomes a page at /classes/<slug>/ and appears in the nav, schema and sitemap.
export type Faq = { q: string; a: string };
export type ClassInfo = {
  slug: string;
  name: string;
  short: string; // nav / card label
  title: string; // <title>
  description: string; // meta description
  summary: string; // card text
  price?: string;
  priceValue?: number;
  hours: string;
  when: string; // recurring pattern, plain words
  who: string;
  image: string; // key in images.ts
  body: string[]; // paragraphs
  covers: string[];
  bring: string[];
  faqs: Faq[];
};

export const classes: ClassInfo[] = [
  {
    slug: 'level-3-armed-security-officer',
    name: 'Level 3 Armed Security Officer Class',
    short: 'Level 3 armed security',
    title: 'Level 3 Armed Security Officer Class in Longview, TX',
    description:
      'Texas Level 3 armed security officer training in Longview, TX: handgun and shotgun qualification, laws and defensive tactics. $300. (903) 238-5483.',
    summary:
      'The highest commission a Texas security officer can hold. Laws, procedures, defensive tactics, semi-automatic handgun and shotgun qualification.',
    price: '$300',
    priceValue: 300,
    hours: '8:00 am to about 5:00 pm each class day',
    when: 'Every other month starting in January. Level 3 runs Thursday and Friday, then Monday through Wednesday of the following week.',
    who: 'Anyone who wants to work as an armed security officer anywhere in Texas.',
    image: 'classroom',
    body: [
      'Level 3 is the highest certification a security officer can earn in Texas. It covers what you need to carry a firearm on duty as a commissioned security officer, including semi-automatic handgun and shotgun qualification. Once licensed, you can work for any security company in the state.',
      'Classes are taught by Don Radcliffe, a former Dallas police officer and Dallas County constable who has taught Level 3 since 2010. You do not need to bring anything to class or fill out paperwork before you arrive. We walk you through the state application.',
      'Pepper spray certification is now offered as part of the Level 3 class.',
    ],
    covers: [
      'Texas laws and the Private Security Act',
      'Security officer procedures and report writing',
      'Defensive tactics',
      'Semi-automatic handgun qualification',
      'Shotgun qualification',
      'Pepper spray certification',
    ],
    bring: ['Ammunition (not provided)', 'Payment by cash or check'],
    faqs: [
      {
        q: 'Do I have to take Level 2 before Level 3?',
        a: 'Level 2 is held on the Wednesday before each Level 3 class. Call (903) 238-5483 and we will tell you exactly which classes you need for the license you want.',
      },
      {
        q: 'Do I need my own gun?',
        a: 'No. You do not need your own weapon for class. Ammunition is not provided.',
      },
      {
        q: 'How much does Level 3 cost?',
        a: 'The Level 3 class is $300, paid by cash or check.',
      },
    ],
  },
  {
    slug: 'level-2-security-guard',
    name: 'Level 2 Non-Commissioned Security Officer Class',
    short: 'Level 2 unarmed security',
    title: 'Level 2 Security Guard Class in Longview, TX | One Day',
    description:
      'One-day Texas Level 2 unarmed security guard class in Longview, TX. 9:00 am to 2:30 pm, $100. Call (903) 238-5483 to reserve a seat.',
    summary: 'The one-day class for unarmed security officers. Start in the morning, finish the same afternoon.',
    price: '$100',
    priceValue: 100,
    hours: '9:00 am to 2:30 pm, one day',
    when: 'Every other month starting in January, on the Wednesday before the Level 3 class.',
    who: 'Anyone who wants to work as an unarmed security officer in Texas.',
    image: 'classroom',
    body: [
      'Level 2 is the class for unarmed (non-commissioned) security officers in Texas. It is finished in a single day, starting at 9:00 am and ending around 2:30 pm.',
      'Many students take Level 2 and continue straight into the Level 3 class later the same week, which is how our schedule is set up.',
    ],
    covers: ['Texas security laws', 'Officer conduct and procedures', 'Observation and reporting'],
    bring: ['Payment by cash or check'],
    faqs: [
      {
        q: 'How long is the Level 2 class?',
        a: 'One day, from 9:00 am to about 2:30 pm.',
      },
      {
        q: 'What disqualifies someone from being a security guard?',
        a: 'Any felony conviction disqualifies you, and you cannot have convictions within the last five years. Texas DPS makes the final eligibility decision.',
      },
    ],
  },
  {
    slug: 'level-3-requalification',
    name: 'Level 3 Requalification',
    short: 'Level 3 requalification',
    title: 'Level 3 Security Requalification in Longview, TX',
    description:
      'Annual Level 3 commissioned security officer requalification in Longview, TX, held the 2nd Tuesday of most months, 9:00 am to 2:30 pm. Call (903) 238-5483.',
    summary: 'Keep your commission current. Held on the second Tuesday of most months.',
    hours: '9:00 am to 2:30 pm',
    when: 'The second Tuesday of each month, when practical.',
    who: 'Commissioned security officers who need to requalify.',
    image: 'range',
    body: [
      'Commissioned (Level 3) security officers must requalify to keep their commission. We hold requalification on the second Tuesday of each month when practical, from 9:00 am to 2:30 pm.',
      'Call ahead so we can hold a seat for you and confirm the date.',
    ],
    covers: ['Classroom refresher', 'Firearms requalification'],
    bring: ['Ammunition (not provided)', 'Payment by cash or check'],
    faqs: [
      {
        q: 'When is the next requalification?',
        a: 'Requalification is held on the second Tuesday of the month when practical. Call (903) 238-5483 to confirm the next date and reserve your seat.',
      },
    ],
  },
  {
    slug: 'texas-license-to-carry',
    name: 'Texas License to Carry (LTC) Class',
    short: 'License to Carry (LTC)',
    title: 'Texas License to Carry (LTC) Class in Longview, TX',
    description:
      'Get your Texas License to Carry in Longview. LTC classes the 2nd and 4th Saturday monthly, 8:00 am to 2:30 pm, with a laser training range. (903) 238-5483.',
    summary:
      'The state-required class for a Texas License to Carry, formerly called the CHL. Held the second and fourth Saturday of every month.',
    hours: '8:00 am to 2:30 pm',
    when: 'The second and fourth Saturday of every month. November and December dates vary because of the holidays.',
    who: 'Texas residents who want a License to Carry a handgun.',
    image: 'laser',
    body: [
      'The Texas License to Carry (LTC) replaced the old Concealed Handgun License (CHL). Even with permitless carry in Texas, an LTC still matters: it lets you carry in more places, carry in other states that honor it, and skip the background check when you buy a gun.',
      'Don Radcliffe has taught Texas handgun license classes since 1995. Our classroom has a laser training range, which lets new shooters practice their fundamentals before live fire.',
      'Getting your license takes three steps.',
    ],
    covers: [
      'Texas use-of-force law',
      'Where you can and cannot carry',
      'Handgun safety and storage',
      'Non-violent conflict resolution',
      'Shooting fundamentals on the laser range',
      'Live-fire proficiency qualification',
    ],
    bring: ['Ammunition (not provided)', 'Payment by cash or check, at the time of class'],
    faqs: [
      {
        q: 'Is a CHL the same as an LTC?',
        a: 'Yes. Texas renamed the Concealed Handgun License (CHL) to the License to Carry (LTC) in 2016. It is the same license.',
      },
      {
        q: 'Should I apply to DPS before or after class?',
        a: 'You can do either, but we recommend applying after class. Apply online through Texas DPS, pay the fee and save the receipt with the barcode. Do not book fingerprints until after you submit your application.',
      },
      {
        q: 'Do I need my own handgun?',
        a: 'No, you do not need your own weapon. Ammunition is not provided.',
      },
      {
        q: 'Why get an LTC if Texas has permitless carry?',
        a: 'An LTC lets you carry in some places permitless carry does not, is honored by many other states, and lets you skip the background check when buying a firearm from a dealer.',
      },
    ],
  },
  {
    slug: 'permitless-carry-training',
    name: 'Permitless Carry Training',
    short: 'Permitless carry training',
    title: 'Texas Permitless Carry Training in Longview, TX',
    description:
      'Texas permitless (constitutional) carry training in Longview: firearms law, your legal status and safe carry. 2nd and 4th Saturday each month. Call (903) 238-5483.',
    summary:
      'Texas no longer requires a license to carry, but the law did not get simpler. Learn where you can carry and what the law expects of you.',
    hours: '8:00 am to 2:30 pm',
    when: 'The second and fourth Saturday of every month, alongside the LTC class.',
    who: 'Anyone carrying, or planning to carry, without a license in Texas.',
    image: 'laser',
    body: [
      'Since 2021, most adults in Texas can carry a handgun without a license. That does not change the rules about where you can carry, when you can use force, or what happens after you do.',
      'This class covers firearms law and your legal status as a permitless carrier, and is held on the same Saturdays as our License to Carry class.',
    ],
    covers: [
      'Who can and cannot carry without a license',
      'Places that are off-limits',
      'Texas use-of-force and deadly-force law',
      'Safe carry, storage and handling',
    ],
    bring: ['Payment by cash or check'],
    faqs: [
      {
        q: 'Do I need a class to carry in Texas?',
        a: 'Texas does not require a class for permitless carry, but knowing the law protects you. This class covers what the law expects of you.',
      },
    ],
  },
  {
    slug: 'private-firearms-training',
    name: 'Private and Basic Handgun Training',
    short: 'Private and basic handgun',
    title: 'Private Firearms Training & Basic Handgun Lessons, Longview TX',
    description:
      'One-on-one and small-group firearms training in Longview, TX. Basic handgun lessons for new shooters, scheduled around you. Call (903) 238-5483.',
    summary: 'One-on-one or small-group lessons on your schedule, including basic handgun for first-time shooters.',
    hours: 'Scheduled with you',
    when: 'Any time. Private classes can be scheduled whenever works for you.',
    who: 'New shooters, couples, families and small groups who want focused instruction.',
    image: 'table',
    body: [
      'Not everyone learns best in a full classroom. Private training gives you the instructor\'s full attention, on a date that works for you.',
      'Basic handgun training is available on request for people who have never handled a gun. You will learn safe handling, how the handgun works and shooting fundamentals, starting on the laser range.',
    ],
    covers: ['Safe handling and storage', 'How a handgun works', 'Grip, stance, sight alignment and trigger control', 'Laser range practice'],
    bring: ['Payment by cash or check'],
    faqs: [
      {
        q: 'Do you offer evening classes?',
        a: 'Regular classes are held during the day. Call (903) 238-5483 to ask about private training times.',
      },
      {
        q: 'Do you offer basic handgun training?',
        a: 'Yes, basic handgun training is available on request.',
      },
    ],
  },
];

export const classBySlug = Object.fromEntries(classes.map((c) => [c.slug, c]));
