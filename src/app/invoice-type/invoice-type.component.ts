import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-invoice-type',
  templateUrl: './invoice-type.component.html',
  styleUrls: ['./invoice-type.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class InvoiceTypeComponent implements OnInit {

  constructor(private route: Router){ }

  panelColor = new FormControl('red');

// constructor() { }
  selectedOption = "--select--";

    data:Array<Object> = [
      {id: 0, name: "AmeriHome"},
      {id: 1, name: "BoA"}
    ];
   
/*
   selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData);
}
 */
 

  ngOnInit() {
  }

  selected(selectedOption) {
    this.selectedOption = selectedOption;
    alert(selectedOption)
  }

}
