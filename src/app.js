document.getElementById("generateBtn").addEventListener("click", function() {
  let pronoun = ["good", "rainbow"];
  let adj = ["of", "six"];
  let noun = ["war", "repes", "tacom"];
  let domain = [".net", ".es", ".com"];

  const CONTAINERDOMAINNAME = document.getElementById("domainName");
  CONTAINERDOMAINNAME.innerHTML = ""; // Limpiar antes de generar nuevos

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let strDomainName = pronoun[i] + adj[j] + noun[k] + domain[l];

          if (noun[k].slice(-2) === domain[l].slice(1)) {
            CONTAINERDOMAINNAME.innerHTML +=
              "<p>" +
              strDomainName.replace(noun[k].slice(-2) + domain[l], domain[l]) +
              "</p>";
          } else if (noun[k].slice(-3) === domain[l].slice(1)) {
            CONTAINERDOMAINNAME.innerHTML +=
              "<p>" +
              strDomainName.replace(noun[k].slice(-3) + domain[l], domain[l]) +
              "</p>";
          } else {
            CONTAINERDOMAINNAME.innerHTML += "<p>" + strDomainName + "</p>";
          }
        }
      }
    }
  }
});
