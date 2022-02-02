import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isLoggedInSelector} from "../../../../../auth/store/selectors/Selectors";

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css']
})
export class FeedTogglerComponent implements OnInit {

  @Input('tagName')tagNameProps: string | null | undefined;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private store: Store) { }

  ngOnInit(): void {
   this.initializeValues();
  }

  private initializeValues(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
