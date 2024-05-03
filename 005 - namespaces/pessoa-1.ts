/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa1 {
  export namespace Pessoa1 {
    const data = 1 + 1;
    export const nome = "Maria";
    export const calc = () => {
      return data;
    };
  }
  
  export namespace Joao {
    const data = 1 + 1;
    export const nome = "João";
    export const calc = () => {
      return data;
    };
  }
  }

