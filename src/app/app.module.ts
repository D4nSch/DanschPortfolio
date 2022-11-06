import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutSectionComponent } from './about-section/about-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { BuildSectionComponent } from './build-section/build-section.component';
import { TouchSectionComponent } from './touch-section/touch-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    WorkSectionComponent,
    BuildSectionComponent,
    TouchSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
