topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];
let teller = 0;


//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}



function kiesFilm(){    
    if(teller<3){
        var antwoord = prompt("Kies een nummer, welke film moet op nummer " + parseInt(teller+1) + " staan?");
        document.querySelector(".eigen-film" + teller).innerHTML = topFilms[antwoord-1];
        document.querySelector(".kiesfilm-button").innerHTML = "Kies film voor plek "+parseInt(teller+1);
        teller++;
        console.log();
    }
    
}
        

 
 
           
    
    
