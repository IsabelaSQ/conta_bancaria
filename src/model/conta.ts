export class Conta {
    private _titular: string;
    private _numero: number;
    private _agencia: number;
    private _saldo: number;

    constructor (titular:string, numero:number, agencia:number, saldo:number){
        this._titular = titular;
        this._numero = numero;
        this._agencia = agencia;
        this._saldo = saldo;
    }
    
    public get numero(): number {
    return this._numero;
    }
    public visualizar(): void{
        console.log("Dados da conta: ");
        console.log(`Titular da Conta: ${this._titular}
        Agencia: ${this._agencia}
        Numero da Conta: ${this._numero}
        Saldo: ${this._saldo}`)
    }

    public sacar(valor:number):void{
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
            console.log("Saque realizado com sucesso!");
        }else {
            console.log("Saldo insuficiente!");
        }
    }

    public depositar(valor:number):void{
        this._saldo = this._saldo + valor
        console.log("Deposito realizado com sucesso!");
    }
}

