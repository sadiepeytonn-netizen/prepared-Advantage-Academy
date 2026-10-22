// Business details used everywhere: header, footer, schema, llms.txt.
// Change things here, not in the pages.
export const site = {
  name: 'Prepared Advantage Academy',
  shortName: 'Prepared Advantage',
  url: 'https://www.preparedadvantage.com',
  phone: '(903) 238-5483',
  phoneHref: 'tel:+19032385483',
  email: 'preparedaa@aol.com',
  street: '5914 Old Hwy 80',
  locationNote: 'Inside the Macoto Dojo',
  city: 'Longview',
  region: 'TX',
  regionName: 'Texas',
  zip: '75604',
  lat: 32.51422,
  lng: -94.8269,
  founded: '2011',
  // Texas DPS Private Security license numbers shown on the old site. Both are kept on purpose.
  licenseNumbers: ['F01177', 'F30985701'],
  facebook: 'https://facebook.com/136448029767890',
  googleMaps: 'https://www.google.com/maps/place/Prepared+Advantage+Academy/data=!4m2!3m1!1s0x0:0x4ab9fc396a24c0ca',
  googleCid: 'https://maps.google.com/?cid=5384612153022267594',
  googleReviews: 'https://search.google.com/local/reviews?placeid=&cid=5384612153022267594',
  googleRating: '4.6',
  googleReviewCount: 18,
  mapEmbed:
    'https://www.google.com/maps?q=Prepared+Advantage+Academy,+5914+Old+Hwy+80,+Longview,+TX+75604&output=embed',
  payment: ['Cash', 'Check'],
  instructor: 'Don Radcliffe',
  serviceRadiusMiles: 100,
  // Keeps the existing Search Console verification working after launch.
  googleVerification: 'N20i1fGNBjoRup_BLzmD10heTTGUErHbPrIv9bqLvpk',
};

export const fullAddress = `${site.street}, ${site.city}, ${site.region} ${site.zip}`;
