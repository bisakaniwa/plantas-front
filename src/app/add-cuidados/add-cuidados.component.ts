import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cuidados } from '../plantinha.interface';
import { CuidadosServiceService } from '../service/cuidados-service.service';
import { PlantinhaService } from '../service/plantinha.service';

@Component({
  selector: 'app-add-cuidados',
  templateUrl: './add-cuidados.component.html',
  styleUrls: ['./add-cuidados.component.scss']
})
export class AddCuidadosComponent implements OnInit {

  cuidados: Cuidados = {} as Cuidados;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cuidadoService: CuidadosServiceService, 
    private plantinha: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    console.log(this.id);
  }

  plantaCuidados = this.plantinha.group({
    substrato: '',
    rega: '',
    iluminacao: '',
    temperatura: '',
    umidade: '',
    ventos: ''
  })

  adicionarCuidados(cuidados: Cuidados) {
      this.cuidados.substrato = this.plantaCuidados.value.substrato ? this.plantaCuidados.value.substrato : '';
      this.cuidados.rega = this.plantaCuidados.value.rega ? this.plantaCuidados.value.rega : '';
      this.cuidados.iluminacao = this.plantaCuidados.value.iluminacao ? this.plantaCuidados.value.iluminacao : '';
      this.cuidados.temperatura = this.plantaCuidados.value.temperatura ? this.plantaCuidados.value.temperatura : '';
      this.cuidados.umidade = this.plantaCuidados.value.umidade ? this.plantaCuidados.value.umidade : '';
      this.cuidados.ventos = this.plantaCuidados.value.ventos ? this.plantaCuidados.value.ventos : '';
      this.cuidados.plantaId = this.id;

      this.cuidadoService.adicionarCuidados(cuidados).subscribe(cuidados => {
        this.cuidados = cuidados;
        this.cuidados.plantaId = this.id;
        this.plantaCuidados.reset();
        console.log(this.cuidados.plantaId)
      }
      )
    alert("Prontinho!")
  }
}
