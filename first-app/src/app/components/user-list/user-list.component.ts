import { Component, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/model/mocks';
import { IUser } from 'src/app/model/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user: IUser | undefined;

  ngOnInit() {
    this.user = USER_DATA
  }


  moreInfo(usr: IUser) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!`)
  }
}
