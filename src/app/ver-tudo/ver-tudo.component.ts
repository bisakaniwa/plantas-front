import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantinha } from '../interface/plantinha.interface';
import { PlantinhaService } from '../service/plantinha.service'

@Component({
  selector: 'app-ver-tudo',
  templateUrl: './ver-tudo.component.html',
  styleUrls: ['./ver-tudo.component.scss']
})
export class VerTudoComponent implements OnInit {

  plantas: Plantinha[] = [];
  plants: Observable<Plantinha[]>;

  waiting: boolean = true;

  constructor(
    private service: PlantinhaService,) {
      this.plants = this.service.buscarTudo();
     }

  ngOnInit(): void {
    this.verTudo();
  }

  verTudo() {
    this.service.buscarTudo().subscribe(todas => {
      this.plantas = todas;
      this.waiting = false;
      console.log(todas)
    })
  }

}
