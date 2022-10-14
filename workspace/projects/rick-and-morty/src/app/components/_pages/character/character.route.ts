import {CharacterDetailsComponent} from "../../character-details/character-details.component";
import {CharacterComponent} from "./character.component";

export const CharacterRoute = {
  path: 'character',
  component: CharacterComponent,
  children: [
    {
      path: ':id',
      component: CharacterDetailsComponent,
    }
  ]
};
