import {provideRouter, RouterConfig} from '@angular/router'
import {HeroesComponent} from './heroes.component'
import {DashboardComponent} from './dashboard.component'

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
]

export const APP_ROUTER_PROVDIERS = [
	provideRouter(routes)
]