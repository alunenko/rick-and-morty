import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./components/_pages/characters/characters.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
