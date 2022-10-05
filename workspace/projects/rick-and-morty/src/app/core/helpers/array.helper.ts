import {Injectable} from "@angular/core";

@Injectable()
class ArrayHelper {
  constructor() {}

  sortFn(a: any, b: any): number {
    return (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0;
  }
}

export default ArrayHelper;
