import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  @Input() projectToShow: string | undefined = undefined;
  @Output() modalClosed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.projectToShow = undefined;
    this.modalClosed.emit(true);
  }
}
