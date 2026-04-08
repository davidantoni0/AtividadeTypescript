/*2. Filtro de Usuários
Objetivo: Aplicar Interfaces e métodos de array (map).
Crie uma interface User com as propriedades: id (number), nome (string) e email (string).
Crie uma função que receba um array de objetos do tipo User.
A função deve retornar um novo array contendo apenas as strings com os nomes dos usuários.
 */

interface User{
    id: number;
    nome:string;
    email: string;}

export const users: User[] = [
    {id:1, nome:"zé", email:"zé1@gmail.com"},
    {id:2, nome:"da", email:"zé2@gmail.com"},
    {id:3, nome:"manga", email:"zé3@gmail.com"},
    {id:4, nome:"zezim", email:"zé4@gmail.com"},
    {id:5, nome:"daa", email:"zé5@gmail.com"},
    {id:6, nome:"manginha", email:"zé6@gmail.com"}
]

export const nomeUser = (lista: User[]): string[] => {
    return lista.map(user => user.nome);
  };