import { NgIf } from '@angular/common';
import { Component, Input, input, Query } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input()
  user:any

}
