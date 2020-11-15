import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { VeuPostsComponent } from './veu-posts/veu-posts.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PreviousPostsComponent } from './previous-posts/previous-posts.component';
import { PostDataComponent } from './post-data/post-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    VeuPostsComponent,
    RecentPostsComponent,
    PreviousPostsComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
