// var stylePage = document.getElementById("stylePage");
// stylePage.style.background ="#fff";

var sp = document.getElementById("stylePage");
var bg = document.getElementById("bg");
var title = document.querySelector('h1');
var p = document.querySelector('p');
function editColor() {
  if (sp.style.backgroundColor == "rgb(233, 30, 99)") {
    sp.style.backgroundColor = "#00BCD4", bg.style.backgroundColor = "#cbdd55", title.style.color = "#000", p.style.color = "#000";
  } else {
    sp.style.backgroundColor = "rgb(233, 30, 99)",bg.style.backgroundColor = "#00BCD4", title.style.color = "#fff", p.style.color = "#fff" ;
  }
}
function goToPage()
{
	var url = document.getElementById('url');
	document.location.href = "https://yandex.by/";
}

function myFunction(){
    var elem = document.querySelector('body');
    var element = document.querySelector('header');
    var divs = document.createElement('div');
    var divs1 = document.createElement('div');
        divs1.className = "offer";
    var elemh1 = document.createElement('h1');
    var par = document.createElement('p');
    var btns = document.createElement('button');
      

    element.remove(),
    elem.appendChild(divs),
    divs.appendChild(divs1),
    divs1.appendChild(elemh1),
    divs1.appendChild(par);
    divs1.appendChild(btns);
    par.innerHTML = "Если три дня мучаться, что нить и получиться"
    elemh1.innerHTML = "Привет мир";
    btns.innerHTML = " кнопка";
    divs.appendChild(divs1);

    divs.style.height = "320px",  divs.style.backgroundColor = "#befaba9c", divs.style.textAlign = "center"

    
}


var term = {
  Canada: 10,
  Germanu: 13,
  Spain: 22,
  Italy: 18,
  Albania: 16.5,
  Belarus: 18,
  India: 16,
  Mexico: 28,
};


function s(obj) {
  var rez = 0;
  for(key in obj) {
   rez += obj[key];
   }
  return rez;
  }
  var temp = "Средняя tемпература = "
  console.log(temp + s(term)/8);
