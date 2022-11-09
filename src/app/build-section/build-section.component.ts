import { Component, OnInit } from '@angular/core';
import { CssHandlerService } from '../services/css-handler.service';

@Component({
  selector: 'app-build-section',
  templateUrl: './build-section.component.html',
  styleUrls: ['./build-section.component.scss']
})
export class BuildSectionComponent implements OnInit {

  selectedProject: string | undefined = undefined;

  constructor(private cssHandlerService: CssHandlerService) { }

  ngOnInit(): void {
  }

  setProject(project: string) {
    this.cssHandlerService.addCssClass("stop-scroll");
    this.selectedProject = project;
  }

  onModalClose() {
    this.cssHandlerService.removeCssClass("stop-scroll");
    this.selectedProject = undefined;
  }
}
