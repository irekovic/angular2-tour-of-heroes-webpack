import {Injectable} from '@angular/core'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {
	getHeroes() {
		return this.getHeroesFast()
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