import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  align: string = 'right';
  pageText: string = 'Przeglądaj produkty';
  title = 'Shop app - FL Group';
}
