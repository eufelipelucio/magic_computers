import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: number) {
    return this.produtos.find(produto => produto.id === id);
  }
}
