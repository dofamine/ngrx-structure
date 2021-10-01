import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducerProvider, ROOT_REDUCER_TOKEN, runtimeChecks } from './store/config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from "@angular/common/http";
import { UsersEffects } from "./store/effects/users.effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { FeeComponent } from './fee/fee.component';

@NgModule({
  declarations: [
    AppComponent,
    FeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCER_TOKEN, { metaReducers, runtimeChecks }),
    StoreRouterConnectingModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [reducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
