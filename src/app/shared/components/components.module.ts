import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';

@NgModule({
  declarations: [NavbarComponent, MenuIconComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, MenuIconComponent],
})
export class ComponentsModule {}
