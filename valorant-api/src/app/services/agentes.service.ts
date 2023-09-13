import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAgente } from '../models/agentes/agentes.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) {

   }

   getAgente(){
    return this.httpClient.get<IAgente[]>(`${this.url}/agentes`);
   }
}
