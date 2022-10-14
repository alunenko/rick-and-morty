import {Component, Input, OnInit} from '@angular/core';
import CharactersListService from "./characters-list.service";
import {ICharacter} from "../../core/characters";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  @Input() characters: ICharacter[] = [];

  constructor(
    private charactersListService: CharactersListService
  ) {
  }

  ngOnInit(): void {

  }

  like(character: ICharacter): void {
    character.like = !character.like;
    this.charactersListService.likeEvent.emit(character);
  }
}
