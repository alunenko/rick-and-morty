import {Component, OnInit} from '@angular/core';
import {filter, mapTo, merge, Observable} from "rxjs";
import {ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _showLoader$!: Observable<boolean>;
  private _hideLoader$!: Observable<boolean>;
  isLoaded$!: Observable<boolean | string>;

  title = 'rick-and-morty';

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this._showLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
    this._hideLoader$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoaded$ = merge(...[this._showLoader$, this._hideLoader$], '');
  }
}
