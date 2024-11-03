import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PlantaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PlantaComponent
  ]
})
export class PlantaModule { }