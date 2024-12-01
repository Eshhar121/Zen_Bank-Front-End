import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf,LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLogin=false

}
