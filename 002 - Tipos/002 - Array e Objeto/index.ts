let array1: [string, string, number, boolean] = ["Thiago Martins", "Teste", 123,false]
let array2: Array<string | number | boolean> =  [
     true, 
     "Thiago",
      123,
       "Martins"
    ];
    console.log(array1)
    console.log(array2)

    let  obj1: {nome:string , sobrenome: string, idade:number, deuBom: boolean} = {
        nome: "Thiago", 
        sobrenome: "Martins",
        idade: 25,
        deuBom: true
    };

    console.log(obj1)

    let obj2: Array< {nome:string , sobrenome: string, idade:number, deuBom: boolean}> = [
        {
            nome: "Thiago1", 
            sobrenome: "Martins",
            idade: 25,
            deuBom: true
        },
        {
            nome: "Thiago2", 
            sobrenome: "Martins",
            idade: 25,
            deuBom: true
        }

    ]
console.log(obj2)
