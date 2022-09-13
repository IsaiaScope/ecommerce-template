import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, CategoryCardComponent],
  imports: [CommonModule, MaterialComponentsModule],
  exports: [NavbarComponent, CardComponent, CategoryCardComponent],
})
export class ComponentsModule {}
