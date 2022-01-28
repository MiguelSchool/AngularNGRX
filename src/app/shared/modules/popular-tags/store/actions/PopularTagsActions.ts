import {createAction, props} from "@ngrx/store";
import {PopularTagsActionTypes} from "../../shared/types/actionTypes/popularTagsActionTypes";
import {PopularTagType} from "../../../../types/PopularTagType";

export const getPopularTagsAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS
);

export const getPopularTagsSuccessAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{tags: PopularTagType[]}>()
);

export const getPopularTagsFailureAction = createAction(
  PopularTagsActionTypes.GET_POPULAR_TAGS_Failure
)
