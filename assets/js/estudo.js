// Dia 2
const listaFilmes = [
    {
        titulo: "Interestelar",
        nota: 8.7,
        ano: 2014,
        genero: "Ficção Científica"
    },
    {
        titulo: "O Poderoso Chefão",
        nota: 9.2,
        ano: 1972,
        genero: "Crime"
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        nota: 9.0,
        ano: 2008,
        genero: "Ação"
    },
    {
        titulo: "Clube da Luta",
        nota: 8.8,
        ano: 1999,
        genero: "Drama"
    },
    {
        titulo: "Parasita",
        nota: 8.5,
        ano: 2019,
        genero: "Suspense"
    },
    {
        titulo: "Forrest Gump",
        nota: 8.8,
        ano: 1994,
        genero: "Drama"
    },
    {
        titulo: "A Origem",
        nota: 8.8,
        ano: 2010,
        genero: "Ficção Científica"
    },
    {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        nota: 9.0,
        ano: 2003,
        genero: "Fantasia"
    },
    {
        titulo: "Whiplash",
        nota: 8.5,
        ano: 2014,
        genero: "Drama"
    },
    {
        titulo: "Coringa",
        nota: 8.4,
        ano: 2019,
        genero: "Drama"
    },
    {
        titulo: "Top Gun: Maverick",
        nota: 8.2,
        ano: 2022,
        genero: "Ação"
    },
    {
        titulo: "Duna: Parte Dois",
        nota: 8.5,
        ano: 2024,
        genero: "Ficção Científica"
    },
    {
        titulo: "Matrix",
        nota: 8.7,
        ano: 1999,
        genero: "Ficcao Cientifica"
    },
    {
        titulo: "Gladiador",
        nota: 8.5,
        ano: 2000,
        genero: "Acao"
    },
    {
        titulo: "Titanic",
        nota: 7.9,
        ano: 1997,
        genero: "Romance"
    },
    {
        titulo: "Cidade de Deus",
        nota: 8.6,
        ano: 2002,
        genero: "Drama"
    },
    {
        titulo: "Toy Story",
        nota: 8.3,
        ano: 1995,
        genero: "Animacao"
    },
    {
        titulo: "Homem-Aranha no Aranhaverso",
        nota: 8.4,
        ano: 2018,
        genero: "Animacao"
    },
    {
        titulo: "Pantera Negra",
        nota: 7.3,
        ano: 2018,
        genero: "Acao"
    },
    {
        titulo: "Os Incriveis",
        nota: 8.0,
        ano: 2004,
        genero: "Animacao"
    }
];

// Dia 3
// if (listaFilmes[1].nota < 6) {
//     console.log("o filme é regular");
// } else if (listaFilmes[1].nota < 8) {
//     console.log("o filme é bom");
// } else {
//     console.log("O filme é excelente");
// }

// Dia 4
for (filme of listaFilmes) {
    console.log(filme.titulo);
}

// Dia 5
function calcularMedia() {
    let soma = 0;
    let totalFilmes = 0;
    for (filme of listaFilmes) {
        soma += filme.nota;
        totalFilmes++;
    }
    let media = soma/totalFilmes;
    return media;
}
console.log(`A média de nota dos filmes é igual a ${calcularMedia().toFixed(2)}`);

//arrow function
// const calcularMedia = () => {
//     let soma = 0;
//     let totalFilmes = 0;
//     for (filme of listaFilmes) {
//         soma += filme.nota;
//         totalFilmes++;
//     }
//     let media = soma/totalFilmes;
//     return media;
// }

