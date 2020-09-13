import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.css']
})
export class DemoRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}