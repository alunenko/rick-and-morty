import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICharacter} from "./characters-list";
import CharactersListService from "./characters-list.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: ICharacter[] = [];
  infiniteScrollDistance = 2;
  isLoading = false;

  like: (item: ICharacter) => void;

  private currentPage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersListService: CharactersListService
  ) {
    this.like = this.charactersListService.like;
  }

  ngOnInit(): void {
    this.characters = this.activatedRoute.snapshot.data['characters'];
  }

  onScrollDown(): void {
    let preventMultipleRequest = this.charactersListService.nextCharactersUrl &&
      (this.charactersListService.nextCharactersUrl !== this.currentPage)
    ;

    if (preventMultipleRequest) {
      this.isLoading = true;
      this.currentPage = this.charactersListService.nextCharactersUrl!;

      this.charactersListService.getCharacters(true)
        .pipe(take(1))
        .subscribe((getCharactersResponse) => {
          this.characters = getCharactersResponse;
          this.isLoading = false;
        });
    }
  }
}
