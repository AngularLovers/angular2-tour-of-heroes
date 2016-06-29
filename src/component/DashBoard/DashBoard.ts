import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './../../model/Hero';
import { HeroService } from './../../service/HeroService';

@Component({
    selector: 'my-dashboard',
    template: require('./DashBoard.html'),
    styles:[require('./DashBoard.scss')]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit():void {
        this.heroService.getHeroes()
            .then((heroes:Hero[]) => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero):void {
        let link:any = ['HeroDetail', { id: hero.id }];
        this.router.navigate(link);
    }
}
