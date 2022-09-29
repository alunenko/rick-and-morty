import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersListRoute} from "./components/characters-list/characters-list.route";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  CharactersListRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
