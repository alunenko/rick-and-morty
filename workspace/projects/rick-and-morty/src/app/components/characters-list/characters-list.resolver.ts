import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import CharactersListService from "./characters-list.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersListResolver implements Resolve<any> {
  constructor(
    private charactersListService: CharactersListService
  ) {

  }
  resolve(): Observable<any> {
    return this.charactersListService.getCharacters();
  }
}
