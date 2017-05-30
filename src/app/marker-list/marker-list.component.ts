import { Component, OnInit, Input } from '@angular/core';
import { Marker } from "app/body/marker.interface";

@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {

  @Input() markers: Marker[] = [];

  constructor() { }

  ngOnInit() {
  }

}
