import { Component, OnInit } from '@angular/core';
// import { USER_DATA } from 'src/app/model/mocks';
import { IUser } from 'src/app/model/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers : [DataService]
})
export class UserListComponent implements OnInit {
  users: Array<IUser> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.users = USER_DATA
    this.users = this.dataService.getUserData()
  }


  moreInfo(usr: IUser) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!`)
  }
}
