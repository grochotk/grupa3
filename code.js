function pustoTu(zmienna) {
  var dlugosc = zmienna.length;
  if (dlugosc == 0) {
    return true; 
  }
  else { 
    return false; 
  }
}

function weryfikacja(formularz) {
 if (pustoTu(formularz.elements["imie"].value) == true) {
   alert("Podaj imie człowieku!");
   return false;
 }
 else {
   return true;
 }
  
}

// function test(){
//   console.log("Działa przycisk");
// }