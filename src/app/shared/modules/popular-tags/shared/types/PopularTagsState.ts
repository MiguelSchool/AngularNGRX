import {PopularTagType} from "../../../../types/PopularTagType";

export interface PopularTagsState {
  isLoading: boolean,
  error: string | null,
  data: PopularTagType[]| null
}
