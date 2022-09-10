import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { IconGoogleFontsComponent } from './icon-google-fonts/icon-google-fonts.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuIconComponent,
    IconGoogleFontsComponent,
    CardComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, MenuIconComponent, CardComponent],
})
export class ComponentsModule {}
