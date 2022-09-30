import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/_pages/characters/characters.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import CharactersListService from "./components/characters-list/characters-list.service";
import {HttpClientModule} from "@angular/common/http";
import {CharactersListResolver} from "./components/characters-list/characters-list.resolver";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    CharactersListService,
    CharactersListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
