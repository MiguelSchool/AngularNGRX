import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import {PopularTagsModule} from "../shared/modules/popular-tags/popular-tags.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {FeedTogglerModule} from "../shared/modules/feed-toggler/feed-toggler.module";
import {FeedModule} from "./shared/module/feed/feed.module";
import {router} from "./routes";





@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    PopularTagsModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    router
  ]
})
export class TagFeedModule { }
