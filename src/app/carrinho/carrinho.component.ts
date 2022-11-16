import {  IProdutoCarrinho } from './../produtos/produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho:IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public CarrinhoService: CarrinhoService,
    public Route : Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.getItems();
    this.calculaTotal();
  }

  removerProdutoCarrinho(id: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== id);
    this.CarrinhoService.removerProdutoCarrinho(id);
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  comprar(){
    alert('Compra efetuada com sucesso!');
    this.CarrinhoService.limparCarrinho();
    this.Route.navigate(['/produtos']);
  }
}
