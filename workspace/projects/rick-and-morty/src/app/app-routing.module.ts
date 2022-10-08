import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersRoute} from "./components/_pages/characters/characters.route";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  CharactersRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
