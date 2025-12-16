
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

//next meeting
const destDate = new Date(2026, 1, 13)

//today
const currDate = new Date()

//anniversary date
const anniversary = new Date(2025, 10, 14)

const daysUntil = getDateDiff(destDate, currDate)
const strDaysremaining = `${daysUntil} days until we see each other \n`
var time = document.getElementById('time')
time.textContent = strDaysremaining

const daysdating = `Together for ${getDateDiff(new Date, anniversary)} days`
var daystogether = document.getElementById('together')
daystogether.textContent = daysdating

var datestarted = document.getElementById('since')
datestarted.textContent = `Together since {${anniversary.toDateString().substring(3)}}`
datestarted.style.color = "green"