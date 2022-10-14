import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {CharactersService} from "./characters.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<any> {
  constructor(
    private charactersService: CharactersService
  ) {

  }
  resolve(): Observable<any> {console.log('resolve');
    return this.charactersService.getCharacters();
  }
}
