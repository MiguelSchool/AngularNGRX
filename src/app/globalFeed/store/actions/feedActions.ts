import {createAction, props} from "@ngrx/store";
import {GlobalFeedActions} from "../../shared/types/actionTypes/globalFeedActions";
import {GetFeedResponse} from "../../shared/types/models/getFeedResponse";

export const getFeedAction = createAction(
  GlobalFeedActions.GET_FEED,
  props<{url: string}>()
);

export const getFeedSuccessAction = createAction(
  GlobalFeedActions.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponse}>()
);

export const getFeedFailureAction = createAction(
  GlobalFeedActions.GET_FEED_FAILURE
);

