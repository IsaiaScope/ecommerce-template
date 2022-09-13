import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { C } from 'src/app/shared/constants/config';

@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  register() {
    const { iconsName: icons, path } = C.svgIconsList;

    icons.map((iconName) => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${path}${iconName}.svg`)
      );
    });
  }
}
