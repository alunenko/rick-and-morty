import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrsListEnum} from "../../core/url-list.enum";
import {delay, map} from "rxjs/operators";

@Injectable()
export default class CharactersListService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getCharacters(): Observable<any> {
    return this.httpClient.get(`${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`)
      .pipe(
        delay(3000),
        map((getCharactersResponse: any) => getCharactersResponse.results)
      )
    ;
  }
}
