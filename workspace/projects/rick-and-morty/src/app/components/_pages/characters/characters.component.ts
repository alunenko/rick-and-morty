import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICharacter} from "../../characters-list/characters-list";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  filterLiked = false;
  characters: ICharacter[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.characters = this.activatedRoute.snapshot.data['characters'];
  }

}
