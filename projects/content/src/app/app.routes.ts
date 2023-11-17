import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { DesignService } from '@test-frontend/shared/data';

export const appRoutes: Route[] = [
  {
    path: 'look-and-feel',
    loadChildren: () =>
      import('look-and-feel/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    providers: [DesignService],
    component: NxWelcomeComponent,
  },
];
