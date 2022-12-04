import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hoinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'sa3ada';
  hideMessagebox = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 19,
    roomType: 'Deluxe Room',
    amenities: 'Air COnditioner, Free Wi-Fi, TV ',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('13-Nov-2021')
  },
  {
    roomNumber: 2,
    roomType: 'Private Room',
    amenities: 'Air COnditioner, Free Wi-Fi, TV ',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    checkinTime: new Date('15-Nov-2021'),
    checkoutTime: new Date('1ç-Nov-2021')
  }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideMessagebox = !this.hideMessagebox;
  }

  selectRoom(room: RoomList){
    console.log(room);
  }

}
