import {CharactersComponent} from "./characters.component";
import {CharactersResolver} from "./characters.resolver";

export const CharactersRoute = {
  path: 'characters',
  component: CharactersComponent,
  resolve: { characters: CharactersResolver }
};
