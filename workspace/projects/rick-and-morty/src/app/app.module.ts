import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/_pages/characters/characters.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import CharactersListService from "./components/characters-list/characters-list.service";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import ArrayHelper from "./core/helpers/array.helper";
import {FormsModule} from "@angular/forms";
import {CharactersResolver} from "./components/_pages/characters/characters.resolver";
import {CharactersService} from "./components/_pages/characters/characters.service";
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import {CharacterComponent} from "./components/_pages/character/character.component";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharactersListComponent,
    CharacterComponent,
    CharacterDetailsComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        InfiniteScrollModule,
        FormsModule
    ],
  providers: [
    CharactersService,
    CharactersListService,
    ArrayHelper,
    CharactersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
