import { provideRouter, RouterConfig } from '@angular/router';

import {OverviewComponent} from './demo/overview.component';
import {OfficeInteractionComponent} from './demo/office-interaction.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'overview/:any',
        component: OverviewComponent
    },
    {
        path: 'office',
        component: OfficeInteractionComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];