
VulNummerIn = prompt("Vul een nummer een in");
VulNummerIn2 = prompt("vul nog een nummer in");

let  bereken = function () {
  let keer= ((parseInt(VulNummerIn) * parseInt (VulNummerIn2)));
  return keer;
}
   

console.log(bereken());











//Vraag aan de gebruiker om twee keer een getal in te voeren d.m.v. prompts.
//Sla de opgegeven getallen op in variabelen.
//Schrijf een functie die de twee opgegeven getallen vermenigvuldigt en teruggeeft.
//Roep de vermenigvuldig-functie aan en toon de uitkomst in de console.