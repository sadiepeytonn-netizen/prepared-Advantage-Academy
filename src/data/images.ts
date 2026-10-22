// Photos. The site currently loads the generated images from the Higgsfield CDN.
// To self-host (recommended before launch): download each one, save it in public/images/
// with the file name below, then set USE_LOCAL = true.
// When Don sends real photos, drop them in with the same names and they replace these.
const USE_LOCAL = false;

const cdn = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JCuhy8bk00IMgzdkEJSO8oJPBi/';

const list = {
  targetWall: {
    file: 'target-wall.jpg',
    remote: cdn + 'hf_20261019_170331_fdc6626f-df9e-44e2-bbc5-27040c91ce77.png',
    alt: 'Row of colored silhouette targets on the classroom wall at Prepared Advantage Academy in Longview, TX',
  },
  classroom: {
    file: 'classroom.jpg',
    remote: cdn + 'hf_20261019_170453_59ba7157-5658-4fe3-8367-c767023b0488.png',
    alt: 'Students in a Texas security officer licensing class in Longview',
  },
  laser: {
    file: 'laser-range.jpg',
    remote: cdn + 'hf_20261019_170614_d83fd7be-4f9e-456e-8102-f4e667e536d4.png',
    alt: 'Laser training range setup in the Prepared Advantage Academy classroom',
  },
  exterior: {
    file: 'exterior.jpg',
    remote: cdn + 'hf_20261019_170331_8a5503a8-8793-4369-8fcc-431719fbec28.png',
    alt: 'Prepared Advantage Academy building on Old Hwy 80 in Longview, Texas',
  },
  table: {
    file: 'ltc-class-table.jpg',
    remote: cdn + 'hf_20261019_170454_0741e3e2-1fae-42cc-a78b-c29347904f0a.png',
    alt: 'Workbook, eye and ear protection and a training pistol set out for a License to Carry class',
  },
  graduates: {
    file: 'graduates.jpg',
    remote: cdn + 'hf_20261019_170454_f7c5989f-e9d1-4555-986a-811c879aaa66.png',
    alt: 'Graduates of a security officer class at Prepared Advantage Academy',
  },
  range: {
    file: 'outdoor-range.jpg',
    remote: cdn + 'hf_20261019_170331_31c60feb-85af-4829-bbb8-4ffef2c6f1f9.png',
    alt: 'Outdoor qualification range with targets and a shooting bench in East Texas',
  },
} as const;

export type ImageKey = keyof typeof list;

export function img(key: string) {
  const i = (list as Record<string, (typeof list)[ImageKey]>)[key] ?? list.targetWall;
  return { src: USE_LOCAL ? `/images/${i.file}` : i.remote, alt: i.alt };
}

export const galleryKeys: ImageKey[] = ['targetWall', 'classroom', 'laser', 'graduates', 'table', 'range', 'exterior'];
