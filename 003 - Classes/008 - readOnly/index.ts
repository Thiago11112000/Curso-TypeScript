class Pessoa {
  public readonly nome: string  = "Matheus"
}

let pessoa = new Pessoa();

console.log(pessoa.nome)
//pessoa.nome = "Roberto"; Não podera setar valores, apenas leitura
console.log(pessoa.nome)
