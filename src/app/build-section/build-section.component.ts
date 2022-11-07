import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-build-section',
  templateUrl: './build-section.component.html',
  styleUrls: ['./build-section.component.scss']
})
export class BuildSectionComponent implements OnInit {

  selectedProject: string | undefined = undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  setProject(project: string) {
    this.renderer.addClass(document.body, "stop-scroll");
    this.selectedProject = project;
  }

  onModalClose() {
    this.renderer.removeClass(document.body, "stop-scroll");
    this.selectedProject = undefined;
  }
}
