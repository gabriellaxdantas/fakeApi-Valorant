import { Component, OnInit } from '@angular/core';
import { IAgente } from '../../models/agentes/agentes.models';
import { AgentesService } from 'src/app/services/agentes.service';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() agentesValorant: IAgente[] = [];
  @Input () agentesFiltrados: IAgente[] = [];


  constructor(private agenteService: AgentesService){
    this.obterAgentesCadastrados();
  }

  obterAgentesCadastrados() {
    this.agenteService.getAgente().subscribe(agentes => {
      this.agentesValorant = agentes;
      this.agentesFiltrados = [...agentes];
    });
  }

  filtrarAgentes(termoPesquisa: string) {
    if (!termoPesquisa) {
      this.agentesFiltrados = [...this.agentesValorant];
    } else {
      this.agentesFiltrados = this.agentesValorant.filter(agente =>
        agente.name.toLowerCase().includes(termoPesquisa.toLowerCase())
      );
    }
  }

  ngOnInit(): void {
  }

}
