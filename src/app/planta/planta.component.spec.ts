import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Planta } from './planta';

describe('PlantaComponent', () => {
 let component: PlantaComponent;
 let fixture: ComponentFixture<PlantaComponent>;
 let plantaService: PlantaService;

 const mockPlantas: Planta[] = [
   new Planta(
     1,
     "Lengua de vaca",
     "Sansevieria Trifasciata",
     "Interior",
     140,
     "Templado, cálido",
     "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
   ),
   new Planta(
     2,
     "Chachafruto",
     "Schefflera actinophylla",
     "Exterior",
     1000,
     "Todos",
     "Sustrato para huerto"
   ),
   new Planta(
     3,
     "Espatifilo",
     "Spathiphyllum Wallasii",
     "Interior",
     65,
     "Templado, cálido",
     "Tierra orgánica"
   )
 ];

 beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [PlantaComponent],
     providers: [PlantaService]
   }).compileComponents();
 });

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantaComponent);
   component = fixture.componentInstance;
   plantaService = TestBed.inject(PlantaService);
   spyOn(plantaService, 'obtenerPlantas').and.returnValue(of(mockPlantas));
   fixture.detectChanges();
 });

 it('debería crear el componente', () => {
   expect(component).toBeTruthy();
 });

 it('debería mostrar una tabla con tres filas y un encabezado', () => {
   expect(component.plantas.length).toBe(3);
   const table = fixture.nativeElement.querySelector('table');
   expect(table).toBeTruthy();
   const headerRows = fixture.nativeElement.querySelectorAll('thead tr');
   expect(headerRows.length).toBe(1);
   const bodyRows = fixture.nativeElement.querySelectorAll('tbody tr');
   expect(bodyRows.length).toBe(3);
 });

 it('debería mostrar los datos correctos de las plantas en la tabla', () => {
   const rows = fixture.nativeElement.querySelectorAll('tbody tr');
   expect(rows[0].cells[1].textContent).toContain('Lengua de vaca');
   expect(rows[0].cells[2].textContent).toContain('Interior');
   expect(rows[0].cells[3].textContent).toContain('Templado, cálido');
   expect(rows[1].cells[1].textContent).toContain('Chachafruto');
   expect(rows[1].cells[2].textContent).toContain('Exterior');
   expect(rows[1].cells[3].textContent).toContain('Todos');
   expect(rows[2].cells[1].textContent).toContain('Espatifilo');
   expect(rows[2].cells[2].textContent).toContain('Interior');
   expect(rows[2].cells[3].textContent).toContain('Templado, cálido');
 });
});