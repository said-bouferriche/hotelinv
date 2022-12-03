import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hoinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'sa3ada';
  hideMessagebox = false;

  rooms: Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms: 5
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideMessagebox = !this.hideMessagebox;
  }

}
