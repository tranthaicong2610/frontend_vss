import { Component, OnInit ,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit,OnChanges  {
  @Input() isCheck = true ;
   studentDetails = [{
      id : 1,
      name: 'Test Person1'

  }];
  obj ={
      id : 1,
      name: 'Test Person1'
  }

  constructor() { }
  ok = true;
  isCheck10 =this.studentDetails.length;
  ngOnInit(): void {
    // this.ok = this.isCheck;
  }
  ngOnChanges(){
    if(this.ok == !this.isCheck && this.studentDetails.length < 10)
      {
          this.ok = this.isCheck;
          this.studentDetails.push(this.obj);
          console.log(this.isCheck);
      }
    this.isCheck10 =this.studentDetails.length;

  }

}
