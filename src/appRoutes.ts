import {RouterModule, Routes} from "@angular/router";

import {
  PageNotFoundComponent
} from "./app/shared/modules/backend-error-messages/components/page-not-found/page-not-found.component";


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
    path: 'home/feed',
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
    path: 'tags/:slug',
    loadChildren: () => import('src/app/tag-feed/tag-feed.module')
      .then(module => module.TagFeedModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export const appRouter = RouterModule.forRoot(routes);
