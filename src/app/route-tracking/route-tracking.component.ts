import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-route-tracking',
  templateUrl: './route-tracking.component.html',
  styleUrls: ['./route-tracking.component.css']
})
export class RouteTrackingComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  public polylines: Array<any>;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 15;
    this.maxSpeed = 40;
    this.latitude = 9.930737;
    this.longitude = 78.088598;

    this.polyline = [
      {
        latitude: 9.930737,
        longitude: 78.088598
      },
      {
        latitude: 9.930310,
        longitude: 78.095545
      },
      {
        latitude: 9.923255,
        longitude: 78.096187
      }
    ]
    this.polylines = this.rebuildPolylines();


    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

    });
  }

  markers: marker[] = [
    {
      lat: 9.930737,
      lng: 78.088598,
      label: 'A'
    },
    {
      lat: 9.930310,
      lng: 78.095545,
      label: 'B'
    },
    {
      lat: 9.923255,
      lng: 78.096187,
      label: 'C'
    }
  ]
  private rebuildPolylines() {
    let polylines = [];
    let i = 0;
    let newPolyline = { path: [], color: 'blue' };
    for (let point of this.polyline) {
      console.log(point)
      newPolyline.path.push(point);
      newPolyline.color = 'red';
      polylines.push(newPolyline);
      //const speedChanged = this.polyline[i+1] && (point.speed < this.maxSpeed && this.polyline[i+1].speed < this.maxSpeed) ||(point.speed > this.maxSpeed && this.polyline[i+1].speed > this.maxSpeed )
      //console.log(speedChanged)
      if (point.speed > this.maxSpeed) {
        newPolyline.color = 'red';
      }
      /*if (speedChanged) {
        console.log("first")
        newPolyline.path.push( this.polyline[i+1] );
        polylines.push(newPolyline);
        newPolyline = {path: [], color: 'blue'};
      }*/
      i++;
    }
    console.log(polylines);
    return polylines;

  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //this.latitude = position.coords.latitude;
        //this.longitude = position.coords.longitude;
        this.latitude = 9.930737;
        this.longitude = 78.088598;
        this.zoom = 15;
      });
    }
  }

}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
}