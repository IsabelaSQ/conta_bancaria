import { Conta } from "../model/conta";
import { contaRepository } from "../repository/ContaRepository.js";
import { colors } from "../util/Colors";

export class contaController implements contaRepository{
    
    listarTodos(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nConta numero: " + this.numero + " foi criada com sucesso!", colors.reset); // 
    }

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    public gerarNumero(): number{
        return ++ this.numero
    }


}