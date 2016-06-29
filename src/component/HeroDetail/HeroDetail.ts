import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


import { Hero } from './../../model/Hero';
import { HeroService } from './../../service/HeroService';

@Component({
    selector: 'my-hero-detail',
    template: require('./HeroDetail.html'),
    styles: [require('./HeroDetail.scss')]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit():void {
        let id:number = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then((hero:Hero) => this.hero = hero);
    }

    goBack():void {
        window.history.back();
    }
}
