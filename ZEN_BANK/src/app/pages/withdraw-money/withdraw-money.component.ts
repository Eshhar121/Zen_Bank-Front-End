import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdraw-money',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './withdraw-money.component.html',
  styleUrl: './withdraw-money.component.css'
})
export class WithdrawMoneyComponent {

  account:any;
  amount:any;

}
