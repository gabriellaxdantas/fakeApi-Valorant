import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAgente } from '../../models/agentes/agentes.models';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() agentesValorant: IAgente[] = [];
  @Input() agente: IAgente = {} as IAgente;
  constructor() { }

  ngOnInit(): void {
  }

}
