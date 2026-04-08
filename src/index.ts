import { calculoDesconto } from "./exercicios/atividade1";
import { nomeUser, users } from "./exercicios/atividade2";
import { agruparEstoque, produtos } from "./exercicios/atividade3";
import { buscarPorId, itens } from "./exercicios/atividade4";
import { mensagemStatus, Status } from "./exercicios/atividade5";

console.clear();

console.log("executando exercícios \n");

console.log("Exercício 1:", calculoDesconto(4000, "ELETRONICOS"),"\n")

console.log("Exercício 2:", nomeUser(users),"\n")

console.log("Exercício 3:", agruparEstoque(produtos),"\n")

console.log("Exercício 4:", buscarPorId(itens, 1),"\n")

console.log("Exercício 5:", mensagemStatus(Status.Pendente),"\n")
