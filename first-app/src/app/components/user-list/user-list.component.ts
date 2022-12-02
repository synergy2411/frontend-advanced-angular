import { Component, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/model/mocks';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user: any;

  ngOnInit() {
    this.user = USER_DATA
  }


  moreInfo(usr: any) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!`)
  }
}
