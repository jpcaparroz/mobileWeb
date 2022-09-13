import { Component } from '@angular/core';

interface IProduto {
  nome: string;
  preco: number;
}

// interface ITarefa {
//   nome: string;
//   status: boolean;
// }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nota = 7;

  public produtos: IProduto[] = [
    { nome: 'Play4', preco: 2000},
    { nome: 'Xbox', preco: 1500}
  ];


  // lista de tarefas
  // public lista: ITarefa[] = [];

  // public input = '';

  // public statusConcluida = 0;

  // public statusTotal = 0;

  // inserir(tarefa: string): void{
  //   if
  // }

}
