import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialComponentsModule,
  ],
})
export class HomeModule {}
