import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuidados, Plantinha } from '../plantinha.interface';
import { CuidadosServiceService } from '../service/cuidados-service.service';
import { PlantinhaService } from '../service/plantinha.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  planta: Plantinha = {} as Plantinha;
  cuidado: Cuidados = {} as Cuidados;

  constructor(private service: PlantinhaService,
    private service2: CuidadosServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarPlanta(id);
    this.buscarCuidados(id);
  }

  buscarPlanta(id: number) {
    this.service.buscarPlanta(id).subscribe(resultado => { this.planta = resultado
    console.log(resultado) }
    );
  }

  buscarCuidados(id: number) {
    this.service2.buscarPorPlantaId(id).subscribe(resultado => { this.cuidado = resultado })
  }

  adicionarCuidados(id: number) {
    this.router.navigate(['/add-cuidados', id])
  }

  atualizarDados(id: number) {
    this.router.navigate(['/modificar-dados', id])
  }

  atualizarCuidados(id: number) {
    this.router.navigate(['/cuidados', id])
  }
} 
