import {GetFeedResponse} from "./models/getFeedResponse";

export interface FeedState {
  isLoading: boolean,
  error: string | null,
  data: GetFeedResponse | null
}
