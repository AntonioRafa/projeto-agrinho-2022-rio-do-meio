const api = './data/sample.json';
let outputHTML = "";

const urlParams = new URLSearchParams(window.location.search);

if(!urlParams.get('id')) {window.location.href = "./noticias.html"}

fetch(api)
  .then(response => 
  {
    return response.json();
  })
  .then(result => 
  {
    outputHTML = "<ul>";
    for(let item in result.menu)
    {
      outputHTML += `<li><a href="${result.menu[item].href}">${result.menu[item].name}</a></li>`;
    }
    outputHTML += "</ul>";
    document.getElementById("main-menu").innerHTML = outputHTML;
    document.getElementById("footer-menu").innerHTML = outputHTML;


    const newspost = result.featurednews.find(e => e.id == urlParams.get('id'));
    outputHTML = 
    `
    <article>
      <h1>${newspost.name}</h1>
      <ul id="fp-infos">
        <li><i class="fa-solid fa-caret-right"></i> ${newspost.category}</li>
        <li><i class="fa-solid fa-at"></i> ${newspost.author} </li>
        <li><i class="fa-solid fa-calendar"></i> ${newspost.date}</li>
      </ul>
      <img id="fp-img" src="${newspost.image}" alt="${newspost.name}" title="${newspost.name}" />
      <div id="fp-text">
        ${newspost.materia}
      </div>
    </article>
    `;
    document.getElementById("featuredpost").innerHTML = outputHTML;
  })
  .catch(error => 
  {
    console.log("Verifique o arquivo data.js " + error);
  })
;