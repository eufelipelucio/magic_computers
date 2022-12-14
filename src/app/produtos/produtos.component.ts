import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { produtos, IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos : IProduto [] | undefined ;

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getProdutos();
  }
  

}
