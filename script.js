/* Animation du H2 sur l'index */
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/* Animations de mes boutons sur ma page d'accueil*/
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

/* PAS MARCHE / FONCTIONNER ECOUTE D'EVENT ->

  const elt = document.getElementsByClassName('button-plusinfo'); 
const myButton = document.getElementsByClassName('plusdinfo'); 
elt.addEventListener("mouseover", function handleMouseOver(){
    myButton.style.display="block"; 
});
elt.addEventListener('mouseout', function handleMouseOut(){
    myButton.style.display="none";
});
*/
/* PAS REUSSI / FONCTIONNER ECOUTE D'EVENT
var buttonDiv = document.getElementsByClassName("plusdinfo-button")[0];  //better use some id and then use getElementById

buttonDiv.onmouseover = function() {
    document.getElementsByClassName("plusdinfo-button").style.display = 'block';
}

buttonDiv.onmouseout = function() {
    document.getElementsByClassName("plusdinfo-button").style.display = 'none';
}
*/












