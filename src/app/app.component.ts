import { Component } from '@angular/core';
import { SvgIconService } from './core/services/svg-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconSrv: SvgIconService) {
    this.iconSrv.register();
  }
}
