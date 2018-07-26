import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../_services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

}
