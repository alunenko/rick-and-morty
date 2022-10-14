import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersRoute} from "./components/_pages/characters/characters.route";
import {CharacterRoute} from "./components/_pages/character/character.route";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  CharactersRoute,
  CharacterRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
