import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {feedRouter} from "./routes";
import {FeedModule} from "./shared/module/feed/feed.module";
import {FeedService} from "./shared/services/feed.service";
import {EffectsModule} from "@ngrx/effects";
import {FeedEffectService} from "./store/effects/feed-effect.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers/feedReducer";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";



@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
    imports: [
        CommonModule,
        feedRouter,
        FeedModule,
        EffectsModule.forFeature(
            [
                FeedEffectService
            ]),
        StoreModule.forFeature('feed', reducers),
        BannerModule,
        PopularTagsModule
    ],
  providers: [
    FeedService
  ]
})
export class GlobalFeedModule { }
