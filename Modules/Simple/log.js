// date actuelle
let dateDuJour = new Date();

// Noël
let dateNoel = new Date(`December 25, 2022 00:00:00`);

// anniversaire
let dateAnniveraire = new Date('March 16, 2022 00:03:00');

// vacances
let dateVacances = new Date('October 01, 2022 00:00:00');

// l'objet "calcul" reprenant les différentes fonctions à exporter
let calcul = {
    noel : function(){
        let interval = (dateNoel - dateDuJour);
        let nbJours = Math.floor(interval / (1000 * 60 * 60 * 24));
        console.log(`Il reste ${nbJours} jours avant Noël.`);

    },

    anniversaire : function(){
        let interval = (dateAnniveraire - dateDuJour);
        let nbJours = Math.floor(interval / (1000 * 60 * 60 * 24));
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
        let nbJours = Math.floor(interval / (1000 * 60 * 60 * 24));
        console.log(`Il reste ${nbJours} jours avant les vacances.`);

    }
}


module.exports = calcul;