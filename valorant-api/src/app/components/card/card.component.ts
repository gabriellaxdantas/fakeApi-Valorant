import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAgente } from '../../models/agentes/agentes.models';
import {ImgRoles} from '../../models/agentes/agentesRole.models';
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


  imgRoles: ImgRoles = {
    Controlador: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
    Duelista: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    Sentinela: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png",
    Iniciador: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
