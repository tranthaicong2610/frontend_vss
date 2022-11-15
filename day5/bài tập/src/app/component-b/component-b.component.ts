import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() data:any = {};
  constructor() { }
  // trans:any = {}
  ngOnInit(): void {
  }
  // ngOnChanges() {
  //     this.trans = this.data;
  // }
  // editData(employee:any){
  //   this.trans = employee;
  // }


}
