document.addEventListener("DOMContentLoaded", function () {
    var boutons = document.getElementsByClassName("btn");
    for (var i = 0; i < boutons.length; i++) {
        boutons[i].addEventListener("click", afficherMessage);
    }
});

function afficherMessage() {
    alert("Votre commande a été passée avec succès ! \n Merci pour votre Fidélité ! ");
}
