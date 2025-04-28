class Cpf{
    constructor(cpf){
        this.cpf = cpf;
    }

    calcularPrimeiroDigito(cpf){
        let contador = 10;
        let soma = 0;
        for(let i=0; i<9; i++){
            let numero = parseInt(cpf[i]);
            soma += numero * contador;
            contador--;
        }

        let primeiroDigito = soma % 11;
        if (primeiroDigito < 2){
            primeiroDigito = 0;
        } else {
        primeiroDigito = 11 - primeiroDigito;  // Caso contrário, calcula 11 - (soma % 11)
    }

        var semiCpf = cpf + primeiroDigito.toString();

        return semiCpf;
    }

    calcularCpf(){
        let cpf = this.calcularPrimeiroDigito(this.cpf);
        let contador = 11;

        console.log(cpf);
    }
}

cpf = new Cpf("102663849");
cpf.calcularCpf();