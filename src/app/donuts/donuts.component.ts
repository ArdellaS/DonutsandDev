import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Donuts, Donut } from '../interfaces/donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
  donuts:Donuts;
  
  constructor(private donutService:DonutsService) { }

  ngOnInit(): void {
    this.donuts = await this.donutService.getDonuts();
    
  }
}
