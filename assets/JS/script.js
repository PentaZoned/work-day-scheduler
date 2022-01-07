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
    var today = moment().format("MMMM Do, YYYY, hh:mm:ss");
    // sets the text of the current date and time to the header
    $("#currentDay").text(today);
}

// This will cause the page to dynamically update the time every second
setInterval(getDate, 1000);

