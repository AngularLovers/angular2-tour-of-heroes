import {provideRouter, RouterConfig} from '@angular/router';
import { BasicComponent } from './component/Demo/Basic';
import { BasicComponent2 } from './component/Demo2/Basic';

export const routes:RouterConfig = [
    {path: '', component: BasicComponent},
    {path: 'admin', component: BasicComponent2},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
