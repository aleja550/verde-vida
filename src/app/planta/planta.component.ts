import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Planta[] = [];

  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.plantaService.obtenerPlantas().subscribe(plantas => {
      this.plantas = plantas;
    });
  }

}
