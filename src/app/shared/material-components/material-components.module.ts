import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SvgIconComponent],
})
export class MaterialComponentsModule {}
