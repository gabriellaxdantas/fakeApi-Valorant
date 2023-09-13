import { Component, OnInit } from '@angular/core';
import { IAgente } from '../../models/agentes/agentes.models';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() agentesValorant: IAgente[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
