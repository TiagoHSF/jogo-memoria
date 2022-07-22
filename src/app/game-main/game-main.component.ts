import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss'],
})
export class GameMainComponent implements OnInit {
  public itensFirst: number[] = [];
  public itensSecond: number[] = [];
  public itensThird: number[] = [];
  public itensFourth: number[] = [];

  public primeiroSelecionado: any;
  public segundoSelecionado: any;

  constructor() {}

  ngOnInit(): void {
    const starterGame = [1, 2, 3, 4];
    this.itensFirst = starterGame;
  }

  addMoreCards() {
    if (this.itensFirst.length <= 4) {
      const lastPosition = this.itensFirst.length;
      this.itensFirst.push(lastPosition + 1);
      this.itensFirst.push(lastPosition + 2);
      return;
    }
    if (this.itensSecond.length < 6) {
      const lastPosition = this.itensSecond.length;
      this.itensSecond.push(lastPosition + 1);
      this.itensSecond.push(lastPosition + 2);
      return;
    }
    if (this.itensThird.length < 6) {
      const lastPosition = this.itensThird.length;
      this.itensThird.push(lastPosition + 1);
      this.itensThird.push(lastPosition + 2);
      return;
    }
  }

  removeCards() {
    if (this.itensThird.length != 0) {
      const lastPosition = this.itensThird.length;
      this.itensThird.splice(lastPosition - 1);
      this.itensThird.splice(lastPosition - 2);
      return;
    }
    if (this.itensSecond.length != 0) {
      const lastPosition = this.itensSecond.length;
      this.itensSecond.splice(lastPosition - 1);
      this.itensSecond.splice(lastPosition - 2);
      return;
    }
    if (this.itensFirst.length > 4) {
      const lastPosition = this.itensFirst.length;
      this.itensFirst.splice(lastPosition - 1);
      this.itensFirst.splice(lastPosition - 2);
      return;
    }
  }

  selecionado(event: number) {
    if (
      this.primeiroSelecionado === undefined ||
      this.primeiroSelecionado === null
    ) {
      this.primeiroSelecionado = event;
      return;
    }
    if (
      this.segundoSelecionado === undefined ||
      this.segundoSelecionado === null
    ) {
      this.segundoSelecionado = event;
      if (this.primeiroSelecionado === this.segundoSelecionado) {
        console.log('FEZ PAR');
        this.primeiroSelecionado = null;
        this.segundoSelecionado = null;
      } else {
        console.log('NÃO FEZ PAR');
        this.primeiroSelecionado = null;
        this.segundoSelecionado = null;
      }
    }
  }
}
