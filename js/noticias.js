const api = './data/sample.json';
let outputHTML = "";

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

    outputHTML = "";
    for(let item in result.featurednews)
    {
      outputHTML += 
      `
      <article class="fn-card">
        <a href="noticia.html?id=${result.featurednews[item].id}"><img src="${result.featurednews[item].cover}" alt="${result.featurednews[item].name}" title="${result.featurednews[item].name}" /></a>
        <div class="fn-description">
          <p class="fnd-category"><i class="fa-solid fa-caret-right"></i> <a href="categoria.html?id=${result.featurednews[item].category_link}">${result.featurednews[item].category}</a> <i class="fa-solid fa-caret-right"></i> ${result.featurednews[item].date}</p>
          <h1 class="fnd-title"><a href="noticia.html?id=${result.featurednews[item].id}">${result.featurednews[item].name}</a></h1>
          <p class="fnd-description">${result.featurednews[item].description}</p>
          <hr />
          <p class="fnd-author">Por: <a href="${result.featurednews[item].author_link}" target="${result.featurednews[item].author_target}">${result.featurednews[item].author}</a></p>
        </div>
      </article>
      `;
    }  
    document.getElementById("featurednews").innerHTML = outputHTML;
  })
  .catch(error => 
  {
    console.log("Verifique o arquivo data.js " + error);
  })
;