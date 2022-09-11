import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { FirebaseModule } from './core/firebase/firebase.module';
import { NgRxModule } from './core/store/ngRx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FirebaseModule,
    NgRxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
