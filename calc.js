window.onload = initAll;          // po wczytaniu uruchomi funkcje intall
document.onkeydown = keyHit;
let wysw = "";
let wynik = 0;
let pole = "";
let klawisze

function initAll() {
	if (document.getElementById) {
		ustawPrzyciski();
	}
	else {
		alert("Przykro mi, ale Twoja przegl¹darka nie jest w stanie obs³u¿yæ tego skryptu");
	}
}
function ustawPrzyciski(klaw) {

	wysw = "";
	wynik = 0;
	pole = "";	
	}

	function keyHit(evt) {
	
	if (evt) {
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.keyCode;
	}
	
	if (thisKey > 47 && thiskey <59) {
		klawisz(thiskey-48);
	}
	
	return false;
} 

function brr(n) {

    var element = document.getElementById("wynik");
    
    for (i = 15; i > 0; i--) {
       for (j = n; j > 0; j--) {
		element.moveBy(0,i);
		element.moveBy(i,0);
		element.moveBy(0,-i);
		element.moveBy(-i,0);
           }
       }
}	

function klawisz(klaw) {
	var klawisze = "";
	pole = pole + klaw;
	wynik = eval(pole);

	if  ( isFinite( wynik)  ) {
   	document.getElementById("obliczenia").value = "Obliczenia="+pole;
	 	document.getElementById("wynik").innerHTML = "Wynik="+wynik;
		}
   else
    {
				//brr(10);
    wynik = "co zrobi³eœ baranie, tego siê nie da wyliczyæ";
		document.getElementById("obliczenia").value = "Obliczenia="+pole;
    document.getElementById("wynik").innerHTML = "Wynik="+wynik;

    }        
  }

function czysc() {

	wysw = "";
	wynik = 0;
	pole = "";	
	document.getElementById("obliczenia").value = "Obliczenia="+pole;
	document.getElementById("wynik").innerHTML = "Wynik="+wynik;

	}

