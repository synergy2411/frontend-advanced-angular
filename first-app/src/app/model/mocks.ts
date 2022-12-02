import { IUser } from "./user.interface";

export const USER_DATA: Array<IUser> = [{
  firstName: 'Bill',
  lastName: 'Gates',
  dob: new Date('Dec 18, 1987'),
  company: 'Microsoft',
  income: 500000,
  image:
    'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
  votes: 120
}, {
  firstName: 'steve',
  lastName: 'jobs',
  dob: new Date('Aug 18, 1987'),
  company: 'Apple',
  income: 0,
  image:
    'https://thumbs.dreamstime.com/b/steve-jobs-portrait-illustration-manually-painted-capturing-apple-genius-56617906.jpg',
  votes: 190
}, {
  firstName: 'Elon',
  lastName: 'musk',
  dob: new Date('Nov 8, 1965'),
  company: 'Amazon',
  income: 150000,
  image:
    'https://cmg-cmg-tv-10090-prod.cdn.arcpublishing.com/resizer/PIkAgxORAifgwdm5rJQK0KNU4P4=/1440x810/filters:format(jpg):quality(70):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/cmg/SOGDUHWPMRDONGWUEXE7NFHS2A.jpg',
  votes: 220
}];
