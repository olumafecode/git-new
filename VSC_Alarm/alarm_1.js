let time = 5
const message = "Wake up!"
for ( let i = 0; i <= time; i++) {
    if (i == time) {
        //alert(message + ", wake up in " + time + " minutes!")
        setTimeout( alert, time*1000, message + ", wake up in " + time + " minutes!")
    } else {
        setTimeout( console.log, i*1000, i)
    }
}
