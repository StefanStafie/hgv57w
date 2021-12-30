function mech(a) {

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30.437;
    const year = day * 365;

    // Divide Time with a year
    const initial = new Date(1626372000000);
    let current = new Date();
    let difference = current.getTime() - initial.getTime();

    var Syear = document.getElementById("year");
    var Smonth = document.getElementById("month");
    var Sday = document.getElementById("day");
    var Shour = document.getElementById("hour");
    var Sminute = document.getElementById("minute");

    //Syear.innerHTML = "Years: " + Math.trunc(difference / year);
    Smonth.innerHTML = "Months: " + Math.trunc(difference / month);
    Sday.innerHTML = "Days: " + Math.trunc(difference / day);
}