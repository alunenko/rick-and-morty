import {CharactersComponent} from "../_pages/characters/characters.component";
import {CharactersListResolver} from "./characters-list.resolver";

export const CharactersListRoute = {
  path: 'characters',
  component: CharactersComponent,
  resolve: { characters: CharactersListResolver }
};
