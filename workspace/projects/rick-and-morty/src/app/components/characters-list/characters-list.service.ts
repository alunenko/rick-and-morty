import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";
import {UrsListEnum} from "../../core/url-list.enum";
import {ICharacterListResults, ICharactersListResponse} from "./characters-list";

@Injectable()
export default class CharactersListService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getCharacters(): Observable<ICharacterListResults[]> {
    return this.httpClient.get<ICharactersListResponse>(`${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`)
      .pipe(
        delay(3000),
        map((getCharactersResponse: ICharactersListResponse) => getCharactersResponse.results)
      )
    ;
  }
}
