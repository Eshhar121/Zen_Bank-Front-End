import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = ""
  password = ""

  public islogedin = false
  
}
