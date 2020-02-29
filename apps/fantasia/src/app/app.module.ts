import { NgModule } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StateApp } from '@fantasia/app/state';

import { RoutesApp } from './app.routes';
import { ComponentApp } from './app.component';
import { ModuleComponentMenu } from './components';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ModuleComponentMenu,

    RouterModule.forRoot(RoutesApp, { preloadingStrategy: PreloadAllModules }),

    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([StateApp]),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  declarations: [ComponentApp],

  entryComponents: [ComponentApp],

  providers: []
})
export class AppModule {
  constructor(private applicationRef: ApplicationRef) {}

  public ngDoBootstrap(): void {
    this.applicationRef.bootstrap(ComponentApp);
  }
}
