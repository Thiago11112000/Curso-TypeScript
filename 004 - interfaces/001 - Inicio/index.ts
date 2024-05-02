/*
 As interfaces TypeScript definem os contratos em seu código. 
 Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface Ipessoa{
    nome: string,
    idade: number,
    readonly cpf:number,
    enabled(): boolean
}
let pessoa: Ipessoa = {
    nome: "Dener", 
    idade: 31, 
    cpf: 1111111111, 
    enabled: () => {
        return true;
    }
}

class Joao implements Ipessoa{
 nome: string = "João";
 idade: number = 22;

 readonly cpf: number = 111111111

 enabled(): boolean {
    return true
 }
}

 class Maria implements Ipessoa{
    nome: string = "Maria";
    idade: number = 16;
   
    readonly cpf: number = 222222;
   
    enabled(): boolean {
       return true
    }
    
   }
   


   console.log(`Nome: ${new Joao().nome}, Idade: ${new Joao().idade}, CPF: ${new Joao().cpf}, Habilitado: ${new Joao().enabled()}`);
