export interface Contato {
    nome: string;
    type: string;
    errorRequired: string;
    errorType: string;
    placeholder: string;
}

export const CONTATO = [
    {nome: 'nome', type: 'text', errorRequired: 'Campo obrigatório', errorType: 'Nome precisa ter no mínimo 4 caracteres.', placeholder: 'Nome'},
    {nome: 'email', type: 'email', errorRequired: 'Campo obrigatório', errorType: 'Email inválido.', placeholder: 'E-mail'},
    {nome: 'telefone', type: 'tel', errorRequired: 'Campo obrigatório', errorType: 'Telefone inválido.', placeholder: 'Telefone'},
    {nome: 'mensagem', type: 'textarea', errorRequired: 'Campo obrigatório', errorType: 'Campo precisa ter no mínimo 10 caracteres.', placeholder: 'Mensagem'},
    {nome: 'assunto', type: 'text', errorRequired: 'Campo obrigatório', errorType: 'Campo precisa ter no mínimo 10 caracteres.', placeholder: 'Assunto'}
]