const inputPesquisa = document.querySelector("#movieSearchInput");
const containerFilmes = document.querySelector("#moviesContainer");

async function buscarFilmes(nomeFilme) {
    const resposta = await fetch(`http://www.omdbapi.com/?apikey=13bcd1c9&s=${nomeFilme}`);
    const dados = await resposta.json();
    
    return dados;
} 

function mostrarFilmes(filmes) {
    containerFilmes.innerHTML = "";

    filmes.forEach(filme => {
        const poster = filme.Poster !== "N/A" ? filme.Poster : "../assets/img/filmeSneaks.png";

        containerFilmes.innerHTML += `
            <article class="movieCard">
                <img src="${poster}" alt="Poster do filme ${filme.Title}">
                <div class="movieCardContent">
                    <h2 class="movieCardTitle">${filme.Title}</h2>
                    <p class="movieCardYear">${filme.Year}</p>
                </div>
            </article>
        `;
    });
}

function mostrarNenhumFilme() {
    containerFilmes.innerHTML = `
        <p class="noMovies">Nenhum filme foi encontrado.</p>
    `;
}

inputPesquisa.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        const nomeFilme = inputPesquisa.value.trim();

        if (nomeFilme === "") {
            containerFilmes.innerHTML = "";
            return;
        }

        const dados = await buscarFilmes(nomeFilme);

        if (dados.Response === "True") {
            mostrarFilmes(dados.Search);
        } else {
            mostrarNenhumFilme();
        }
    }
});