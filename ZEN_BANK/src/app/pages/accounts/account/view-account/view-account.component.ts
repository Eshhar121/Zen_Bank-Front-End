import { NgFor } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TransactionComponent } from "./transaction/transaction.component";

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [FormsModule, RouterModule, NgFor, TransactionComponent],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent{

  account:any;

  accountNo:any
  id:any
  account_name:any
  branch:any
  mobile:any
  email:any

  constructor(private route: ActivatedRoute) {}

  ischanged(): boolean{
    if (this.id!=this.account.id||this.account_name!=this.account.account_name||this.branch!=this.account.branch||this.mobile!=this.account.mobile||this.email!=this.account.email) {
      return false
    }else{
      return true
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.account = params;
      this.accountNo=this.account.accountNo;
      this.id=this.account.id;
      this.account_name=this.account.account_name;
      this.branch=this.account.branch;
      this.mobile=this.account.mobile;
      this.email=this.account.email;
    });
    this.loadTransactions();
  }

  public transactionList:any = [];

  loadTransactions(){
    fetch("http://localhost:8080/transaction/search-transaction/"+this.accountNo)
    .then(res=> res.json())
    .then(data=>{
        this.transactionList = data;
        
    })
  }
}
