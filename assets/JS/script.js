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
// sixPM variable is used to compare the fivePM var
// Will not be compared in the for loop
var sixPM = moment().hour(18).minute(00).second(00);

// array is used to hold the hours to iterate the checkTime function below
// sixPM is not included in the for loop
var hoursArray = [nineAM, tenAM, elevenAM, twelveAM, onePM,
                 twoPM, threePM, fourPM, fivePM, sixPM];

// Function is used to check the current time and compare it with the hours of a
// regular work schedule 9 AM - 5 PM
function checkTime() {
    
    // iterate through each specific hour
    for(var i = 0; i < hoursArray.length - 1; i++) {
        // checks if the current time is before the specific hour of today
        var isFuture = moment().isBefore(hoursArray[i]);
        // checks if the current time is after the hour at the next index
        var isPast = moment().isAfter(hoursArray[i+1]);
        // just to check if there are any errors
        console.log(isFuture);
        console.log(isPast);

        // comparison check to determine how the hours are color-coded based on time'
        // If it is not in the future and not in the past, it is in the present hour
        if(isFuture === false && isPast === false) {

            // colors the specific hour red if it is the current hour
            // removes future and past classes if it exists for this element
            // adds present class
            containerEl.children().eq(i).children().eq(1).removeClass("future past").addClass("present");

        } else if (isFuture === true) {

            // colors the specific hour green if it has yet to pass
            // removes present and past classes if it exists for this element
            // adds future class
            containerEl.children().eq(i).children().eq(1).removeClass("present past").addClass("future");

        } if (isPast === true) {

            // colors the specific hour gray if the time has already passed
            // removes future and present classes if it exists for this element
            // adds past class
            containerEl.children().eq(i).children().eq(1).removeClass("future present").addClass("past");

        }
    }
}
// function call will start the code in the function
checkTime();

// constants to reference the save buttons
const btnSave9 = document.getElementById("saveBtn9");
const btnSave10 = document.getElementById("saveBtn10");
const btnSave11 = document.getElementById("saveBtn11");
const btnSave12 = document.getElementById("saveBtn12");
const btnSave13 = document.getElementById("saveBtn13");
const btnSave14 = document.getElementById("saveBtn14");
const btnSave15 = document.getElementById("saveBtn15");
const btnSave16 = document.getElementById("saveBtn16");
const btnSave17 = document.getElementById("saveBtn17");

// constants to reference the text areas
const text9 = document.getElementById("hour9");
const text10 = document.getElementById("hour10");
const text11 = document.getElementById("hour11");
const text12 = document.getElementById("hour12");
const text13 = document.getElementById("hour13");
const text14 = document.getElementById("hour14");
const text15 = document.getElementById("hour15");
const text16 = document.getElementById("hour16");
const text17 = document.getElementById("hour17");

// adds the save option to each row
btnSave9.addEventListener("click", function(event) {
    event.preventDefault();
    // stores the entered input in localstorage with key and value
    localStorage.setItem("textContent9", text9.value);
    console.log(text9.value);
});
// loads the stored information on page reload
text9.textContent = localStorage.getItem("textContent9");

btnSave10.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent10", text10.value);
    console.log(text10.value);
});
text10.textContent = localStorage.getItem("textContent10");

btnSave11.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent11", text11.value);
    console.log(text11.value);
});
text11.textContent = localStorage.getItem("textContent11");

btnSave12.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent12", text12.value);
    console.log(text12.value);
});
text12.textContent = localStorage.getItem("textContent12");

btnSave13.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent13", text13.value);
    console.log(text13.value);
});
text13.textContent = localStorage.getItem("textContent13");

btnSave14.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent14", text14.value);
    console.log(text14.value);
});
text14.textContent = localStorage.getItem("textContent14");

btnSave15.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent15", text15.value);
    console.log(text15.value);
});
text15.textContent = localStorage.getItem("textContent15");

btnSave16.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent16", text16.value);
    console.log(text16.value);
});
text16.textContent = localStorage.getItem("textContent16");

btnSave17.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("textContent17", text17.value);
    console.log(text17.value);
});
text17.textContent = localStorage.getItem("textContent17");