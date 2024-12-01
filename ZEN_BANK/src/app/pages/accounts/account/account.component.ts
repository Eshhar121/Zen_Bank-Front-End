import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  @Input()
  account:any;

}
