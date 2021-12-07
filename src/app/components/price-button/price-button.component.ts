import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-price-button',
  templateUrl: './price-button.component.html',
  styleUrls: ['./price-button.component.css']
})
export class PriceButtonComponent implements OnInit {

  
  @Input() num:number= 0;
  
 
 @Input() length:number = 0;
 @Output() newItemEvent = new EventEmitter<number>();
 
 
 addNewNum(value:number):void
 {
   
   this.newItemEvent.emit(value);
 
 }

 



  ngOnInit(): void {
  }

}
