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

    outputHTML = `<ul id="team-header"><li>Nome</li><li>Função</li></ul>`;
    for(let item in result.team)
    {
      outputHTML += 
        `
          <ul id="team-content">
            <li>${result.team[item].name}</li>
            <li>${result.team[item].office}</li>
          </ul>
        `;
    }
    outputHTML += `<ul id="team-footer"><li>Nome</li><li>Função</li></ul>`;
    document.getElementById("team").innerHTML = outputHTML;
  })
  .catch(error => 
  {
    console.log("Verifique o arquivo data.js " + error);
  })
;