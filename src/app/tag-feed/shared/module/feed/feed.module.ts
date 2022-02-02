import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import {RouterModule} from "@angular/router";
import { ArticleMetaComponent } from './components/article-meta/article-meta.component';
import {ErrorMessageModule} from "../../../../shared/modules/error-message/error-message.module";
import {LoadingModule} from "../../../../shared/modules/loading/loading.module";
import {PaginationModule} from "../../../../shared/modules/pagination/pagination.module";
import { TagListComponent } from './components/tag-list/tag-list.component';




@NgModule({
    declarations: [
        FeedComponent,
        ArticleMetaComponent,
        TagListComponent
    ],
    exports: [
        FeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule
    ]
})
export class FeedModule { }
