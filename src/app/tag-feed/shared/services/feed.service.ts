import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GetFeedResponse} from "../types/models/getFeedResponse";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string) : Observable<GetFeedResponse> {
    const FULL_URL = environment.apiURL+ url
    return this.http.get<GetFeedResponse>(FULL_URL);
  }
}
