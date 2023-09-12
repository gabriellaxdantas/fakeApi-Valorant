import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAgente } from '../models/agentes/agentes.models';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  private _httpClient:HttpClient;
  private url = environment.api;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
   }

   getAgente(){
    return this._httpClient.get<IAgente[]>(this.url + '/agentes')
   }
}
