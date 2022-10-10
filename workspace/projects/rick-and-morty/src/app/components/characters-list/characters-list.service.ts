import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export default class CharactersListService {
  likeEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
