var btn = document.getElementById('btn-nav');
var modal = document.getElementById('fond-modal');
var nav = document.getElementById('barre-nav');

btn.addEventListener('click', function (e) {
    $(nav).toggleClass("top-z");
    $(modal).toggleClass("masque");
    $(modal).toggleClass("affiche");

});