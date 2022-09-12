
//ajout eventlistener focus pour démarrer le calcul de vitesse
document.querySelector("#texte").addEventListener("focus", calculerVitesses);
const intervalleDeTemps = 5000;

function calculerVitesses() {
    let i = 0;
    //récupérer le temps au démarrage en seconde et on initie la longueur du texte à 0
    let tempsAuDepart = new Date().getTime();
    let longueurTextePrecedent = 0;

    let intervalID = setInterval(() => {

        //on récupère le temps total écoulé depuis le début
        let tempsTotalEcoule = new Date().getTime() - tempsAuDepart;

        //on récupère la longueur totale du texte
        let longueurTexteEntier = document.querySelector("#texte").value.length;

        //calcul et affichage de la vitesse générale
        let vitesseDeFrappeGenerale = Math.round((longueurTexteEntier/tempsTotalEcoule)*60000);
        let spanVitesseGenerale = document.querySelector("#vitesse_generale");
        spanVitesseGenerale.innerHTML = vitesseDeFrappeGenerale.toString();
        ajouterClasseEnFonctionDeLaVitesse(vitesseDeFrappeGenerale, spanVitesseGenerale);

        //calcul du nombre de caractères saisis pendant l'intervalle choisi
        let longueurTexteIntervalle = longueurTexteEntier - longueurTextePrecedent;
        longueurTextePrecedent += longueurTexteIntervalle;

        //calcul et affichage de la vitesse sur l'intervalle donné
        let vitesseDeFrappeDernierIntervalle = Math.round((longueurTexteIntervalle/intervalleDeTemps)*60000);
        let spanVitesseDernierIntervalle = document.querySelector("#vitesse_dernier_intermediaire");
        spanVitesseDernierIntervalle.innerHTML = vitesseDeFrappeDernierIntervalle.toString();
        ajouterClasseEnFonctionDeLaVitesse(vitesseDeFrappeDernierIntervalle, spanVitesseDernierIntervalle);

    }, intervalleDeTemps);
}

function ajouterClasseEnFonctionDeLaVitesse (vitesse, element) {
    if (vitesse >= 180) {
        element.className = "rapide";
    } else if (vitesse < 100) {
        element.className = "lent";
    } else {
        element.className = "intermediaire";
    }
}


