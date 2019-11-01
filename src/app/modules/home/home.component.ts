import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '../../core/services/theme.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  tiles: string[] = [
    'Hi there!',
    'I\'m a custom component',
    'Toggle the dark theme',
    'This background is the accent color',
    'The borders have card background color',
    'The font is \'Pacifico\'',
    'The tile list scrolls vertically',
    'This is the last tile',
    'Test'
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(isDarkTheme: boolean) {
    this.themeService.setDarkTheme(isDarkTheme);
  }

}
