import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map', {
      center: [58.1735, 13.5507],
      zoom: 12,
    });
    L.tileLayer(baseMapURl).addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
