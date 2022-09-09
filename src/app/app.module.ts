import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: env.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
