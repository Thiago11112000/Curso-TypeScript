const fn = (nome: string, idade?:number) => {
    if(!idade){
        return  `nome: ${nome}, idade sem valor definido`;
    }
return  `nome: ${nome}, idade ${idade}`;
};

console.log(fn("Thiago", 23));
console.log(fn("Thiago"));


const pessoa: {nome: string, idade?: number } = {nome: "Thiago", idade: 23}

console.log(pessoa)