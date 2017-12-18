
$(document).ready(function(){

////////// TIME AND DATE STARTS //////////
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  function clock(){
    let amPm = "";

    if (hours <= 12){
      amPm = "AM";
    } else if (hours > 12) {
      hours -= 12;
      amPm = "PM";
    }
    // Update #time li with value
    if (minutes < 10){
      $("#localTime").text(hours + ":0" + minutes + " " + amPm);
    } else
      $("#localTime").text(hours + ":" + minutes + " " + amPm);
  }
  // Run the clock function every second to update html with real-time data
  setInterval(clock, 1000);

  function getDays(){
    $("#day0").html("Today");
    $("#day1").text(days[day+1]);
    $("#day2").text(days[day+2]);
    $("#day3").text(days[day+3]);
    $("#day4").text(days[day+4]);
    $("#day5").text(days[day+5]);
  }
  getDays();
  setInterval(getDays, 600000);
////////// TIME AND DATE ENDS //////////

////////// GEO LOC AND WEATHER API STARTS //////////
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // Get user current position
    let lat, lon;
    lon = position.coords.longitude;
    lat = position.coords.latitude;

    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&APPID=855180ee76bd1d1f44838c7a4a9bf1f3&units=metric",function(data){

      let day0temp = Math.round(data.list[0].main.temp);
      let day0min = Math.floor(data.list[2].main.temp_min);
      let day0max = Math.round(data.list[4].main.temp_max);
      let day0weather = data.list[0].weather[0].main;

      $("#city").text(data.city.name + ", " + data.city.country);
      $("#temperature").html(day0temp + "°<span id='weatherValue'>C</span><span id='weatherState'>" + day0weather + "</span>");
      $("#maxTemp0").text(day0max);
      $("#minTemp0").text(day0min);
      $("#day0desc").text(day0weather);

      $("#day1desc").text(data.list[8].weather[0].main);
      $("#minTemp1").text(Math.floor(data.list[10].main.temp_min));
      $("#maxTemp1").text(Math.round(data.list[12].main.temp_max));

      $("#day2desc").text(data.list[16].weather[0].main);
      $("#minTemp2").text(Math.floor(data.list[18].main.temp_min));
      $("#maxTemp2").text(Math.round(data.list[20].main.temp_max));

      $("#day3desc").text(data.list[24].weather[0].main);
      $("#minTemp3").text(Math.floor(data.list[24].main.temp_min));
      $("#maxTemp3").text(Math.round(data.list[26].main.temp_max));

      $("#day4desc").text(data.list[32].weather[0].main);
      $("#minTemp4").text(Math.floor(data.list[32].main.temp_min));
      $("#maxTemp4").text(Math.round(data.list[34].main.temp_max));

      $("#day5desc").text(data.list[37].weather[0].main);
      $("#minTemp5").text(Math.floor(data.list[37].main.temp_min));
      $("#maxTemp5").text(Math.round(data.list[39].main.temp_max));

    });
  });
} else {
  alert("Geolocation is not supported by this browser!");
}


////////// GEO LOC AND WEATHER API ENDS //////////

});