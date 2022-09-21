import { Component, OnInit } from '@angular/core';
import { Plantinha } from '../plantinha.interface';
import { PlantinhaService } from '../plantinha.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  planta: Plantinha = {} as Plantinha;

  constructor(private plantaService: PlantinhaService, private plantinha: FormBuilder) { }

  ngOnInit(): void {
  }

  plantaForm = this.plantinha.group({
    tipo: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    especie: ['', [Validators.required]],
    especificacao: '',
    nomePopular: '',
    imagem: '',
    detalhe: ''
  });


  adicionar(planta: Plantinha) {
    if (this.plantaForm.value.especie !== '') {
      this.planta.tipo = this.plantaForm.value.tipo!;
      this.planta.genero = this.plantaForm.value.genero!;
      this.planta.especie = this.plantaForm.value.especie!;
      this.planta.especificacao = this.plantaForm.value.especificacao ? this.plantaForm.value.especificacao : '';
      this.planta.nomePopular = this.plantaForm.value.nomePopular ? this.plantaForm.value.nomePopular : 'Não tem :(';
      this.planta.imagem = this.plantaForm.value.imagem ? this.plantaForm.value.imagem : '';
      this.planta.detalhe = this.plantaForm.value.detalhe ? this.plantaForm.value.detalhe : '';

      this.plantaService.adicionarPlanta(planta).subscribe(plantaNova => {
        this.planta = plantaNova;
        this.plantaForm.reset(); 
      }
      )
    }
    alert("Prontinho!")
  }


  limpar() {
    this.plantaForm.value.tipo = '';
    this.plantaForm.value.genero = '';
    this.plantaForm.value.especie = '';
    this.plantaForm.value.especificacao = '';
    this.plantaForm.value.nomePopular = '';
    this.plantaForm.value.imagem = '';
    this.plantaForm.value.detalhe = ''
  }
}

