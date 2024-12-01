import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {

  user: any;

  id: any
  name: any
  address: any
  contact: any
  email: any

  constructor(private route: ActivatedRoute) { }

  ischanged(): boolean {
    if (this.name != this.user.name || this.address != this.user.address || this.contact != this.user.contact || this.email != this.user.email) {
      return false
    } else {
      return true
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user = params;
      this.id = this.user.id;
      this.name = this.user.name;
      this.address = this.user.address;
      this.contact = this.user.contact;
      this.email = this.user.email;
      
    });
  }

}
