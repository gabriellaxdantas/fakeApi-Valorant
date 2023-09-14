import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAgente } from '../../models/agentes/agentes.models';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() pesquisaRealizada = new EventEmitter<string>();
  termoPesquisa: string = '';

  @Input() agentesValorant: IAgente[] = [];
  constructor() { }
  pesquisarAgente(event: Event) {
    event.preventDefault();
    this.pesquisaRealizada.emit(this.termoPesquisa);
  }
  ngOnInit(): void {
  }

}
