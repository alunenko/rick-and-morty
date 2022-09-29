import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UrsListEnum} from "../../core/url-list.enum";

@Injectable()
export default class CharactersListService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getAllCharacters(): Observable<any> {
    return this.httpClient.get(`${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`);
  }
}
