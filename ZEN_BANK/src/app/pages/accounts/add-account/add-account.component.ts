import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  
  account_no:any
  id:any
  account_name:any
  branch:any
  mobile:any
  email:any

}
