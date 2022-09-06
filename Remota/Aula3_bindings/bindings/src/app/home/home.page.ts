import { Component } from '@angular/core';

interface Pessoa {

  nome: string,
  idade: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public texto = 'testando interpolação 😁'!

  public pessoa: Pessoa = {
    nome: 'João',
    idade: 22
  }

  public color = 'danger'!

  public value = ''

  public switch = false;

  public valor = 0;

  somar(): void{
    this.valor++;
  }

  subtrair(): void{
    this.valor--;
  }

  resetar(): void{
    this.valor = 0;
  }
}
