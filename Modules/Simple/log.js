// convertir en jours
let nbJours;
let interval;
function convertir(interval){
    nbJours = Math.floor(interval / (1000 * 60 * 60 * 24));
}

// --------------------------------------------------------------------

// date actuelle
let dateDuJour = new Date();

// --------------------------------------------------------------------

// obtenir l'année en cours
function annee(){
    return dateDuJour.getFullYear();
} 

// --------------------------------------------------------------------

// Noël
let dateNoel = new Date(`December 25, ${annee()} 00:00:00`);

// --------------------------------------------------------------------

// anniversaire
let dateAnniveraire = new Date(`March 16, ${annee()} 00:00:00`);

// --------------------------------------------------------------------

// vacances
let dateVacances = new Date(`October 01, ${annee()} 00:00:0`);

// --------------------------------------------------------------------

// solstice
let dateSolsticeJuin = new Date(`June 21, ${annee()} 00:00:00`);
let dateSolsticeDecembre = new Date(`December 21, ${annee()} 00:00:00`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// l'objet "calcul" reprenant les différentes fonctions à exporter
let calcul = {
    noel : function(){
        let interval = (dateNoel - dateDuJour);
        convertir(interval);
        console.log(`Il reste ${nbJours} jours avant Noël.`);

    },

    anniversaire : function(){
        let interval = (dateAnniveraire - dateDuJour);
        convertir(interval);
        if(nbJours < 0){
            let reponse = 365 + nbJours;
            console.log(`Il reste ${reponse} jours avant mon anniversaire.`);
        }
        else{
            console.log(`Il reste ${nbJours} jours avant mon anniversaire.`);
        }
    },

    vacances : function(){
        let interval = (dateVacances - dateDuJour);
        convertir(interval);
        console.log(`Il reste ${nbJours} jours avant les vacances.`);

    },

    solstice : function(){
        let interval = 0;
    if (dateDuJour < dateSolsticeJuin){
        interval += (dateSolsticeJuin - dateDuJour);
    }
    if (dateDuJour > dateSolsticeJuin && dateDuJour < dateSolsticeDecembre){
        interval += (dateSolsticeDecembre - dateDuJour);
    }
    if (dateDuJour > dateSolsticeDecembre){
        dateSolsticeJuin = new Date(`June 21, ${annee() + 1} 00:00:00`);
        interval += (dateSolsticeJuin - dateDuJour);
    }
    convertir(interval);
    console.log(`Il reste ${nbJours} avant le prochain solstice.`);
    }
    
}


module.exports = calcul;