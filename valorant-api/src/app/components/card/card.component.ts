import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAgente } from '../../models/agentes/agentes.models';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() agentesValorant: IAgente[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
