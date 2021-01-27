import { Component, OnInit } from '@angular/core';
import trucksData  from '../trucks.json';


interface truck {

  id: Number;

  foodType: String;

  location: String;

}

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit {

  trucks: truck[] = trucksData;
  constructor() { }

  ngOnInit(): void {
  }

}
