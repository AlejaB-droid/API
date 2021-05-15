//Variable con la API a consumir
const API = "https://rickandmortyapi.com/api/character";

//Consumir API
const getData = (api) =>{
    return fetch(api)
    .then(
        (response) => response.json())
    .then(
        (json) => {
            dibujarData(json.results),
            paginacion(json.info)
        }
    )
    .catch((error) =>{
        console.log("error: ", error)
    });
};

//Dibujar cards de personajes
const dibujarData = (data) =>{
    let html = "";
    data.forEach(pj => {
        html += '<div class="col-md-4" >'
        html += '<div class="card text-white text-center bg-secondary mb-3" style="width: 18rem;">';
        html += `<img src="${pj.image}" class="card-img-top" alt="Rick">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += `<p class="card-text">${pj.gender}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
    });
    document.getElementById("datosPj").innerHTML = html;
};

//Paginación
const paginacion = (data) =>{
    let html = `<li class="page-item ${
        data.prev ? "" : "disabled"
    }"><a class="page-link" onclick="getData('${
        data.prev
    }')">Prev</<a></li> <li class="page-item ${
        data.next ? "" : "disabled"
    }"><a class="page-link" onclick="getData('${data.next}')">Next</<a></li>`;
    document.getElementById("paginacion").innerHTML = html;
};

//Ejecutar getData
getData(API);