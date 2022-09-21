import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantinha } from '../plantinha.interface';
import { PlantinhaService } from '../plantinha.service'

@Component({
  selector: 'app-ver-tudo',
  templateUrl: './ver-tudo.component.html',
  styleUrls: ['./ver-tudo.component.scss']
})
export class VerTudoComponent implements OnInit {

  plantas: Plantinha[] = [];

  constructor(
    private service: PlantinhaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.verTudo();
  }

  verTudo() {
    this.service.buscarTudo().subscribe(todas => {
      this.plantas = todas;
      console.log(todas)
    })
  }

}
