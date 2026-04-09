/*3. Agrupador de Estoque
Objetivo: Manipulação de objetos e acumuladores (reduce).
Crie um array de produtos, onde cada produto tem categoria (string) e quantidade (number).
Escreva uma função que transforme esse array em um único objeto, onde as chaves são as categorias e o valor é a soma total das quantidades daquela categoria.
 */

interface Produto {
  categoria: string;
  quantidade: number;
}

export const produtos: Produto[] = [
  { categoria: "eletronicos", quantidade: 10 },
  { categoria: "roupas", quantidade: 5 },
  { categoria: "eletronicos", quantidade: 7 },
  { categoria: "alimentos", quantidade: 20 },
  { categoria: "roupas", quantidade: 3 }
];

export const agruparEstoque = (lista: Produto[]) => {
  return lista.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = 0;
    }

    acc[produto.categoria] += produto.quantidade;

    return acc;
  }, {} as Record<string, number>);
};

//Versão corrigida:

export const agruparPorcategoria = (itens:Produto[]):Record<string, number> =>{
  const agrupados = itens.reduce((acc,itemAtual)=>{
    const cat = itemAtual.categoria
    acc[cat] = (acc[cat] || 0) + itemAtual.quantidade;
    return acc;
  }, {});
  return agrupados
}