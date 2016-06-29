import {Component ,OnInit} from '@angular/core';
import {  Router } from '@angular/router-deprecated';
import {HeroService} from './../../service/HeroService';
import { Hero } from './../../model/Hero';

@Component({
    selector: 'my-heroes',
    template:require('./Heroes.html'),
    styles:  ['./Heroes.scss']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes():void {
        this.heroService.getHeroes().then((heroes:Hero[]) => this.heroes = heroes);
    }

    ngOnInit():void {
        this.getHeroes();
    }

    onSelect(hero: Hero):void { this.selectedHero = hero; }

    gotoDetail():void {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
