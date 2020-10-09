import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

import { ThemeService } from 'src/app/shared/services/theme.service';
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  screenSize: number;
  themeState: string;

  constructor(public themeService: ThemeService) {
    this.screenSize = window.innerWidth;
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event.target'])
  private onResize(target: Window): void {
    this.screenSize = target.innerWidth;
  }
}
