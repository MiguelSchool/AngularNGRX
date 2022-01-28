import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {GetPopularTagsResponse} from "../types/models/getPopularTagsResponse";
import {PopularTagType} from "../../../../types/PopularTagType";

@Injectable()
export class PopularTagsService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiURL+'/tags'
    return this.http.get<GetPopularTagsResponse>(url).pipe(
      map((response:GetPopularTagsResponse) => response.tags)
    );
  }
}
