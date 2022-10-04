import { Injectable } from '@angular/core';

import Pessoa from './interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public pessoas: Pessoa[] = [

    {id: 1, nome:'João Pedro', telefone:'(11) 33-2335', detalhes: 'Celular'},
    {id: 2, nome:'Pedro', telefone:'(11) 1425-114', detalhes: 'Casa'},
    {id: 3, nome:'João', telefone:'(11) 65363-532', detalhes: 'Whatsapp'},
    {id: 4, nome:'Carlos', telefone:'(11) 412-5423', detalhes: 'Trabalho'}

  ]

  constructor() { }

  buscarDados(): Pessoa[] {
    return this.pessoas;
  }
}
