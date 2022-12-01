import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  // username = 'Foo Bar';
  // user = {
  //   email: 'foo@test',
  //   age: 32,
  // };
  user = {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Dec 18, 1987'),
    company: 'Microsoft',
    income: 500000,
    image:
      'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
    votes : 120
  };
  moreInfo(usr:any){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!`)
  }
}
