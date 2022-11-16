import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contato, CONTATO } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contatoForm : Contato[] = CONTATO;

  FORMCONTATO = this.fb.group({
    nome: ['',[
      Validators.required,
      Validators.minLength(4),
    ]],
    email: ['',[
      Validators.required,
      Validators.email,
    ]],
    telefone: ['',[
      Validators.required,
      Validators.minLength(11),
    ]],
    mensagem: ['',[
      Validators.required,
      Validators.minLength(10),
    ]],
    assunto: ['',[
      Validators.required,
      Validators.minLength(10),
    ]],
  })


  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("Formulário enviado com sucesso!");
    this.FORMCONTATO.reset();
  }

}
