import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lottery-ticket-app';

  nums:number[] = [];
  find:boolean = false;

  length:number = this.nums.length;

  addItem(newItem: number) {
  
    this.find = false;

    this.nums.forEach(num => {
      if(num == newItem)
      {
        this.find = true;
      }
    });
    if(this.find == false && this.nums.length <5)
    {
    this.nums.push(newItem);
    }
    
  }
}
