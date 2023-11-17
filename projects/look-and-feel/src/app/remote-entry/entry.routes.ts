import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DesignMainComponent } from '../components/design-main.component';
import { DesignService } from '@test-frontend/shared/data';

export const remoteRoutes: Route[] = [
  {
    path: '',
    providers: [DesignService],
    component: DesignMainComponent
  },
];
