import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  isLoadingSelector,
  popularTagsErrorSelector,
  popularTagsSelector
} from "../../store/selector/PopularTagsFeatureSelector";
import {PopularTagType} from "../../../../types/PopularTagType";
import {AppState} from "../../../../../auth/shared/types/AppState";
import {getPopularTagsAction} from "../../store/actions/PopularTagsActions";

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {

  error$: Observable<string | null> | undefined;
  isLoading$: Observable<boolean> | undefined;
  popularTags$: Observable<PopularTagType[] | null> | undefined

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    // @ts-ignore
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(popularTagsErrorSelector));
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
