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
