import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env } from 'src/environments/environment';
import { metaReducers, reducers } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: env.production }),
  ],
  exports: [],
})
export class NgRxModule {}
