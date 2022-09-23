import { Component, OnInit } from '@angular/core';
import { Plantinha } from './plantinha.interface';
import { PlantinhaService } from './service/plantinha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  plantas: Plantinha[] = []

  constructor(
    private plantinhaService: PlantinhaService
  ) {}
  ngOnInit(): void {
    this.plantinhaService.buscarTudo().subscribe(planta =>{
      this.plantas = planta;
    } )
  }
  title = 'plantinhas';
}
