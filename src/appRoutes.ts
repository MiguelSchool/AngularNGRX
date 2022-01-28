import {RouterModule, Routes} from "@angular/router";

import {
  PageNotFoundComponent
} from "./app/shared/modules/backend-error-messages/components/page-not-found/page-not-found.component";
import {HomeComponent} from "./app/components/home/home.component";

const routes:Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/globalFeed/GlobalFeed.module')
      .then(module => module.GlobalFeedModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('src/app/your-feed/your-feed.module')
      .then(module => module.YourFeedModule)
  },
  {
    path:'login',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path:'register',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export const appRouter = RouterModule.forRoot(routes);
