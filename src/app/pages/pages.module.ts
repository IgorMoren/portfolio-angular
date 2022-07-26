import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { InlineMenuComponent } from './inline-menu/inline-menu.component';
import { PhotographyComponent } from './photography/photography.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactComponent,
    InlineMenuComponent,
    PhotographyComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutMeComponent,
    ContactComponent,
    InlineMenuComponent,
    PhotographyComponent,
    ProjectsComponent,
  ],
})
export class PagesModule {}
