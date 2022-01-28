import {AuthState} from "./AuthState";
import {FeedState} from "../../../globalFeed/shared/types/feedState";
import {PopularTagsState} from "../../../shared/modules/popular-tags/shared/types/PopularTagsState";

export interface AppState {
  auth: AuthState,
  feed: FeedState,
  PopularTags: PopularTagsState
}
