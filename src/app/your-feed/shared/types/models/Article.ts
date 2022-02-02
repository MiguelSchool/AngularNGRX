import {Profile} from "./Profile";
import {PopularTagType} from "../../../../shared/types/PopularTagType";

export interface Article {
  title: string,
  slug: string,
  body: string,
  createdAt: string,
  updatedAt: string,
  tagList: PopularTagType[],
  description: string[],
  author: Profile,
  favorited: false,
  favoriteCount: number
}
