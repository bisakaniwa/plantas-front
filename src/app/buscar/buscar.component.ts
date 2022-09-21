import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  busca: string = ''

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  buscarPlanta() {
    return this.router.navigate(['/resultado', this.busca])
  } 
  
}
