import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {HeroService} from './hero.service'
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component'
@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { 
	public heroes: Hero[]
	selectedHero: Hero

	constructor(
    private router: Router,
    private heroService: HeroService) {}

	onSelect(hero: Hero) {
		this.selectedHero = hero
	}

	loadHeroes() {
		this.heroService.getHeroes().then(
			heroes => this.heroes = heroes
		)
	}

	ngOnInit() {
		this.loadHeroes()
	}

  gotoDetail() {
    this.router.navigate(
      ['/detail', this.selectedHero.id]
    )
  }
}
