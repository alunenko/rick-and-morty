import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import CharactersListService from "../../characters-list/characters-list.service";
import {ICharacter} from "../../../core/characters";
import {CharactersService} from "./characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  _filterLiked = false;
  characters: ICharacter[] = [];
  likedCharacters: ICharacter[] = [];
  activeCharacterList: ICharacter[] = [];
  infiniteScrollDistance = 2;
  isLoading = false;

  private currentPage = '';

  constructor(
    private charactersListService: CharactersListService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersListService.likeEvent.subscribe((item: ICharacter) => {
      this.charactersService.updateStorageData(item);
      this.init();
    });
    this.characters = this.charactersService.characters;

    this.init();
  }

  init() {
    /*this.filter({by: 'status', value: 'Alive'});*/
    this.filter();
    this.setCharactersList(this._filterLiked);
  }

  get filterLiked() {
    return this._filterLiked;
  }

  set filterLiked(value) {
    this._filterLiked = value;
    this.setCharactersList(value);
  }

  setCharactersList(value: boolean) {
    this.activeCharacterList = value ? this.likedCharacters : this.characters;
  }

  onScrollDown(): void {
    let preventMultipleRequest = this.charactersService.nextCharactersUrl &&
      (this.charactersService.nextCharactersUrl !== this.currentPage)
    ;

    if (preventMultipleRequest) {
      this.isLoading = true;
      this.currentPage = this.charactersService.nextCharactersUrl!;

      this.charactersService.getCharacters(true)
        .pipe(take(1))
        .subscribe((getCharactersResponse) => {
          this.characters = getCharactersResponse;
          this.isLoading = false;
          this.init();
        });
    }
  }

  filter({by = 'like', value = true}: {by?: string, value?: any} = {}) {
    this.likedCharacters = this.characters.filter((character: any): any => character[by] === value);
  }
}
