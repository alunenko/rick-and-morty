import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICharacterListResults} from "./characters-list";
import CharactersListService from "./characters-list.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  private charactersSet: Set<ICharacterListResults> = new Set();
  private currentPage = '';

  characters: ICharacterListResults[] = [];
  infiniteScrollDistance = 2;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersListService: CharactersListService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.snapshot.data['characters'].map((item: any) => this.charactersSet.add(item));
    this.characters = [...this.charactersSet];
    console.log('this.characters ', this.characters);
  }

  onScrollDown(): void {
    if (this.charactersListService.next && (this.charactersListService.next !== this.currentPage)) {
      this.isLoading = true;
      this.currentPage = this.charactersListService.next!;

      this.charactersListService.getCharacters(true)
        .pipe(take(1))
        .subscribe((getCharactersResponse) => {
          getCharactersResponse.map((item) => this.charactersSet.add(item));
          this.characters = [...this.charactersSet];
          this.isLoading = false;
        });
    }
  }

}
