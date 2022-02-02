import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PopularTagsService} from "../../shared/services/popular-tags.service";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "../actions/PopularTagsActions";
import {catchError, map, of, switchMap} from "rxjs";
import {PopularTagType} from "../../../../types/PopularTagType";


@Injectable()
export class PopularTagsEffectService {

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,

  ) { }

  getPopularTags$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((popularTags:PopularTagType[]) => getPopularTagsSuccessAction({tags: popularTags}))
      )}),
    catchError((errorResponse) => of(getPopularTagsFailureAction))
  ))
}
