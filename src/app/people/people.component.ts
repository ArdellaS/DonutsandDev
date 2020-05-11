import { Component, OnInit } from '@angular/core';
import { ScienceService } from '../science.service';
import { People, Person } from '../interfaces/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people:People;

  constructor(private scienceService:ScienceService) { }

  ngOnInit(): void {
    this.scienceService.getPeople().subscribe(
      (data: People) => this.people = { ...data }, 
      error => console.error(error)
    );
  }

}
