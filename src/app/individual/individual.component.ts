import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantinha } from '../plantinha.interface';
import { PlantinhaService } from '../plantinha.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  planta: Plantinha = {} as Plantinha;

  constructor(private service: PlantinhaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarPlanta(id);
  }

  buscarPlanta(id: number) {
    this.service.buscarPlanta(id).subscribe(resultado => { this.planta = resultado
    console.log(resultado) }
    );
  }
}
