import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-item',
  templateUrl: './number-item.component.html',
  styleUrls: ['./number-item.component.css']
})
export class NumberItemComponent implements OnInit {

  constructor() { }

@Input() num:number= 0;
 selected:boolean = false;
 

@Input() length:number = 0;
@Output() newItemEvent = new EventEmitter<number>();


addNewNum(value:number):void
{

  this.selected = true;
  
  this.newItemEvent.emit(value);

}


  ngOnInit(): void {
  }

}
