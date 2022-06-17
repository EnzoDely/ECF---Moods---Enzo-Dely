var cardsDivLeft = document.getElementById("article-left")
var buttonDiv = document.getElementsByClassName("divbutton")[0];  //better use some id and then use getElementById
var cardsDivCenter = document.getElementById("article-center")
var cardsDivRight = document.getElementById("article-right")

/* Obliger d'utiliser plusieurs variable, je n'ai pas réussi à le faire fonctionner en sélectionnant toutes les articles*/
cardsDivLeft.onmouseover = function () {
    document.getElementById("plusdinfo-1").style.visibility = 'visible';
}
cardsDivLeft.onmouseout = function () {
    document.getElementById("plusdinfo-1").style.visibility = 'hidden';
}

cardsDivCenter.onmouseover = function () {
    document.getElementById("plusdinfo-2").style.visibility = 'visible';
}
cardsDivCenter.onmouseout = function () {
    document.getElementById("plusdinfo-2").style.visibility = 'hidden';
}

cardsDivRight.onmouseover = function () {
    document.getElementById("plusdinfo-3").style.visibility = 'visible';
}
cardsDivRight.onmouseout = function () {
    document.getElementById("plusdinfo-3").style.visibility = 'hidden';
}