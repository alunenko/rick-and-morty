import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharactersService} from "../_pages/characters/characters.service";
import {ICharacter} from "../../core/characters";
import CharactersListService from "../characters-list/characters-list.service";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character: ICharacter | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService,
    private charactersListService: CharactersListService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if(this.charactersService.characters.length) {
        this.character = this.getCharacterById(params.id);
      } else {
        this.charactersService.getCharacterById(params.id).subscribe((character: ICharacter) => {

          this.character = character;
        });
      }
    });
  }

  getCharacterById(id: number): ICharacter | undefined {
    return this.charactersService.characters.find((character: ICharacter): any => {
      if(character.id == id) {
        return character;
      }
    });
  }

  like(character: ICharacter): void {
    character.like = !character.like;
    this.charactersListService.likeEvent.emit(character);
  }
}
