import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PopularTagsState} from "../../shared/types/PopularTagsState";
import {AppState} from "../../../../../auth/shared/types/AppState";

export const popularTagsFeatureSelector = createFeatureSelector<AppState,PopularTagsState>('PopularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector, ((popularTagsState: PopularTagsState) => popularTagsState.isLoading)
);

export const popularTagsErrorSelector = createSelector(
  popularTagsFeatureSelector, ((popularTagsState: PopularTagsState) => popularTagsState.error)
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector, ((popularTagsState: PopularTagsState) => popularTagsState.data)
);
