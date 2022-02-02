import { Injectable } from '@angular/core';
import {FeedService} from "../../shared/services/feed.service";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "../actions/feedActions";
import {catchError, map, of, switchMap} from "rxjs";
import {GetFeedResponse} from "../../shared/types/models/getFeedResponse";

@Injectable({
  providedIn: 'root'
})
export class FeedEffectService {

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
    private router: Router
  ) { }

  getFeeds$ = createEffect(()=>
  this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feedResponse: GetFeedResponse) =>
          getFeedSuccessAction({ feed: feedResponse}))
      )
    }),
    catchError((errorResponse) => {
      return of(
        getFeedFailureAction()
      )
    })
  ));


}
