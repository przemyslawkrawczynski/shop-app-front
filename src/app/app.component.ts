import { Component } from '@angular/core';
import { ProductRestService } from './services/product-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  align: string = 'right';
  pageText: string = 'Przeglądaj produkty';
  title = 'Shop app - FL Group';
}
