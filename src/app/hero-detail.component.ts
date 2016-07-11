import {Component, OnInit, OnDestroy} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

import {Hero} from './hero'
import {HeroService} from './hero.service'
import {Subscription} from 'rxjs/Subscription'

@Component({
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
	hero: Hero
	sub: Subscription

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let id = +params['id']
			this.heroService.getHero(id).then(hero =>
				this.hero = hero
			)
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goBack() {
		window.history.back()
	}
}