import {RouterModule, Routes} from "@angular/router";
import {TagFeedComponent} from "./components/tag-feed/tag-feed.component";

const routes: Routes = [

  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
];
export const router = RouterModule.forChild(routes);
