import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuidados } from '../plantinha.interface';
import { CuidadosServiceService } from '../service/cuidados-service.service';

@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.component.html',
  styleUrls: ['./cuidados.component.scss']
})
export class CuidadosComponent implements OnInit {

  cuidado: Cuidados = {} as Cuidados;

  constructor(
    private service: CuidadosServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarCuidados(id);
  }

  buscarCuidados(id: number) {
    this.service.buscarPorPlantaId(id).subscribe(resultado => {
      this.cuidado = resultado
      console.log(resultado)
    }
    );
  }

  atualizarCuidados(cuidado: Cuidados) {
    this.service.atualizarCuidados(cuidado).subscribe(atualizacao => {
      this.cuidado = atualizacao;
    })
    alert("Prontinho!")
  }

}
