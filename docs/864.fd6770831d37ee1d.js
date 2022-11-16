"use strict";(self.webpackChunkmagic_computers=self.webpackChunkmagic_computers||[]).push([[864],{8864:(T,l,a)=>{a.r(l),a.d(l,{ContatoModule:()=>O});var n=a(2382),m=a(9808),c=a(5519);const s=[{nome:"nome",type:"text",errorRequired:"Campo obrigat\xf3rio",errorType:"Nome precisa ter no m\xednimo 4 caracteres.",placeholder:"Nome"},{nome:"email",type:"email",errorRequired:"Campo obrigat\xf3rio",errorType:"Email inv\xe1lido.",placeholder:"E-mail"},{nome:"telefone",type:"tel",errorRequired:"Campo obrigat\xf3rio",errorType:"Telefone inv\xe1lido.",placeholder:"Telefone"},{nome:"mensagem",type:"textarea",errorRequired:"Campo obrigat\xf3rio",errorType:"Campo precisa ter no m\xednimo 10 caracteres.",placeholder:"Mensagem"},{nome:"assunto",type:"text",errorRequired:"Campo obrigat\xf3rio",errorType:"Campo precisa ter no m\xednimo 10 caracteres.",placeholder:"Assunto"}];var o=a(4893);function p(e,i){if(1&e&&(o.TgZ(0,"small"),o._uU(1),o.qZA()),2&e){const t=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t.errorType," ")}}function d(e,i){if(1&e&&(o.TgZ(0,"small"),o._uU(1),o.qZA()),2&e){const t=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t.errorRequired," ")}}function u(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,p,2,1,"small",8),o.YNc(2,d,2,1,"small",8),o.qZA()),2&e){const t=o.oxw().$implicit,r=o.oxw();o.xp6(1),o.Q6J("ngIf",r.FORMCONTATO.controls[t.nome].hasError("email"===t.nome?"email":"minLength")),o.xp6(1),o.Q6J("ngIf",r.FORMCONTATO.controls[t.nome].hasError("required"))}}function C(e,i){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"input",7),o.YNc(2,u,3,2,"div",8),o.qZA()),2&e){const t=i.$implicit,r=o.oxw();o.xp6(1),o.ekj("valid",r.FORMCONTATO.controls[t.nome].valid)("invalid",r.FORMCONTATO.controls[t.nome].invalid&&(r.FORMCONTATO.controls[t.nome].touched||r.FORMCONTATO.controls[t.nome].dirty)),o.s9C("type",t.type),o.s9C("placeholder",t.placeholder),o.s9C("name",t.nome),o.s9C("formControlName",t.nome),o.xp6(1),o.Q6J("ngIf",r.FORMCONTATO.controls[t.nome].invalid&&(r.FORMCONTATO.controls[t.nome].touched||r.FORMCONTATO.controls[t.nome].dirty))}}const g=[{path:"",component:(()=>{class e{constructor(t){this.fb=t,this.contatoForm=s,this.FORMCONTATO=this.fb.group({nome:["",[n.kI.required,n.kI.minLength(4)]],email:["",[n.kI.required,n.kI.email]],telefone:["",[n.kI.required,n.kI.minLength(11)]],mensagem:["",[n.kI.required,n.kI.minLength(10)]],assunto:["",[n.kI.required,n.kI.minLength(10)]]})}ngOnInit(){}enviarFormulario(){alert("Formul\xe1rio enviado com sucesso!"),this.FORMCONTATO.reset()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(n.qu))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-contato"]],decls:9,vars:3,consts:[[1,"contato-title"],[1,"contato__form"],[3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],[1,"contato__btn",3,"disabled"],[1,"contato__address"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113143.48993305836!2d-48.63072923927143!3d-27.601773422617555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738248efc5a5b%3A0x25bd9c99b58228da!2sCentro%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1660931059959!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[3,"type","placeholder","name","formControlName"],[4,"ngIf"]],template:function(t,r){1&t&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return r.enviarFormulario()}),o.YNc(4,C,3,9,"div",3),o.TgZ(5,"button",4),o._uU(6,"Enviar"),o.qZA()(),o.TgZ(7,"address",5),o._UZ(8,"iframe",6),o.qZA()()),2&t&&(o.xp6(3),o.Q6J("formGroup",r.FORMCONTATO),o.xp6(1),o.Q6J("ngForOf",r.contatoForm),o.xp6(1),o.Q6J("disabled",!r.FORMCONTATO.valid))},directives:[n._Y,n.JL,n.sg,m.sg,n.Fj,n.JJ,n.u,m.O5],styles:[".contato-title[_ngcontent-%COMP%]{font-size:30px;color:var(--primary);text-align:center}.contato__form[_ngcontent-%COMP%]{display:flex;width:100%;padding:20px;justify-content:center}.contato__address[_ngcontent-%COMP%]{width:400px;height:300px;margin-left:1rem}iframe[_ngcontent-%COMP%]{width:100%;height:100%}.contato__btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:18px;background-color:var(--primary);color:#fff;border-radius:5px;outline:none;box-shadow:0 0 5px #00000080;transition:.2s ease-in-out all}.contato__btn[_ngcontent-%COMP%]:hover{filter:brightness(1.3);cursor:pointer}.valid[_ngcontent-%COMP%]{border:1px solid green}.invalid[_ngcontent-%COMP%]{border:1px solid red}input[_ngcontent-%COMP%]:focus{outline:0px}input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:10px;margin-bottom:5px;width:20rem}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.ez,f,n.UX]]}),e})()}}]);