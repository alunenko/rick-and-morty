import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./components/pages/characters/characters.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-characters',
    pathMatch: 'full'
  },
  {
    path: 'all-characters',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
