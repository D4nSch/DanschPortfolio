import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchSectionComponent } from './touch-section.component';

describe('TouchSectionComponent', () => {
  let component: TouchSectionComponent;
  let fixture: ComponentFixture<TouchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
