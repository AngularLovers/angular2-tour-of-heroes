import { Component } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './component/DashBoard/DashBoard';
import { HeroesComponent } from './component/Heroes/Heroes';
import { HeroDetailComponent } from './component/HeroDetail/HeroDetail';
import { HeroService } from './service/HeroService';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    title:string = 'Tour of Heroes';
}


bootstrap(AppComponent);
