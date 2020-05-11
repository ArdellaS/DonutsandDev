import { Component, OnInit, Input } from '@angular/core';
import { DonutsService } from '../donuts.service';
import {  Donuts, Donut } from '../interfaces/donuts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss'],
})
export class DonutDetailComponent implements OnInit {
  donut: Donut;
  id: number;
  editName:string;
  editCal:number;
  editUrl:string;

  constructor(
    private donutService:DonutsService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(){
    this.route.params.subscribe(param => {
      this.id = +param['id'];
    });

    this.donut = await this.donutService.getDonutById(this.id)
    this.editName = this.donut.name;
    this.editCal = this.donut.calories;
    
  }

  async updateDonut()
  {
    this.donutService.updateDonut(this.id, {name:this.editName, calories:this.editCal})
    
    this.donut = await this.donutService.getDonutById(this.id)
  }
}
