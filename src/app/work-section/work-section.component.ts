import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent implements OnInit {

  faCaretRight = faCaretRight;
  workToShow = "self";

  constructor() { }

  ngOnInit(): void {
  }

  setWorkToShow(work: string): void {
    this.workToShow = work;
  }
}
