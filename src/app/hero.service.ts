import {Injectable} from '@angular/core'
import {HEROES} from './mock-heroes'
import {Hero} from './hero'

@Injectable()
export class HeroService {
	getHeroes() {
		return this.getHeroesFast()
	}

	getHero(id: number) {
		return this.getHeroes().then(heroes => 
			heroes.find(hero => hero.id === id)
		)
	}
	private getHeroesFast() {
		return Promise.resolve(HEROES)
	}

	private getHeroesSlow() {
		return new Promise<Hero[]>(resolve => 
			setTimeout(() => 
				resolve(HEROES), 2000
			)
		)
	}
}