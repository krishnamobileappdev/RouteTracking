import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import users from '../userlist.json';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  public usersData;
  constructor(private appServices: ServicesService) { }

  ngOnInit(): void {
    console.log(users);
    this.usersData = users.user;
    this.appServices.getUserList().subscribe(data =>{
      console.log(data);
    })
  }

}
