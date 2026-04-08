/*1. Cálculo de Desconto
Objetivo: Praticar tipagem de parâmetros e lógica condicional.
Crie uma função que receba o valor (number) e a categoria (string).
Se a categoria for "ELETRONICOS", aplique 10% de desconto.
Se for "VESTUARIO", aplique 5%.
Retorne o valor final e exiba no console
 */


export const calculoDesconto = (valor: number, categoria: string): number =>{
    if (categoria === "ELETRONICOS"){
        return valor * 0.9;
    }
    if (categoria === "VESTUARIO"){
        return valor * 0.95;
    }
    return -1
};