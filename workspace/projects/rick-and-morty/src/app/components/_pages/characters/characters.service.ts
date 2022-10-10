import {Injectable, NgZone} from "@angular/core";
import {Observable} from "rxjs";
import {delay, map} from "rxjs/operators";
import {ICharacter, ICharactersListResponse, IUserDataLike, StorageDataType, UsersType} from "../../../core/characters";
import {UrsListEnum} from "../../../core/enum/url-list.enum";
import {HttpClient} from "@angular/common/http";
import ArrayHelper from "../../../core/helpers/array.helper";

@Injectable()
export class CharactersService {
  nextCharactersUrl: string | null = null;
  characters: ICharacter[] = [];
  userName: UsersType = 'guest';
  storageData: StorageDataType;

  private appStorageName = 'ramd';
  private getDefaultCharactersUrl = `${UrsListEnum.BASE}${UrsListEnum.CHARACTER}`;

  constructor(
    private httpClient: HttpClient,
    private ngZone: NgZone,
    private arrayHelper: ArrayHelper
  ) {
    this.storageData = {
      [this.userName]: {
        likes: []
      }
    };
  }

  getCharacters(isNextCharactersUrl: boolean = false): Observable<ICharacter[]> {
    let url = isNextCharactersUrl ? this.nextCharactersUrl! : this.getDefaultCharactersUrl;

    return this.httpClient.get<ICharactersListResponse>(url)
      .pipe(
        delay(3000),
        map((getCharactersResponse: ICharactersListResponse): ICharacter[] => {
          this.nextCharactersUrl = getCharactersResponse.info.next;

          getCharactersResponse.results.map((responseResultsItem: ICharacter): void => {
            this.characters.push(responseResultsItem);
          });

          this.initLikes();

          return this.characters;
        })
      )
      ;
  }

  initLikes() {
    this.getDataFromStorage();

    let charactersLength = this.characters.length;
    let storageDataCharactersLength = this.storageData[this.userName]?.likes.length;

    for(let i = 0; i < charactersLength; i++) {
      for(let j = 0; j < storageDataCharactersLength!; j++) {
        this.characters[i].like = +this.characters[i].id === +this.storageData[this.userName]!.likes[j].id;

        if(this.characters[i].like) {
          break;
        }
      }
    }
  }

  private getDataFromStorage(): void {
    let storageData: string | null = null;

    this.ngZone.runOutsideAngular(() => {
      storageData = localStorage.getItem(this.appStorageName);

      if (storageData) {
        this.storageData = JSON.parse(storageData);
      }
    });
  }

  updateStorageData(item: ICharacter): void {
    this.getDataFromStorage();

    if(item.like) {
      this.storageData[this.userName]?.likes.push({id: item.id});
    } else {
      this.storageData[this.userName]?.likes.map((storageDataItem: IUserDataLike, $index): void => {
        if(item.id === storageDataItem.id) {
          this.storageData[this.userName]?.likes.splice($index, 1);
        }
      });
    }

    this.ngZone.runOutsideAngular((): void => {
      this.storageData[this.userName]?.likes.sort(this.arrayHelper.sortFn);
      localStorage.setItem(this.appStorageName, JSON.stringify(this.storageData));
    });
  }
}
