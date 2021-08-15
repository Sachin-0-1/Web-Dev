function changebar(x) {

    x.classList.toggle("change");

    let fp = document.getElementsByClassName("fpanel");
    let sp = document.getElementsByClassName("spanel");
    let contain = document.getElementsByClassName("container");
    let h = fp[0].getElementsByTagName("h1");
    let hh = sp[0].getElementsByTagName("h1");
    let hh2 = sp[0].getElementsByClassName("typeText");

    if (innerWidth <= 1000)
        contain[0].classList.toggle("makeflex");

    h[0].classList.toggle("invisible");
    hh[0].classList.toggle("invisible");
    hh2[0].classList.toggle("invisible");

    fp[0].classList.toggle("pushside");
    sp[0].classList.toggle("pushside");
    fp[0].classList.toggle("fpanelsetmargin");


    //let v = document.getElementsByClassName("myinfo");
    //v[0].classList.toggle("invisible");
}


var typeText = document.querySelector(".typeText")
var textToBeTyped = "a Student"
var index = 0,
    isAdding = true

function playAnim() {

    setTimeout(function() {

        typeText.innerText = textToBeTyped.slice(0, index)
        if (isAdding) {

            if (index > textToBeTyped.length) {

                isAdding = false
                    //break: wait 2s before playing again
                setTimeout(function() {
                    playAnim()
                }, 2000)
                return
            } else { index++; }
        } else {

            if (index === 0) {
                if (textToBeTyped[2] === 'S')
                    textToBeTyped = "a Developer";
                else
                    textToBeTyped = "a Student";
                isAdding = true;
            } else index--;
        }

        playAnim()
    }, 120)

}
// start animation