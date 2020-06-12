import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
  }

  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 9.930737;
  lng: number = 78.088598;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 9.930737,
      lng: 78.088598,
      label: 'A',
      draggable: false
    },
    {
      lat: 9.930310,
      lng: 78.095545,
      label: 'B',
      draggable: false
    },
    {
      lat: 9.923255,
      lng: 78.096187,
      label: 'C',
      draggable: false
    }
  ]

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
