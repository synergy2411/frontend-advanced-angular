import { Component, OnInit } from '@angular/core';
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
    this.dataService.getUserData()
      .subscribe((userdata) => this.users = userdata)
  }


  moreInfo(usr: IUser) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!`)
  }
}
