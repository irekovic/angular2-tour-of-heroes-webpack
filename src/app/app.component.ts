import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router'
import {HeroService} from './hero.service'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroesComponent} from './heroes.component'
import {DashboardComponent} from './dashboard.component'
import '../styles.css'

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService],
	precompile: [
		DashboardComponent,
		HeroDetailComponent, 
		HeroDetailComponent, 
		HeroesComponent
	],
	template:`
	<h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
		<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
	</nav>
	<router-outlet></router-outlet>

	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes'
}