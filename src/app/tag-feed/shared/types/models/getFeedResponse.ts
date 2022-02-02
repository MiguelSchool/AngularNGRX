import {Article} from "./Article";

export interface GetFeedResponse {
  articles: Article[],
  articlesCount: number
}
