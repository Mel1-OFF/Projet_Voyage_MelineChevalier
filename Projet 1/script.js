// Changer couleur boutons details


const btnDetails = document.querySelector('#btn-details');

btnDetails.addEventListener('click', (event) => {

    const currenttarget = event.currentTarget;

    if (currenttarget.style.backgroundColor === 'orange') {

        currenttarget.style.backgroundColor = '#035d30';
        currenttarget.style.color = 'white';

    } else {

        currenttarget.style.backgroundColor = 'orange';
        currenttarget.style.color = 'white';

    }

});

// au clicke affiche les details de l'image


const cartes = document.querySelectorAll(".destination");

cartes.forEach((carte) => {

    const bouton = carte.querySelector(".btn-details");
    const details = carte.querySelector(".details");


    details.style.display = "none";

    bouton.addEventListener("click", (event) => {

        event.stopPropagation();

        // Afficher ou cacher les détails

        if (details.style.display === "none") {
            details.style.display = "block";
            bouton.textContent = "Masquer les détails";
        } else {
            details.style.display = "none";
            bouton.textContent = "Afficher les détails";
        }

    });

});


