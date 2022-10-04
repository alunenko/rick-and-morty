import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";
import {UrsListEnum} from "../../core/url-list.enum";
import {ICharacter, ICharactersListResponse} from "./characters-list";

@Injectable()
export default class CharactersListService {
  nextCharactersUrl: string | null = null;
  characters: ICharacter[] = [];

  private getDefaultCharactersUrl = `${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`;

  constructor(
    private httpClient: HttpClient
  ) {}

  getCharacters(isNextCharactersUrl: boolean = false): Observable<ICharacter[]> {
    let url = isNextCharactersUrl ? this.nextCharactersUrl! : this.getDefaultCharactersUrl;

    return this.httpClient.get<ICharactersListResponse>(url)
      .pipe(
        delay(3000),
        map((getCharactersResponse: ICharactersListResponse) => {
          this.nextCharactersUrl = getCharactersResponse.info.next;

          getCharactersResponse.results.map((item: any) => {
            item.like = false;
            this.characters.push(item);
          });

          return this.characters;
        })
      )
    ;
  }

  like(item: ICharacter): void {
    item.like = !item.like;
  }
}
