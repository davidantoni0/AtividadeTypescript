/*4. Busca por ID com Generics
Objetivo: Compreender a abstração com Generics.
Crie uma função genérica chamada buscarPorId<T>.
Ela deve receber um array de objetos do tipo T (onde T deve possuir obrigatoriamente a propriedade id) e um id numérico.
A função deve retornar o objeto encontrado ou undefined. */

interface Item {
    id: number ;
    nome: string
}

export const itens: Item[] = [
    {id: 1, nome: "produto1"},
    {id: 2, nome: "produto2"},
    {id: 3, nome: "produto3"},
    {id: 4, nome: "produto4"},
    {id: 5, nome: "produto5"}
]

export const buscarPorId = <T extends { id: number }>(
    lista: T[],
    id: number
  ): T | undefined => {
    return lista.find(item => item.id === id);
  };

//Versão corrigida: