import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantinhaService } from '../service/plantinha.service';
import { Plantinha } from '../plantinha.interface';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  plantinha: Plantinha = {} as Plantinha;

  constructor( 
    private service: PlantinhaService,
    private route: ActivatedRoute
 
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarPlanta(id);
  }

  buscarPlanta(id: number) {
    this.service.buscarPlanta(id).subscribe(resultado => {
      this.plantinha = resultado
      console.log(resultado)
    }
    );
  }

  atualizarDados(planta: Plantinha) {
    this.service.atualizarPlanta(planta).subscribe(plantaNova => {
      this.plantinha = plantaNova;
    })
    alert("Prontinho!")
  }

}
