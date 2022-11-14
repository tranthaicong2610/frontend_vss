import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,OnChanges {
  @Input() studentDetails = [{
    id : 1,
    name: 'Test Person1'

}];
  constructor() { }
  list = [{id : 1,
    name: 'Test Person1'}]
  ngOnInit(): void {

  }
  isDisplay = false;
  ngOnChanges(){
    console.log("parent2");
      if(this.studentDetails.length == 10){
          this.list = this.studentDetails;
          this.isDisplay = true;

          console.log(this.studentDetails.length);

      }

  }

}
