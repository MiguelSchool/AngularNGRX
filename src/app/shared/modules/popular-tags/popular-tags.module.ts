import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "./shared/services/popular-tags.service";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {PopularTagsEffectService} from "./store/effects/popular-tags-effect.service";
import {RouterModule} from "@angular/router";
import {reducers} from "./store/reducer/PopularTagsReducer";



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    EffectsModule.forFeature(
      [
        PopularTagsEffectService
      ]),
    StoreModule.forFeature('PopularTags', reducers),
    RouterModule,
  ],
  exports: [
    PopularTagsComponent

  ],
  providers: [
    PopularTagsService
  ]
})
export class PopularTagsModule { }
