import { Component, OnInit } from '@angular/core';
import { Plantinha } from './interface/plantinha.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  plantas: Plantinha[] = []
  aberto: boolean = false

  constructor() {}

  ngOnInit(): void { }

  title = 'plantinhas';
}
