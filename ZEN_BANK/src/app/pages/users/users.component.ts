import { Component } from '@angular/core';
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { UserComponent } from "./user/user.component";
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,RouterLink,NgFor,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{

  ngOnInit(): void{
    this.loadUsers();
  }

  public userList:any = [];
  public idOrName="";

  loadUsers(){
    fetch("http://localhost:8080/user/all")
    .then(res=> res.json())
    .then(data=>{
        this.userList = data;
    })
  }

  searchUser(){
    fetch("http://localhost:8080/user/search-user/"+this.idOrName)
    .then(res=> res.json())
    .then(data=>{
        this.userList = data;
        console.log("data");
        
    })
  }
}
