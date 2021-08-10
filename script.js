/*$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
    })
})*/

/*window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementsByClassName("navbar").className = "sticky";
    } else {
        document.getElementsByClassName("navbar").className = "";
    }
}
console.log(sticky);*/
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Engineer')
    .pauseFor(2300)
    .deleteAll()
    .typeString('Front-End Developer')
    .pauseFor(2500)
    .deleteAll()
    //.deleteChars(7)
    .typeString('Web Designer')
    .pauseFor(2500)
    .start();