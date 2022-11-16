import { IProdutoCarrinho } from './produtos/produtos';
import { Injectable} from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {
  items: IProdutoCarrinho[] = [];

  constructor(
  ) { }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('carrinho') || "[]");
   return this.items;
    
  }

  addItem(item: IProdutoCarrinho) {
    this.items = this.getItems();
    const itemExistente = this.items.find(produto => produto.id === item.id);
    itemExistente ? itemExistente.quantidade += item.quantidade : this.items.push(item);
    localStorage.setItem('carrinho', JSON.stringify(this.items));

  }

  limparCarrinho() {
    this.items = [];
    localStorage.clear();
  }
  removerProdutoCarrinho(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(this.items));
  }
}
