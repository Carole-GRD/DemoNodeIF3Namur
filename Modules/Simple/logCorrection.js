// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------  LES CONSTANTES ET LES FONCTIONS   ----------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const milliOneDay = (24*3600*1000);
const today = new Date();

function getNextDate(day, month){
    let currentYear = today.getFullYear();
    let dateMonth = month - 1;
    // On vérifie si nous sommes le même mois que la date renseignée et un ou plusieurs jours après
    // Ou que nous avons dépassé le mois renseigné
    if ((today.getMonth() === dateMonth && today.getDate() > day) || today.getMonth() > dateMonth){
        currentYear++;
    }
    return new Date(currentYear, dateMonth, day)
}


function getDiffDays(targetDate){
    // On obtient la différence en millisecondes entre nos deux dates
    const diff = targetDate.getTime() - today.getTime();
    // On va diviser ce nombre total de millisecondes par le total de millisecondes contenu dans une journée
    return Math.ceil(diff / milliOneDay);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------------  LES OBJETS  -------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let eventDate = {
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
        const nextSummerSolstice = getNextDate(21, 6);
        const nextWinterSolstice = getNextDate(21, 12);
        
        const diffDaysSummer = getDiffDays(nextSummerSolstice);
        const diffDaysWinter = getDiffDays(nextWinterSolstice);
    
        console.log(`Il reste ${Math.min(diffDaysSummer, diffDaysWinter)} jours avant le prochain solstice.`);
    },
    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    fromFriday13 : function(){
        let month = today.getMonth();
    
        if (today.getDate() >= 13){
            month++;
        }
    
        const nextFriday = new Date(today.getFullYear(), month, 13);
    
        while(nextFriday.getDay() !== 5){
            nextFriday.setMonth(nextFriday.getMonth() + 1);
        }
    
        const diffDays = getDiffDays(nextFriday);
        console.log(`Il reste ${diffDays} avant le prochain vendredi 13`);
    }

}

module.exports = eventDate;


