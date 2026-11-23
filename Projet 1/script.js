// Changer couleur boutons details


const btnDetails = document.querySelectorAll('#btn-details');

btnDetails.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const currenttarget = event.currentTarget;

        if (currenttarget.style.backgroundColor === 'orange') {

            currenttarget.style.backgroundColor = '#035d30';
            currenttarget.style.color = 'white';

        } else {

            currenttarget.style.backgroundColor = 'orange';
            currenttarget.style.color = 'white';

        }

    })
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

    })

});



// Bouton + : ajouter une carte destination

const galerie = document.querySelector(".galerie");

// Créer le bouton +
const boutonAjouter = document.createElement("button");
boutonAjouter.type = "button";
boutonAjouter.classList.add("btn-ajouter");
boutonAjouter.textContent = "+";
boutonAjouter.setAttribute("aria-label", "Ajouter une destination");
galerie.after(boutonAjouter);






// Bouton supprimer
const supprimer = document.createElement("button");
supprimer.type = "button";
supprimer.classList.add("btn-supprimer");
supprimer.textContent = "Supprimer";
supprimer.addEventListener("click", () => {
    carte.remove();
});


// reucpere figure

cartes.forEach((carte) => {

    carte.style.display = "none";



});

cartes[0].style.display = "";

let i = 0;

boutonAjouter.addEventListener('click', (event) => {
    i++;
    if (i > cartes.length) return;


    cartes[i].style.display = "";




})