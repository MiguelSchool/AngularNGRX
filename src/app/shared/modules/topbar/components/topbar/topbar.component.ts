import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CurrentUser} from "../../../../types/CurrentUser";
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from "../../../../../auth/store/Selectors";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean | null> |undefined;
  isAnonymous$: Observable<boolean | null> |undefined;
  currentUser$: Observable<CurrentUser | null> | undefined

  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }
  private initializeValues() : void {
    this.isLoggedIn$ = this.store.pipe(
      // @ts-ignore
      select(isLoggedInSelector)
    );
    this.isAnonymous$ = this.store.pipe(
      // @ts-ignore
      select(isAnonymousSelector)
    );
    this.currentUser$ = this.store.pipe(
      // @ts-ignore
      select(currentUserSelector)
    )
  }
}
