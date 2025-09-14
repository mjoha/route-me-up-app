import { Component } from '@angular/core';
import { MapComponent } from "./core/map/map.component";
import {RouteCreatorComponent} from './core/route-creator/route-creator.component';

@Component({
  selector: 'app-root',
  imports: [MapComponent, RouteCreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'route-me-up';
}
