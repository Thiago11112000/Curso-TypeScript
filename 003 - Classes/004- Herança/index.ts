/*
  public -      Pode ser acessado tanto pela mesma classe, 
                classes filhas e outras classes.
  ##############################################################################
  protected -   Pode ser acessado pela mesma classe e classes filhas, 
                não pode ser acessado por outras classes.
  ##############################################################################
  private -     Pode ser acessada somente pela própria classe.
*/



class Pessoa {
  protected nome: string = "" ;
  protected idade: number = 0;
   constructor(nome: string, idade:number){
    this.nome = nome;
    this.idade = idade;
   }
  protected comer(comida:string){
     return  `o ${this.nome} comeu ${comida}`
   }
   protected fezAniversario(){
     return `O ${this.nome} fez tantos anos ${++ this.idade }`
    }
   }
   class Dener extends Pessoa{
    private profissao: string = 'Programador'
      constructor(){
        super("Dener",31)
      }
      public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}`
      }
   }
   const dener = new Dener()
   console.log(dener.getProfissao())


  //  class Maria extends Pessoa{
  //   constructor(){
  //     super("Maria",55)
  //   }
  //  }
  //  const maria = new Maria()
 



 







