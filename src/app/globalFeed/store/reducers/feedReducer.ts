import {Action, createReducer, on} from "@ngrx/store";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "../actions/feedActions";
import {FeedState} from "../../shared/types/feedState";
import {routerNavigationAction} from "@ngrx/router-store";

const initialState:FeedState = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state:FeedState) => ({
    ...state,
    isLoading: true
  })),

  on(getFeedSuccessAction, (state, action):FeedState => ({
    ...state,
    isLoading: false,
    data: action.feed
  })),

  on(getFeedFailureAction, (state,action):FeedState => ({
    ...state,
    isLoading: false
  })),

  on(routerNavigationAction, () : FeedState => initialState ));

export function reducers(state: FeedState, action: Action) {
  return feedReducer(state,action);
}
