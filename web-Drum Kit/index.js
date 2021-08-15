var v = document.querySelectorAll(".drum");
var audiow = new Audio("sounds/crash.mp3");
var audioa = new Audio("sounds/kick-bass.mp3");
var audios = new Audio("sounds/snare.mp3");
var audiod = new Audio("sounds/tom-1.mp3");
var audioj = new Audio("sounds/tom-2.mp3");
var audiok = new Audio("sounds/tom-3.mp3");
var audiol = new Audio("sounds/tom-4.mp3");
//click mouse
for (var i = 0; i < v.length; i++) {
    v[i].addEventListener("click", function () {
        var but = this.innerHTML;
        makeSound(but);
    })
}



//keybord
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})



function makeSound(key) {
    switch (key) {
        case "w":

            audiow.play();
            break;
        case "a":

            audioa.play();
            break;
        case "s":

            audios.play();
            break;
        case "d":

            audiod.play();
            break;
        case "j":

            audioj.play();
            break;
        case "k":

            audiok.play();
            break;
        case "l":

            audiol.play();
            break;

        default:
            console.log(but);
            break;
    }
}
/*var audio = new Audio("sounds/crash.mp3");
    audio.play(); */