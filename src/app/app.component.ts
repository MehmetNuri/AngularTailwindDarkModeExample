import {Component, inject} from '@angular/core';
import {ThemeService} from "./theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTailwindDarkMode';
  isChecked = false;
  themeName: string = '';
  private _themeService = inject(ThemeService);
  public theme$ = this._themeService.theme$;

  constructor() {
    this._themeService.theme$.subscribe((theme) => {
      this.themeName = theme;
    });

    if (this.themeName === 'dark') {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
  }
}
