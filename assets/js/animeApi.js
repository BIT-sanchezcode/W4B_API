// URL Api
const API = "https://api.jikan.moe/v3/search/anime?q=";
const anime = document.getElementById("anime");
let animes = document.getElementById("animes");

// Obtener los resultados de la API
const getData = (api) => {
  api = api + animes.value.toLowerCase();
  animes.value = "";
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// Dibujar cards de personajes
const fillData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<img src="${pj.image_url}" class="card-img-top" alt="${pj.title}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.title}</h5>`;
    html += `<p class="card-text">Episodes: ${pj.episodes}</p>`;
    html += `<p class="card-text"> <a  href="${pj.url}" target="_blank">Mas info aqui </a></p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataCharacters").innerHTML = html;
};

// Sejecuta la API
anime.onclick = function () {
  getData(API);
};
