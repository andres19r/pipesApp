import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

// change the app local
import localeEs from '@angular/common/locales/es-AR'
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
