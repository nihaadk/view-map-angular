import { Component, OnInit } from '@angular/core';
import { Marker } from './marker.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // Zoom Level
  zoom: number = 10;
  
  
  lat: number = 51.678418;
  lng: number = 7.809007;

  // Markers
  markers: Marker[] = [
    {
      name: "Company 1",
      lat: 51.678234,
      lng: 7.809222,
      draggable: true
    },
    {
      name: "Company 2",
      lat: 51.610266,
      lng: 7.809900,
      draggable: true
    },
    {
      name: "Company 3",
      lat: 51.500266,
      lng: 7.709900,
      draggable: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickedMarker(marker: Marker, index: number){
    console.log("Cliked Marker: "+marker.name+" at index:"+index);
  }

  mapClicked($event: any){
    var newMarker = {
      name: "None",
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker: Marker,$event: any){
    var updMarker = {
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    
  }

}
