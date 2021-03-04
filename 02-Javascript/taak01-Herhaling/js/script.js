

strNaam = prompt("Hoe heet je?");
boolNaamKlopt = confirm("Heet je echt " + strNaam +"?"); 

if(boolNaamKlopt == true) {
    alert("Welkom " + strNaam );
}

else if(boolNaamKlopt==false){
    prompt("nog een keer hoe heet je?");
    
}else if (boolNaamKlopt==true){
    alert("heet je" + strNaam);
    
}


console.log(strNaam)

