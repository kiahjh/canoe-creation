const EVENTS: Event[] = [
  {
    numDays: 1,
    type: 'river_school',
    costPerPerson: 60,
    dateRange: ['June 10', 'June 10'],
    ageRange: [12, 18],
    status: 'open',
  },
  {
    numDays: 1,
    type: 'pollywog_float',
    costPerPerson: 60,
    dateRange: ['June 28', 'June 28'],
    ageRange: [12, 18],
    status: 'private',
  },
  {
    numDays: 1,
    type: 'pollywog_float',
    costPerPerson: 45,
    dateRange: ['June 29', 'June 29'],
    ageRange: [12, 18],
    status: 'open',
  },
  {
    numDays: 3,
    title: 'Creation Quest',
    type: 'river_school',
    dateRange: ['June 30', 'July 1'],
    ageRange: [12, 18],
    status: 'private',
  },
  {
    numDays: 3,
    title: 'Cedars Christion Camp',
    type: 'wilderness_camp',
    dateRange: ['July 12', 'July 14'],
    ageRange: [12, 18],
    status: 'private',
    location: 'Bloomington, Indiana',
  },
  {
    numDays: 3,
    title: 'Wilderness River School',
    type: 'river_school',
    costPerPerson: 140,
    dateRange: ['July 20', 'July 22'],
    ageRange: [12, 18],
    specialNotes: 'For experienced campers only',
    status: 'open',
  },
  {
    numDays: 1,
    type: 'river_rangers',
    costPerPerson: 60,
    dateRange: ['July 28', 'July 28'],
    ageRange: [12, 18],
    status: 'open',
  },
  {
    numDays: 1,
    title: 'Akron Fossils trip',
    type: 'river_rangers',
    dateRange: ['July 29', 'July 29'],
    ageRange: [12, 18],
    status: 'private',
  },
  {
    numDays: 1,
    type: 'rappelling',
    location: 'Hocking Hills, Ohio',
    costPerPerson: 70,
    dateRange: ['August 5', 'August 5'],
    ageRange: [12, 18],
    status: 'open',
  },
];
export default EVENTS;

export type Event = {
  numDays: number;
  type: EventType;
  costPerPerson?: number;
  title?: string;
  description?: string;
  dateRange: [string, string];
  ageRange: [number, number];
  location?: string;
  status: 'open' | 'full' | 'private';
  specialNotes?: string;
};

export type EventType =
  | 'rappelling'
  | 'river_school'
  | 'pollywog_float'
  | 'wilderness_camp'
  | 'river_rangers';
