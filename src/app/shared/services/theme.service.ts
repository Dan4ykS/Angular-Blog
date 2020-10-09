import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: 'dark' | 'light' = 'dark';

  swithcThem(): void {
    this.theme === 'dark' ? (this.theme = 'light') : (this.theme = 'dark');
  }
}
