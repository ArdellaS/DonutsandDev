import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interfaces/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
@Input() myPerson:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
