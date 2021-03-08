

strNaam = prompt("Hoe heet je?");
boolNaamKlopt = confirm("Heet je echt " + strNaam +"?"); 

if(boolNaamKlopt == true) {   
    alert("Welkom " + strNaam );
}
else{ 
    strNaam = prompt("nog een keer hoe heet je?");
    boolNaamKlopt = confirm("Heet je echt " + strNaam +"?"); 
    if(boolNaamKlopt == true){
        strNaam=alert("welkom " + strNaam);
    }
        else{  
            strNaam = alert("ok, evengoed welkom");


        }

      
  console.log(strNaam)
}
