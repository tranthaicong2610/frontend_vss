import { Component, Input, OnChanges, OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit,OnChanges {
  @Input() data:any={};
  // @Input() trans:any={} ;
  constructor() { }
  listEmployees:any =[{id:0,name:"test",phone:"test"}]
  listEmployees2:any =[]
  ngOnInit(): void {

  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(this.listEmployees.length);
    // console.log("ok");
    // console.log(changes?.['data']?.currentValue);
    console.log(changes);
if(changes?.['data']?.currentValue){
    if(this.data.id != 0 && !this.listEmployees.includes(changes?.['data']?.currentValue) ) this.listEmployees.push(changes?.['data']?.currentValue);
    // console.log(this.trans);
  }


  }
  deleteItem(val:any){
    let indexElementDelete = this.listEmployees.indexOf(val);
    if(indexElementDelete % 2 == 1){
      this.listEmployees2.push(this.listEmployees[indexElementDelete]);
      this.listEmployees.splice(indexElementDelete,1);
    }
    console.log(this.listEmployees.indexOf(val));
    // console.log("cp 3" + this.trans);
  }


}
