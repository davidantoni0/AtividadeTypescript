/*3. Agrupador de Estoque
Objetivo: Manipulação de objetos e acumuladores (reduce).
Crie um array de produtos, onde cada produto tem categoria (string) e quantidade (number).
Escreva uma função que transforme esse array em um único objeto, onde as chaves são as categorias e o valor é a soma total das quantidades daquela categoria.
 */

interface Produto {
    categoria: string;
    quantidade: number;
  }

const produtos: Produto[] = [
    { categoria: "eletronicos", quantidade: 10 },
    { categoria: "roupas", quantidade: 5 },
    { categoria: "eletronicos", quantidade: 7 },
    { categoria: "alimentos", quantidade: 20 },
    { categoria: "roupas", quantidade: 3 }
];

export const agruparEstoque()