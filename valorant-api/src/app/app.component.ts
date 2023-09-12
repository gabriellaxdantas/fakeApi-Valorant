import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgentesService } from './services/agentes.service';
import { IAgente } from './models/agentes/agentes.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant-api';

  agentesValorant: IAgente[] = []
  constructor(private agenteService:AgentesService){
    this.obterAgentesCadastrados();
  }

  obterAgentesCadastrados (){
    this.agenteService.getAgente().subscribe(agentes => this.agentesValorant = agentes)
  }
}
