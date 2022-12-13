import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantinha } from 'src/app/interface/plantinha.interface';
import { PlantinhaService } from 'src/app/service/plantinha.service';

@Component({
  selector: 'app-paginas-generos',
  templateUrl: './paginas-generos.component.html',
  styleUrls: ['./paginas-generos.component.scss']
})
export class PaginasGenerosComponent implements OnInit {

  generos: Plantinha[] = []
  generoListado: String = ''

  constructor(private route: ActivatedRoute, private service: PlantinhaService, private router: Router) { }

  ngOnInit(): void {
    const genero = String(this.route.snapshot.paramMap.get('genero'));
    this.generoListado = genero;
    this.buscarGenero(genero);
  }

  buscarGenero(genero: string) {
    this.service.buscarPorGenero(genero).subscribe(genero => {
      this.generos = genero
    })
  }

  adicionarPorGenero() {
    return this.router.navigate(['/add-generos', this.generoListado])
  }
}
