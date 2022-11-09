import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit(): void {
  }

  triggerNav() {
    this.status = !this.status;
  }
}
