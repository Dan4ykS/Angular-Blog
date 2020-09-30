import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  screenSize: number;

  constructor() {
    this.screenSize = window.innerWidth
  }

  @HostListener('window:resize', ['$event.target'])
  onResize(target: Window) {
    this.screenSize = target.innerWidth
  }

  ngOnInit(): void {
  }

}
