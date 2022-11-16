import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto : IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService : ProdutosService,
    private route : ActivatedRoute,
    private notificacaoService : NotificacaoService,
    private carrinhoService : CarrinhoService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtosService.getProduto(id);

  }
  
  adicionarAoCarrinho(){
    this.notificacaoService.notificar(`${this.produto?.descricao} Adicionado ao carrinho`);
    const produtoCarrinho: IProdutoCarrinho = {
      quantidade : this.quantidade,
      ...this.produto!
    }
    this.carrinhoService.addItem(produtoCarrinho);
  }

}
