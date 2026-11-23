// Menu déroulant des destinations
const destinations = ["Arc de Triomphe", "Montmartre", "Tour Eiffel", "Musée du Louve"];

const champDestination = document.getElementById("DestinationChoisi");

if (champDestination) {
    const menu = document.createElement("select");
    menu.id = champDestination.id;
    menu.name = champDestination.name;
    menu.required = true;

    // Première ligne : invite, non sélectionnable
    const invite = document.createElement("option");
    invite.value = "";
    invite.textContent = "Choisissez une destination";
    invite.disabled = true;
    invite.selected = true;
    menu.appendChild(invite);

    // Une option par destination
    destinations.forEach(function (nom) {
        const option = document.createElement("option");
        option.value = nom;
        option.textContent = nom;
        menu.appendChild(option);
    });

    // Remplace le champ texte par le menu
    champDestination.replaceWith(menu);
}