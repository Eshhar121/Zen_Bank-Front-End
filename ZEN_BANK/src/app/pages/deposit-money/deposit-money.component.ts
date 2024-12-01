import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deposit-money',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './deposit-money.component.html',
  styleUrl: './deposit-money.component.css'
})
export class DepositMoneyComponent {

  account:any;
  amount:any;

}
