import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";
import {UrsListEnum} from "../../core/url-list.enum";
import {ICharacterListResults, ICharactersListResponse} from "./characters-list";

@Injectable()
export default class CharactersListService {
  next: string | null = null;

  private getDefaultCharactersUrl = `${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`;

  constructor(
    private httpClient: HttpClient
  ) {}

  getCharacters(next: boolean = false): Observable<ICharacterListResults[]> {
    let url = next ? this.next! : this.getDefaultCharactersUrl;
    console.log('getCharacters');
    return this.httpClient.get<ICharactersListResponse>(url)
      .pipe(
        delay(3000),
        map((getCharactersResponse: ICharactersListResponse) => {
          this.next = getCharactersResponse.info.next;
          return getCharactersResponse.results;
        })
      )
    ;
  }
}
