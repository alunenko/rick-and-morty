import { Component, OnInit } from '@angular/core';
import CharactersListService from "./characters-list.service";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private charactersListService: CharactersListService
  ) { }

  ngOnInit(): void {
    this.charactersListService.getAllCharacters().subscribe((getAllCharactersResponse: any) => {
      console.log('getAllCharactersResponse ', getAllCharactersResponse);
      this.characters = getAllCharactersResponse.results;
    });
  }

}
