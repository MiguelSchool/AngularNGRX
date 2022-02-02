import {createFeatureSelector, createSelector} from "@ngrx/store";

import {AppState} from "../../../auth/shared/types/AppState";
import {FeedState} from "../../shared/types/feedState";


export const feedFeatureSelector = createFeatureSelector<AppState,FeedState>('feed')

export const isLoadingSelector = createSelector(
  feedFeatureSelector, ((feedState: FeedState) => feedState.isLoading )
);

export const errorSelector = createSelector(
  feedFeatureSelector, ((feedState: FeedState) => feedState.error)
);

export const feedSelector = createSelector(
  feedFeatureSelector, ((feedState: FeedState) => feedState.data)
);
