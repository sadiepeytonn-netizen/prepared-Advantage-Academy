// City pages at /areas/<slug>/. Distances are approximate road miles to the academy.
export type Area = {
  slug: string;
  city: string;
  county: string;
  miles: number;
  route: string;
  nearby: string[];
};

export const areas: Area[] = [
  { slug: 'longview-tx', city: 'Longview', county: 'Gregg', miles: 0, route: 'The academy is on Old Hwy 80 on the west side of Longview, inside the Macoto Dojo.', nearby: ['White Oak', 'Kilgore', 'Hallsville'] },
  { slug: 'white-oak-tx', city: 'White Oak', county: 'Gregg', miles: 5, route: 'Take Old Hwy 80 east from White Oak. It is a few minutes down the road.', nearby: ['Longview', 'Gladewater'] },
  { slug: 'gladewater-tx', city: 'Gladewater', county: 'Gregg and Upshur', miles: 12, route: 'Follow US-80 east through White Oak to Old Hwy 80 in Longview.', nearby: ['White Oak', 'Big Sandy', 'Gilmer'] },
  { slug: 'kilgore-tx', city: 'Kilgore', county: 'Gregg and Rusk', miles: 12, route: 'Head north from Kilgore toward Longview and pick up Old Hwy 80 on the west side of town.', nearby: ['Longview', 'Henderson', 'Overton'] },
  { slug: 'hallsville-tx', city: 'Hallsville', county: 'Harrison', miles: 18, route: 'Take US-80 or I-20 west into Longview.', nearby: ['Marshall', 'Longview'] },
  { slug: 'gilmer-tx', city: 'Gilmer', county: 'Upshur', miles: 25, route: 'Take US-271 south toward Gladewater, then US-80 east into Longview.', nearby: ['Gladewater', 'Ore City'] },
  { slug: 'marshall-tx', city: 'Marshall', county: 'Harrison', miles: 27, route: 'Take I-20 west to Longview, then cut north to Old Hwy 80.', nearby: ['Hallsville', 'Jefferson', 'Waskom'] },
  { slug: 'henderson-tx', city: 'Henderson', county: 'Rusk', miles: 28, route: 'Take US-259 north to Kilgore and Longview.', nearby: ['Kilgore', 'Overton', 'Carthage'] },
  { slug: 'jefferson-tx', city: 'Jefferson', county: 'Marion', miles: 35, route: 'Take US-59 south toward Marshall, then I-20 west into Longview.', nearby: ['Marshall', 'Avinger'] },
  { slug: 'carthage-tx', city: 'Carthage', county: 'Panola', miles: 38, route: 'Take US-79 north to Henderson, then US-259 north to Longview.', nearby: ['Henderson', 'Tatum', 'Beckville'] },
  { slug: 'tyler-tx', city: 'Tyler', county: 'Smith', miles: 40, route: 'Take I-20 east toward Longview and exit to Old Hwy 80 on the west side of town.', nearby: ['Lindale', 'Whitehouse', 'Bullard'] },
  { slug: 'lindale-tx', city: 'Lindale', county: 'Smith', miles: 45, route: 'Take I-20 east toward Longview.', nearby: ['Tyler', 'Mineola', 'Hideaway'] },
  { slug: 'mineola-tx', city: 'Mineola', county: 'Wood', miles: 50, route: 'Take US-80 east through Big Sandy and Gladewater into Longview.', nearby: ['Lindale', 'Quitman', 'Big Sandy'] },
  { slug: 'mount-pleasant-tx', city: 'Mount Pleasant', county: 'Titus', miles: 55, route: 'Take US-271 south through Pittsburg and Gilmer to Longview.', nearby: ['Pittsburg', 'Daingerfield'] },
  { slug: 'jacksonville-tx', city: 'Jacksonville', county: 'Cherokee', miles: 60, route: 'Head north on US-69 toward Tyler, then I-20 east to Longview.', nearby: ['Bullard', 'Rusk', 'Troup'] },
  { slug: 'nacogdoches-tx', city: 'Nacogdoches', county: 'Nacogdoches', miles: 70, route: 'Take US-259 north through Henderson and Kilgore to Longview.', nearby: ['Garrison', 'Cushing'] },
  { slug: 'texarkana-tx', city: 'Texarkana', county: 'Bowie', miles: 85, route: 'Take US-59 south through Atlanta and Jefferson, then I-20 west to Longview.', nearby: ['Atlanta', 'New Boston', 'Nash'] },
  { slug: 'lufkin-tx', city: 'Lufkin', county: 'Angelina', miles: 90, route: 'Take US-59 north to Nacogdoches, then US-259 north to Longview.', nearby: ['Nacogdoches', 'Diboll', 'Huntington'] },
];
