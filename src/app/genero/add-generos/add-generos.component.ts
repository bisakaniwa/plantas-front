import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantinha } from 'src/app/interface/plantinha.interface';
import { PlantinhaService } from 'src/app/service/plantinha.service';

@Component({
  selector: 'app-add-generos',
  templateUrl: './add-generos.component.html',
  styleUrls: ['./add-generos.component.scss']
})
export class AddGenerosComponent implements OnInit {

  planta: Plantinha = {} as Plantinha
  generos: Plantinha[] = []
  generoListado: string = ''
  tipoListado: string = ''

  constructor(
    private sucuForm: FormBuilder,
    private service: PlantinhaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const genero = String(this.route.snapshot.paramMap.get('genero'));
    this.generoListado = genero;
    this.buscarGenero(genero);
    this.tipoListado = 'Suculenta';
  }

  buscarGenero(genero: string) {
    this.service.buscarPorGenero(genero).subscribe(genero => {
      this.generos = genero
    })
  }

  plantaForm = this.sucuForm.group({
    tipo: ['Suculenta', [Validators.required]],
    genero: this.generoListado,
    especie: ['', [Validators.required]],
    especificacao: '',
    nomePopular: '',
    imagem: '',
    detalhe: ''
  });

  adicionar(planta: Plantinha) {
    if (this.plantaForm.value.especie !== '') {
      this.planta.tipo = this.plantaForm.value.tipo!;
      this.planta.genero = this.generoListado;
      this.planta.especie = this.plantaForm.value.especie!;
      this.planta.especificacao = this.plantaForm.value.especificacao ? this.plantaForm.value.especificacao : '';
      this.planta.nomePopular = this.plantaForm.value.nomePopular ? this.plantaForm.value.nomePopular : 'Não tem :(';
      this.planta.imagem = this.plantaForm.value.imagem ? this.plantaForm.value.imagem : '';
      this.planta.detalhe = this.plantaForm.value.detalhe ? this.plantaForm.value.detalhe : '';

      this.service.adicionarPlanta(planta).subscribe(plantaNova => {
        this.planta = plantaNova;
      }
      )
    }
    alert("Prontinho!");
    this.router.navigate(['/genero/', this.generoListado]);
  }

}
