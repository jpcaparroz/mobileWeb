import { DadosService } from './../dados.service';
import { Component, OnInit } from '@angular/core';

import Pessoa from '../interfaces/pessoa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public rota: ActivatedRoute;
  public id: number;
  public dados: Pessoa[];
  public pessoa: Pessoa;
  public servico: DadosService;


  constructor(route: ActivatedRoute, dadosServico: DadosService) { 

    this.rota = route;
    this.servico = dadosServico;
    this.dados = this.servico.buscarDados();
  }

  ngOnInit() {

    this.id = Number(this.rota.snapshot.paramMap.get('id'));
    this.pessoa = this.dados.find(p=> p.id === this.id);
  }

}
