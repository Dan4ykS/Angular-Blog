import { Component, ViewEncapsulation } from '@angular/core';

import { ThemeService} from './shared/services/theme.service';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(public themeService: ThemeService) { }

}
