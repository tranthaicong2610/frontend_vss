import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework5';
  data = {};
  employees =[
    { id: 1,name :"cong" , birthday : "12/12/2000",phone : "0123456789" ,address : "HA NOI"},
    {id: 2,name :"linh" , birthday : "12/12/2000",phone : "0123456789" ,address : "HA Tinh"},
    {id: 3,name :"phong" , birthday : "12/12/2000",phone : "01254651651" ,address : "HAI PHONG"},
    {id: 4,name :"trang" , birthday : "12/12/2000",phone : "01254055551" ,address : "HAI DUONG"},
    {id: 5,name :"quan" , birthday : "12/12/2000",phone : "01254055551" ,address : "NAM DINH"}


  ]
  onClick(item:any){
    this.data =  item;
  }
}
