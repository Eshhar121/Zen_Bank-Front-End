import { transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.transaction.receiverAccNo==this.accNo?"reciver":"sender");
    
  }
  @Input()
  transaction:any;
  @Input()
  accNo:any;
  
}
