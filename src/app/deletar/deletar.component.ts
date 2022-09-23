import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuidados, Plantinha } from '../plantinha.interface';
import { CuidadosServiceService } from '../service/cuidados-service.service';
import { PlantinhaService } from '../service/plantinha.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.scss']
})
export class DeletarComponent implements OnInit {

  planta: Plantinha = {} as Plantinha;
  cuidado: Cuidados = {} as Cuidados;
  @Input()
  id: number = 0;
   
  constructor(
    private service: PlantinhaService,
    private service2: CuidadosServiceService,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private router: Router
  ) { }

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

  deletarPlanta(id: number) {
    this.service.deletarPlanta(id).subscribe(deletar => {this.planta = deletar});
    this.service2.deletarCuidados(id).subscribe(deletar => {this.cuidado = deletar});
    alert("Já era...");
    this.router.navigate(['/ver-tudo'])
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
}
}
