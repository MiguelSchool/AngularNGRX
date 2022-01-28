import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import {BannerModule} from "../shared/modules/banner/banner.module";
import {FeedTogglerModule} from "../shared/modules/feed-toggler/feed-toggler.module";
import {FeedModule} from "../globalFeed/shared/module/feed/feed.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";



@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule
  ]
})
export class YourFeedModule { }
