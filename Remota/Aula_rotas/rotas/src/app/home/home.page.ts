import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import Pessoa from '../interfaces/pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public dados: Pessoa[];
  private servico: DadosService;

  constructor(dadosService: DadosService) {

    this.servico = dadosService;
    this.dados = this.servico.buscarDados();
  }

}
