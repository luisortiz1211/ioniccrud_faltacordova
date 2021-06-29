import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Appointment } from '../shared/appointment';


@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  bookingListRef:AngularFireList<any>
  bookingRef: AngularFireObject<any>

  constructor( private db:AngularFireDatabase) { }

  //create
  createBooking(apt:Appointment){
    return this.bookingListRef.push({
      name: apt.name,
      email:apt.email,
      mobile:apt.mobile
    })
  }
  //  GET single
  getBooking(id:string){
    this.bookingRef= this.db.object('/appointment/'+id);
    return this.bookingRef;
  }
  // GET list
  getBookingList(id:string){
    this.bookingListRef=this.db.list('/appointment')
    return this.bookingListRef;
}
// update
updateBooking(id, apt:Appointment){
  return this.bookingRef.update({
    name:apt.name,
    email:apt.email,
    mobile:apt.mobile
  })
}

//delete
deletebooking(id:string){
this.bookingRef= this.db.object('/appointment/'+id)
this.bookingRef.remove();
}

  
}