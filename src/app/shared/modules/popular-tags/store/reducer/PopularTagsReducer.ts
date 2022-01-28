import {PopularTagsState} from "../../shared/types/PopularTagsState";
import {Action, createReducer, on} from "@ngrx/store";
import {getPopularTagsAction, getPopularTagsSuccessAction} from "../actions/PopularTagsActions";
import {getFeedFailureAction} from "../../../../../globalFeed/store/actions/feedActions";


const initialState: PopularTagsState = {
  isLoading: false,
  error: null,
  data: null
};

const popularTagsReducer = createReducer(
  initialState,

  on(getPopularTagsAction, (state:PopularTagsState) => ({
    ...state,
    isLoading: true
  })),

  on(getPopularTagsSuccessAction, (state,action):PopularTagsState => ({
    ...state,
    isLoading: false,
    data: action.tags
  })),

  on(getFeedFailureAction, (state,action):PopularTagsState => ({
    ...state,
    isLoading: false
  }))
);

export function  reducers(state: PopularTagsState, action: Action) {
  return popularTagsReducer(state,action);
}
