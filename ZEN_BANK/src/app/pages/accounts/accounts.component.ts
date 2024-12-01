import { Component } from '@angular/core';
import { AccountComponent } from "./account/account.component";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [AccountComponent,NgFor,RouterLink, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  ngOnInit(): void{
    this.loadAccounts();
  }
  
  public accountsList:any = [];
  public idOraccNo="";

  loadAccounts(){
    fetch("http://localhost:8080/account/all")
    .then(res=> res.json())
    .then(data=>{
        this.accountsList = data;
    })
  }

  searchAccount(){
    fetch("http://localhost:8080/account/search-account/"+this.idOraccNo)
    .then(res=> res.json())
    .then(data=>{
        this.accountsList = data;
    })
  }

}
