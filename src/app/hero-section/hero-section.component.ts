import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CssHandlerService } from '../services/css-handler.service';
const Typewriter = require('t-writer.js');

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  @ViewChild('tw', {static: true}) typewriterElement?: ElementRef;

  faCaretDown = faCaretDown;

  constructor(public cssHandlerService: CssHandlerService) { }

  ngOnInit(): void {
    const writer = new Typewriter(this.typewriterElement?.nativeElement, {
      loop: true,
      typeColor: '#525255'
    });

  writer
    .type("I build things for the web.")
    .rest(750)
    .clear()
    .type("I come up with cool ideas.")
    .rest(750)
    .clear()
    .type("I'm eager to learn new things.")
    .rest(750)
    .clear()
    .start()
  }
}
