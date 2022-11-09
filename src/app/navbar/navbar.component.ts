import { Component, OnInit } from '@angular/core';
import { CssHandlerService } from '../services/css-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status = false;

  constructor(private cssHandlerService: CssHandlerService) { }

  ngOnInit(): void {
  }

  triggerNav() {
    this.status = !this.status;
    if(this.status) {
      this.cssHandlerService.addCssClass("stop-scroll");
    } else {
      this.cssHandlerService.removeCssClass("stop-scroll");
    }
  }
}
