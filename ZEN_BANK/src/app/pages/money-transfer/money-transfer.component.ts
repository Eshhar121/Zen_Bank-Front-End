import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css'
})
export class MoneyTransferComponent {

  reciever:any;
  payer:any;
  amount:any;

}
