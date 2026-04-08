/*5. Sistema de Pedidos com Enum
Objetivo: Padronização de estados do sistema.
Crie um enum Status com os valores: Pendente, Enviado, Entregue.
Crie uma função que receba esse Enum como parâmetro e retorne uma mensagem personalizada para cada status (ex: "Seu pedido já saiu para entrega!").
 */

export enum Status{Pendente, Enviado, Entregue}


export const mensagemStatus = (status: Status): string =>{
    switch (status) {
        case Status.Pendente:
            return "O seu pedido está pendente."

        case Status.Enviado:
            return "O seu pedido foi enviado."

        case Status.Entregue:
            return "O seu pedido está entregue."

        default:
            return "Sla"
    }
}