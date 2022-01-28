import {RouterModule, Routes} from "@angular/router";
import {YourFeedComponent} from "./components/your-feed/your-feed.component";

const routes: Routes = [
  {
    path: '',
    component: YourFeedComponent
  }
];
export const router = RouterModule.forChild(routes);
