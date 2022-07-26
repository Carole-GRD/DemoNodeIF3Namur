// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------  LES CONSTANTES ET LES FONCTIONS   ----------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nombre de millisecondes dans une journée
const milliOneDay = (24*3600*1000);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Date du jour 
const today = new Date();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Fonction qui vérifie si la date de l'évènement (Noël, anniversaire,...) est déjà passée ou pas
// Dans le cas où la date est déjà passée, on ajoute un an pour obtenir la date correpondant à l'évènement de l'année suivante
function getNextDate(day, month){
    let currentYear = today.getFullYear();
    
    // on retire 1 pour obtenir l'index du mois
    // -> on entre le 10/01 pour le 10 janvier 
    // -> MAIS le mois de janvier a pour index 0 
    let dateMonth = month - 1;
    
    // On vérifie si nous sommes le même mois que la date renseignée et un ou plusieurs jours après
    // Ou que nous avons dépassé le mois renseigné
    if ((today.getMonth() === dateMonth && today.getDate() > day) || today.getMonth() > dateMonth){
        currentYear++;
    }
    return new Date(currentYear, dateMonth, day)
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Fonction qui calcule le nombre de jours avant l'évènement
function getDiffDays(targetDate){
    // On obtient la différence en millisecondes entre nos deux dates
    const diff = targetDate.getTime() - today.getTime();
    // On va diviser ce nombre total de millisecondes par le total de millisecondes contenu dans une journée
    return Math.ceil(diff / milliOneDay);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------  LES OBJETS  -------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let eventDays = {
    fromChristmas : function(){
        const christmas = getNextDate(25, 12);
        const diffDays = getDiffDays(christmas);
        console.log(`Il reste ${diffDays} jours avant Noël.`);
    },
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    fromBirthday : function(){
        const birthday = getNextDate(16, 03);
        const diffDays = getDiffDays(birthday);
        console.log(`Il reste ${diffDays} jours avant mon anniversaire.`);
    },
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    fromVacation : function(){
        const vacation = getNextDate(30, 09);
        const diffDays = getDiffDays(vacation);
        console.log(`Il reste ${diffDays} jours avant les vacances.`);
    },
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    solstice : function(){
        // on vérifie si les dates sont déjà passées (dans ce cas, on passe au solstice de l'année suivante)
        const nextSummerSolstice = getNextDate(21, 6);
        const nextWinterSolstice = getNextDate(21, 12);

        // on obtient le nombre de jours avant les prochains solstices d'été et d'hiver
        const diffDaysSummer = getDiffDays(nextSummerSolstice);
        const diffDaysWinter = getDiffDays(nextWinterSolstice);
        
        // Math.min nous renvoie le nombre le plus petit et donc le prochain solstice le plus proche de la date du jour
        console.log(`Il reste ${Math.min(diffDaysSummer, diffDaysWinter)} jours avant le prochain solstice.`);
    },
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    fromFriday13 : function(){
        let month = today.getMonth();
        
        // si le 13 du mois en cours est déjà passé, on passe au mois suivant pour vérifier si le 13 est un vendredi
        if (today.getDate() >= 13){
            month++;
        }
        
        // on stocke la date du 13 du mois (en cours ou suivant) de l'année (en cours) dans une variable 
        const nextFriday = new Date(today.getFullYear(), month, 13);
        
        // Tant que le 13 du mois n'est pas un vendredi, on passe au mois suivant pour vérifier si le 13 est un vendredi
        //  -> vendredi a pour index 5
        while(nextFriday.getDay() !== 5){
            nextFriday.setMonth(nextFriday.getMonth() + 1);
        }
        
        // lorsqu'on a la date du prochain vendredi 13, on calcule le nombre de jours avant cette date
        const diffDays = getDiffDays(nextFriday);
        console.log(`Il reste ${diffDays} avant le prochain vendredi 13`);
    }

}

module.exports = eventDays;


