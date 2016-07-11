import { XHRBackend } from '@angular/http'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './app/in-memory-data.service'

import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'
import { enableProdMode } from '@angular/core'

import { AppComponent } from './app/app.component'
import { APP_ROUTER_PROVDIERS } from './app/app.routes'

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
	APP_ROUTER_PROVDIERS,
	HTTP_PROVIDERS,
	{ provide: XHRBackend, useClass: InMemoryBackendService },
	{ provide: SEED_DATA, useClass: InMemoryDataService }
]);