import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  @Input() projectToShow: string | undefined = undefined;
  @Output() modalClosed = new EventEmitter<boolean>();

  faClose = faClose;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.projectToShow = undefined;
    this.modalClosed.emit(true);
  }
}
