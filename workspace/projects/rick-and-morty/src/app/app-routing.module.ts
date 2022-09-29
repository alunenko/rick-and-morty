import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllCharactersComponent} from "./components/_pages/all-characters/all-characters.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-characters',
    pathMatch: 'full'
  },
  {
    path: 'all-characters',
    component: AllCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
