import { Component, OnInit } from '@angular/core';
import { pergunta } from '../shared/pergunta.model'
import { perguntas } from '../shared/pergunta-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public perguntas: pergunta[] = perguntas
  public resposta: string 

  constructor() {}

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    console.log(this.resposta)
  }

  public verificaResposta(): void{
    console.log("verificarResposta:", this.resposta)
  }

}
