
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
    // get JSON data from API
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&APPID=855180ee76bd1d1f44838c7a4a9bf1f3&units=metric&cnt:45",function(data){
      // present day min/max
      let day0min = Math.min(data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp, data.list[5].main.temp, data.list[6].main.temp, data.list[7].main.temp);
      let day0max = Math.max(data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, data.list[3].main.temp, data.list[4].main.temp, data.list[5].main.temp, data.list[6].main.temp, data.list[7].main.temp);
      // day 1 min/max
      let day1min = Math.min(data.list[8].main.temp, data.list[9].main.temp, data.list[10].main.temp, data.list[11].main.temp, data.list[12].main.temp, data.list[13].main.temp, data.list[14].main.temp, data.list[15].main.temp);
      let day1max = Math.max(data.list[8].main.temp, data.list[9].main.temp, data.list[10].main.temp, data.list[11].main.temp, data.list[12].main.temp, data.list[13].main.temp, data.list[14].main.temp, data.list[15].main.temp);
      // day 2 min/max
      let day2min = Math.min(data.list[16].main.temp, data.list[17].main.temp, data.list[18].main.temp, data.list[19].main.temp, data.list[20].main.temp, data.list[21].main.temp, data.list[22].main.temp, data.list[23].main.temp);
      let day2max = Math.max(data.list[16].main.temp, data.list[17].main.temp, data.list[18].main.temp, data.list[19].main.temp, data.list[20].main.temp, data.list[21].main.temp, data.list[22].main.temp, data.list[23].main.temp);
      // day 3 min/max
      let day3min = Math.min(data.list[24].main.temp, data.list[25].main.temp, data.list[26].main.temp, data.list[27].main.temp, data.list[28].main.temp, data.list[29].main.temp, data.list[30].main.temp, data.list[31].main.temp);
      let day3max = Math.max(data.list[24].main.temp, data.list[25].main.temp, data.list[26].main.temp, data.list[27].main.temp, data.list[28].main.temp, data.list[29].main.temp, data.list[30].main.temp, data.list[31].main.temp);
      // day 4 min/max
      let day4min = Math.min(data.list[32].main.temp, data.list[33].main.temp, data.list[34].main.temp, data.list[35].main.temp);
      let day4max = Math.max(data.list[32].main.temp, data.list[33].main.temp, data.list[34].main.temp, data.list[35]);

      // update HTML with weather api data
      $("#city").text(data.city.name + ", " + data.city.country);
      $("#temperature").html(Math.round(data.list[0].main.temp) + "°<span id='weatherValue'>C</span><span id='weatherState'>" + data.list[0].weather[0].main + "</span>");
      $("#maxTemp0").text(Math.round(day0max));
      $("#minTemp0").text(Math.floor(day0min));
      $("#day0desc").text(data.list[0].weather[0].main);

      $("#day1desc").text(data.list[8].weather[0].main);
      $("#minTemp1").text(Math.floor(day1min));
      $("#maxTemp1").text(Math.round(day1max));

      $("#day2desc").text(data.list[16].weather[0].main);
      $("#minTemp2").text(Math.floor(day2min));
      $("#maxTemp2").text(Math.round(day2max));

      $("#day3desc").text(data.list[24].weather[0].main);
      $("#minTemp3").text(Math.floor(day3min));
      $("#maxTemp3").text(Math.round(day3min));

      $("#day4desc").text(data.list[32].weather[0].main);
      $("#minTemp4").text(Math.floor(day4min));
      $("#maxTemp4").text(Math.round(day4min));
    });
  });
} else {
  alert("Geolocation is not supported by this browser!");
}
////////// GEO LOC AND WEATHER API ENDS //////////
});
