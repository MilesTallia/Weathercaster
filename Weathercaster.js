

function display_refresh(){ // refresh func for time and date

    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_time()',refresh)

}

function display_time() { // sets up time
    var start_time = new Date() // Imports date

    var hours = start_time.getHours().toString()
    hours = hours.length==1 ? " " + hours : hours; // Adds leading space if neccesary

    var minutes = start_time.getMinutes().toString()
    minutes = minutes.length==1 ? 0 + minutes : minutes; // Adds leading zero if neccesary

    var good_time = hours + ":" +  minutes; // Makes time string
    document.getElementById('time').innerHTML = good_time; // Assigns string
    display_refresh(); // Refreshes
}

function display_date() { // sets up date
    var start_date = new Date() // Imports date

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month = start_date.getMonth();
    month = months[month]

    const dates = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st","32nd"];
    var date = start_date.getDate();
    date = dates[date]

    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var day = start_date.getDay();
    day = weekdays[day]

    var good_date = day + ", " + month + " " + date;  // Makes date string
    document.getElementById('date').innerHTML = good_date; // Assigns string
    display_refresh(); // Refreshes
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function weather() {

    var location = document.getElementById("location");
    var apiKey = 'api key';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
            $('#temp').html(data.currently.temperature + '° F');
        });
    }
}