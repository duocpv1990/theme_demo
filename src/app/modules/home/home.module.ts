import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatIconModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    HomeComponent, 
    ToolbarComponent, ContentComponent, 
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
