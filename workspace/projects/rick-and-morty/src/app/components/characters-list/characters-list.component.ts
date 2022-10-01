import { Component, OnInit } from '@angular/core';
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

  private charactersSet: Set<ICharacter> = new Set();
  private currentPage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersListService: CharactersListService
  ) {
    this.like = this.charactersListService.like;
  }

  ngOnInit(): void {
    this.handleGetCharactersResponse(this.activatedRoute.snapshot.data['characters']);
  }

  onScrollDown(): void {
    let preventMultipleRequest = this.charactersListService.next &&
      (this.charactersListService.next !== this.currentPage)
    ;

    if (preventMultipleRequest) {
      this.isLoading = true;
      this.currentPage = this.charactersListService.next!;

      this.charactersListService.getCharacters(true)
        .pipe(take(1))
        .subscribe((getCharactersResponse) => {
          this.handleGetCharactersResponse(getCharactersResponse);
          this.isLoading = false;
        });
    }
  }

  private handleGetCharactersResponse(getCharactersResponse: ICharacter[]): void {
    getCharactersResponse.map((item: any) => {
      item.like = false;
      this.charactersSet.add(item);
    });

    this.characters = [...this.charactersSet];
  }
}
