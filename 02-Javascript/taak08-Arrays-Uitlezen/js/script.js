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

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];
document.querySelector(".film6-ranking").innerHTML = 6;
document.querySelector(".film6-naam").innerHTML = topFilms[5];
document.querySelector(".film7-ranking").innerHTML = 7;
document.querySelector(".film7-naam").innerHTML = topFilms[6];
document.querySelector(".film8-ranking").innerHTML = 8;
document.querySelector(".film8-naam").innerHTML = topFilms[7];
document.querySelector(".film9-ranking").innerHTML = 9;
document.querySelector(".film9-naam").innerHTML = topFilms[8];
document.querySelector(".film10-ranking").innerHTML = 10;
document.querySelector(".film10-naam").innerHTML = topFilms[9];



function kiesFavorieteFilm(){
var antwoord = prompt("Wat is je favoriete film?");
if (antwoord==1){
    document.querySelector(".film1-naam").style.backgroundColor = "blue";
    document.querySelector(".film1-naam").style.color = "white";
    console.log(topFilms[0]);
    
    }else if (antwoord==2){
        document.querySelector(".film2-naam").style.backgroundColor = "blue";
        document.querySelector(".film2-naam").style.color = "white";
         console.log(topFilms[1]);
         

        }else if (antwoord==3){
            document.querySelector(".film3-naam").style.backgroundColor = "blue";
            document.querySelector(".film3-naam").style.color = "white";
            console.log(topFilms[2]);

            }else if (antwoord==4){
                document.querySelector(".film4-naam").style.backgroundColor = "blue";
                document.querySelector(".film4-naam").style.color = "white";
                console.log(topFilms[3]);

                }else if (antwoord==5){
                    document.querySelector(".film5-naam").style.backgroundColor = "blue";
                    document.querySelector(".film5-naam").style.color = "white";
                    console.log(topFilms[4]);

                 }else if (antwoord==6){
                      document.querySelector(".film6-naam").style.backgroundColor = "blue";
                        document.querySelector(".film6-naam").style.color = "white";
                    console.log(topFilms[5]);
    
                    }else if (antwoord==7){
                         document.querySelector(".film7-naam").style.backgroundColor = "blue";
                         document.querySelector(".film7-naam").style.color = "white";
                        console.log(topFilms[6]);

                        }else if (antwoord==8){
                             document.querySelector(".film8-naam").style.backgroundColor = "blue";
                            document.querySelector(".film8-naam").style.color = "white";
                            console.log(topFilms[7]);

                            }else if (antwoord==9){
                                 document.querySelector(".film9-naam").style.backgroundColor = "blue";
                                 document.querySelector(".film9-naam").style.color = "white";
                                console.log(topFilms[8]);

                                }else if (antwoord==10){
                                     document.querySelector(".film10-naam").style.backgroundColor = "blue";
                                     document.querySelector(".film10-naam").style.color = "white";
                                    console.log(topFilms[9]);
                                }
                                    else{
                                        alert("Dit nummer staat niet in de lijst, kies een nummer in de lijst.")
                                    }
}

