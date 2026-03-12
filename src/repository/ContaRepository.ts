import { Conta } from "../model/conta";

export interface contaRepository {

    procurarPorNumero(numero: number): void;
    listarTodos():void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    sacar(numero:number, valor:number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem:number, numeroDestino:number, valor:number):void;
    
}