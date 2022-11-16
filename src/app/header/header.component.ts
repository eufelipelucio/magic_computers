import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  mudaPagina(pagina: string) {
    this.router.navigate([pagina]);
  }
}
