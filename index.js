var numberOfsounds = document.querySelectorAll(".poem").length;
for(var i= 0; i<numberOfsounds;i++)


document.querySelectorAll(".poem")[i].addEventListener("click" , function(){
    var buttonInnerHtml= this.innerHTML;
    switch(buttonInnerHtml){
    case  "y":
    var audio = new Audio('sounds/ayrilik.mp3');
    audio.play();
    break;
    case  "e":
    var audio = new Audio('sounds/Aski-malum.mp3');
    audio.play();
    break;
    case  "k":
    var audio = new Audio('sounds/ensrumental.mp3');
    audio.play();
    break;
    case  "t":
    var audio = new Audio('sounds/esaret.mp3');
    audio.play();
    break;
    case  "a":
    var audio = new Audio('sounds/Istanbul.mp3');
    audio.play();
    break;
    case  "m":
    var audio = new Audio('sounds/ikimevsimdirozlemek.mp3');
    audio.play();
    break;
    case  "r":
    var audio = new Audio('sounds/peri.mp3');
    audio.play();
    break;
    case  "v":
    var audio = new Audio('sounds/sille.mp3');
    audio.play();
    break;
    case  "l":
    var audio = new Audio('sounds/sizandamlaciklar.mp3');
    audio.play();
    break;
    case  "n":
    var audio = new Audio('sounds/varsinsaniyorum.mp3');
    audio.play();
    break;
    case  "d":
    var audio = new Audio('sounds/Yalnizlikdegirmeni.mp3');
    audio.play();
    break;


    }
})