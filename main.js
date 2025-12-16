
function getDateDiff(destDate, today){
    const start = new Date(today)
    start.setHours(0, 0, 0, 0)

    const end = new Date(destDate)
    end.setHours(0, 0, 0, 0)

    //calculate difference in milliseconds
    const diffTime = end - start;

    //convert ms to days
    //1ms = 1s / 1000
    const diffDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDate;
}

const destDate = new Date(2026, 1, 13)
const currDate = new Date()

const daysUntil = getDateDiff(destDate, currDate)
const strDaysremaining = `There are ${daysUntil} days remaining til we see each other again`
var time = document.getElementById('time')
time.textContent = strDaysremaining