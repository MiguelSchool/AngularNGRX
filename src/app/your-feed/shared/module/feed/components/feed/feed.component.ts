import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "../../../../../store/actions/feedActions";
import {Observable, Subscription} from "rxjs";
import {GetFeedResponse} from "../../../../types/models/getFeedResponse";
import {
  errorSelector,
  feedSelector,
  isLoadingSelector
} from "../../../../../store/selectors/feedSelector";

import {environment} from "../../../../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {parseUrl} from "query-string";
import {stringify} from "query-string";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {

  @Input('apiUrl') apiUrlProps:string | undefined;
  limit = environment.limit
  baseUrl: string | undefined;
  currentPage: number | undefined;
  queryParamsSubscription: Subscription | undefined;
  feed$: Observable<GetFeedResponse|null> | undefined;
  error$: Observable<string | null>| undefined;
  isLoading$: Observable<boolean> | undefined;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListener();
  }
  ngOnDestroy() {
    this.queryParamsSubscription
    && this.queryParamsSubscription.unsubscribe();
  }

  private initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.feed$ = this.store.pipe(
      // @ts-ignore
      select(feedSelector));

    this.error$ = this.store.pipe(
      // @ts-ignore
      select(errorSelector));

    this.isLoading$ = this.store.pipe(
      // @ts-ignore
      select(isLoadingSelector));
  }

  // added library with 'npm i query-string'
  // for offset limited page

  private fetchFeed(): void {

    if( this.apiUrlProps && this.currentPage ) {
      const offset= this.currentPage * this.limit -this.limit;
      const parsedUrl = parseUrl(this.apiUrlProps);
      const stringifiedParams = stringify({
        limit: this.limit,
        offset,
        ...parsedUrl.query
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
    }
  }

  private initializeListener(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params:Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();

      });
  }
}
