/////////////////////////////////////////////////////////////////////////* First Question *//////////////////////////////////////////////////////////////////////////////////

// let isTrue = true;



function plannedPages(days, dailyPages, restOnSeventhDay) {
    let total = 0;
    let dayCounter = 0;
    if (Number.isInteger(days) == false || days > 60 || days < 0) {
        // isTrue = false;
        return null;
    }
    if (Number.isInteger(dailyPages) == false || dailyPages > 100 || dailyPages < 0) {
        // isTrue = false;
        return null;
    }
    if (typeof (restOnSeventhDay) !== "boolean") {
        // isTrue = false;
        return null;
    }

    for (let i = 1; i <= days; i++) {

        dayCounter = dayCounter + 1;


        if (dayCounter === 7 && restOnSeventhDay === true) {
            dayCounter = 0
        }
        else {
            total = total + dailyPages
        }

        // let totalRestDays = days / 7;
        // total = total + ((days * dailyPages) - (totalRestDays * dailyPages))



    }
    return total;


    // if (isTrue === true && restOnSeventhDay === false) {
    //     for (let i = 0; i < days; i++) {
    //         let total = 0;

    //         total = total + (days * dailyPages)

    //     }
    //     return total;
    // }
}


console.log(plannedPages(7, 20, true));
console.log(plannedPages(61, 20, true));



/////////////////////////////////////////////////////////////////////////* Second Question *//////////////////////////////////////////////////////////////////////////////////


function remainingPages(goalPages, readPages) {
    if (Number.isInteger(goalPages) == false || goalPages > 5000 || goalPages < 1) {

        return null;
    }
    if (Number.isInteger(readPages) == false || readPages > 6000 || readPages < 0) {

        return null;
    }
    if (goalPages <= readPages) {
        return 0;
    }
    let totalRemainPages = goalPages - readPages
    return totalRemainPages

}
console.log(remainingPages(200, 79));
console.log(remainingPages(200, 220));
console.log(remainingPages(0, 0));


/////////////////////////////////////////////////////////////////////////* Third Question *//////////////////////////////////////////////////////////////////////////////////



function daysToFinish(pagesLeft, dailyPages, restOnSeventhDay) {


    let totalRead = 0;
    let daysCounter = 0;


    if (Number.isInteger(pagesLeft) == false || pagesLeft > 5000 || pagesLeft < 0) {
        return null
    }
    if (Number.isInteger(dailyPages) == false || dailyPages > 100 || dailyPages < 1) {
        return null
    }
    if (typeof (restOnSeventhDay) !== "boolean") {
        return null;
    }
    if (pagesLeft === 0) {
        return 0;
    }


    while (pagesLeft > totalRead) {
        daysCounter++;

        if (restOnSeventhDay === true && daysCounter % 7 === 0) {
            /* rest */
        } else {
            totalRead = totalRead + dailyPages
        }
    }

    /* if (!(restOnSeventhDay === true && daysCounter % 7 === 0)){
     totalRead = totalRead + dailyPages
    }*/
    return daysCounter;

}
/////////////////////////////////////////////////////////////////////////* Forth Question *//////////////////////////////////////////////////////////////////////////////////
