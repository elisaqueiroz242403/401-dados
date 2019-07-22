// let nomeCapivara = "boneca";
// let contador = 0;



// while(contador<24){
//     console.log(nomeCapivara);
//     contador ++;
// }
// for(let contador=0; contador<24; contador ++){
//     console.log(contador);
//     console.log("esquecido");
// }



// for(let baba of listaDeChamada){
//     console.log(baba);
// }let listaDeChamada= ["Cobra", "Macaco", "Mickey", "Douglas", "Viado", "Rino", "Boboletinha", "Bozo naro", "Miauzinho"];

// for(let contador = 0; contador<listaDeChamada.length; contador++){
//     console.log(listaDeChamada[contador]);
// }

// for(let zoo in listaDeChamada){
//     console.log(zoo;)
// }


let filmes = [{nome: "Rei Leao", classificação: 12, estilo: "animação"},
{nome: "Moana", classificação: 10, estilo: "animação"},
{nome: "A freira", classificação: 27, estilo: "Terror"},
{nome: "O iluminado", classificação: 18, estilo:"Terror"},
]

let nome = prompt("Digite seu nome");
let idade = Number(prompt("Digite sua idade"));

for(let filme of filmes){
    if(idade >= filme.classificação){
        console.log(`${nome}, você pode assistir ${filme.nome}`)
    }

    else{
        console.log(`${nome}, você não pode assistir ${filme.nome}`);
    }
}