// The current date and time should display on the top of the page on reload
    // use moment.().format() to add the current date to the header
    // To dynamically update the date, I will create an interval that will trigger
    // a function every second
        // This function will call the method that uses the current date and formats
        // using any variation of the month, day, year, and the current time of the day

// Calls the function on reload to instantly load the current time
// the setInterval does not immediately load the time by itself
getDate();

// This function uses moment.js to take the current date and time and formats it
function getDate() {
    // sets the format for the current date and time
    var today = moment().format("dddd, MMMM Do, YYYY, hh:mm:ss");
    // sets the text of the current date and time to the header
    $("#currentDay").text(today);
}

// This will cause the page to dynamically update the time every second
setInterval(getDate, 1000);


var containerEl = $('.container');
// set variables to reference hour intervals
var nineAM = moment().hour(9).minute(00).second(00);
var tenAM = moment().hour(10).minute(00).second(00);
var elevenAM = moment().hour(11).minute(00).second(00);
var twelveAM = moment().hour(12).minute(00).second(00);
var onePM = moment().hour(13).minute(00).second(00);
var twoPM = moment().hour(14).minute(00).second(00);
var threePM = moment().hour(15).minute(00).second(00);
var fourPM = moment().hour(16).minute(00).second(00);
var fivePM = moment().hour(17).minute(00).second(00);

// array is used to hold the hours to iterate the checkTime function below
var hoursArray = [nineAM, tenAM, elevenAM, twelveAM, onePM,
                 twoPM, threePM, fourPM, fivePM];

// Function is used to check the current time and compare it with the hours of a
// regular work schedule 9 AM - 5 PM
function checkTime() {
    
    // iterate through each specific hour
    for(var i = 0; i < hoursArray.length; i++) {
        // checks if the current time is before the specific hour of today
        var isFuture = moment().isBefore(hoursArray[i]);
        var isPast = moment().isAfter(hoursArray[i]);
        // just to check if there are any errors
        console.log(isFuture);
        console.log(isPast);

        // comparison check to determine how the hours are color-coded based on time
        if(isFuture === false && isPast === false) {
            // colors the specific hour gray if it is the current hour
            containerEl.children().eq(i).children().eq(1).addClass("present");
        } else if (isFuture === true) {
            // colors the specific hour green if it has yet to pass
            containerEl.children().eq(i).children().eq(1).addClass("future");
        } if (isPast === true) {
            // colors the specific hour red if the time has already passed
            containerEl.children().eq(i).children().eq(1).addClass("past");
        }
    }
}
// function call will start the code in the function
checkTime();