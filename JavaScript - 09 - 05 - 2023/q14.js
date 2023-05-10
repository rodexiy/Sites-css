let conta = {
    saldo: 0,
    Titular: "Rom",

    Depositar: function(quantidade){
        this.saldo += quantidade
    },

    Sacar: function(quantidade){
        this.saldo -= quantidade
    },

    VerSaldo: function(){
        return this.saldo
    }
}

console.log(conta.VerSaldo())
conta.Depositar(100)
console.log(conta.VerSaldo())
conta.Sacar(60)
console.log(conta.VerSaldo())