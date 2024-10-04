/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   let pronoun = ["good", "rainbow"];
//   let adj = ["of", "six"];
//   let noun = ["war", "repes"];
//   let domain = [".ar", ".es"];

//   for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < adj.length; j++) {
//       for (let k = 0; k < noun.length; k++) {
//         for (let l = 0; l < domain.length; l++) {
//           if (noun[k].slice(-2) === domain[l].slice(1)) {
//             console.log(
//               (pronoun[i] + adj[j] + noun[k] + domain[l]).replace(
//                 noun[k].slice(-2) + domain[l],
//                 domain[l]
//               )
//             );
//           } else {
//             console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
//           }
//         }
//       }
//     }
//   }
// };

let pronoun = ["good", "rainbow"];
let adj = ["of", "six"];
let noun = ["war", "repes", "tacom"];
let domain = [".net", ".es", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < domain.length; l++) {
        let strDomainName = pronoun[i] + adj[j] + noun[k] + domain[l];
        if (noun[k].slice(-2) === domain[l].slice(1)) {
          console.log(
            strDomainName.replace(noun[k].slice(-2) + domain[l], domain[l])
          );
        } else if (noun[k].slice(-3) === domain[l].slice(1)) {
          console.log(
            strDomainName.replace(noun[k].slice(-3) + domain[l], domain[l])
          );
        } else {
          console.log(strDomainName);
        }
      }
    }
  }
}
