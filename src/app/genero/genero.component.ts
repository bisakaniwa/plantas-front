import { Component, OnInit } from '@angular/core';
import { Plantinha } from '../interface/plantinha.interface';
import { PlantinhaService } from '../service/plantinha.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  plantas: String[] = [];
  planta: Plantinha = {} as Plantinha;

  constructor(private service: PlantinhaService) { }

  ngOnInit(): void {
    this.buscarGenero();
  }

  buscarGenero() {
    this.service.buscarGenero().subscribe(generos => {
      this.plantas = generos
    })
  }


}
