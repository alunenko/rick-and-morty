import {CharactersComponent} from "./characters.component";
import {CharactersListResolver} from "../../characters-list/characters-list.resolver";

export const CharactersRoute = {
  path: 'characters',
  component: CharactersComponent,
  resolve: { characters: CharactersListResolver }
};
