let hourTxt = document.getElementById('hourTxt')
let minutesTxt = document.getElementById('minutesTxt')
let secondsTxt = document.getElementById('secondsTxt')
let calendar = document.getElementById('calendar')

setInterval(wait, 1000);
function wait(){
    let data = new Date()
    let hour = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()

    if (hour < 10){
        hourTxt.innerHTML = `0${hour}`
    } else {
        hourTxt.innerHTML = `${hour}`
    }

    if (minutes < 10){
        minutesTxt.innerHTML = `0${minutes}`
    } else{
        minutesTxt.innerHTML = `${minutes}`
    }

    if (seconds < 10){
        secondsTxt.innerHTML = `0${seconds}`
    } else {
        secondsTxt.innerHTML = `${seconds}`
    }
}

let calendario = new Date()
let day = calendario.getDate()
let month = calendario.getMonth()
let year = calendario.getFullYear()

switch (month){
    case 0:
        month = 'Janeiro'
        break
    case 1:
        month = 'Fevereiro'
        break
    case 2:
        month = 'Março'
        break
    case 3:
        month = 'Abril'
        break
    case 4:
        month = 'Maio'
        break
    case 5:
        month = 'Junho'
        break
    case 6:
        month = 'Julho'
        break
    case 7:
        month = 'Agosto'
        break
    case 8:
        month = 'Setembro'
        break
    case 9:
        month = 'Outubro'
        break
    case 10:
        month = 'Novembro'
        break
    case 11:
        month = 'Dezembro'
}

calendar.innerHTML = `${day} de ${month} de ${year}`
