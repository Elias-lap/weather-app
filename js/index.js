let city = document.getElementById("city");
let find = document.getElementById("find");
let maxtemp_c = document.getElementById("maxtemp_c");
let country = document.getElementById("country");
let icon = document.getElementById("icon");
let humidty=document.getElementById('humidty'),
Wind = document.getElementById('Wind'),
Compass=document.getElementById('Compass')
let image2 = document.getElementById("image");
let weatherCondition = document.getElementById("weather-condition");
let Day=document.getElementById('Day')
let forDate = document.getElementById('date')
let date =document.getElementById('date'),
Find_City=document.getElementById('Find_City')
let result;
  // classes
  let nextDay = document.getElementsByClassName('nextDay'),
   nextDay_icon= document.getElementsByClassName('nextDay_icon'),
   nexday_degree =document.getElementsByClassName('nexday_degree'),
   nextDay_description=document.getElementsByClassName('nextDay_description')
   


async function getData( curentCity ='krakow') {
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${curentCity}&days=3`
    );
    result = await data.json();

    console.log(result);
    DisplayCurentDay()
    DissplayNextDays()


  }
getData()




let Months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',' December']
let weekDays = ['Sunday ','Monday' , 'Tuesday', 'wednesday', 'Thursday', 'Friday ', 'Saturday']



function DisplayCurentDay (){
 let days= new Date()
 Day.innerHTML=weekDays[days.getDay()]
 date.innerHTML= `${days.getDate()} ${Months[days.getMonth()]}`
 country.innerHTML=result.location.name
  maxtemp_c.innerHTML=result.current.temp_c
  icon.setAttribute('src' ,`https:${result.current.condition.icon} `)
  weatherCondition.innerHTML=result.current.condition.text
  humidty.innerHTML= result.current.humidity
  Wind.innerHTML=result.current.wind_kph
  Compass.innerHTML=result.current.wind_dir

}

function DissplayNextDays(){
  
   for (let i=0 ; i<nextDay.length ; i++ ){
    nextDay[i].innerHTML= weekDays[new Date(result.forecast.forecastday[i+1].date).getDay()];
    nextDay_icon[i].setAttribute('src' ,`https:${result.forecast.forecastday[i+1].day.condition.icon}`)
    nexday_degree[i].innerHTML= result.forecast.forecastday[i+1].day.maxtemp_c ;
    nextDay_description[i].innerHTML=result.forecast.forecastday[i+1].day.condition.text
   
}
}
Find_City.addEventListener("keyup", function () {
  
  curentCity = Find_City.value
  console.log(curentCity)
  getData(curentCity)
  
});































// function display (){
//   country.innerHTML = result.location.name;
//   num.innerHTML = result.current.temp_c;
//   let src = result.current.condition.icon;
//   icon.setAttribute("src", src);
//   weatherCondition.innerHTML = result.current.condition.text;
//   weatherCondition1.innerHTML =
//   result.forecast.forecastday[1].day.condition.text;
//   weatherCondition2.innerHTML =
//   result.forecast.forecastday[2].day.condition.text;
//   let src2 = result.forecast.forecastday[0].day.condition.icon;
//   image.setAttribute("src", src2);
//   num1.innerHTML = result.forecast.forecastday[1].day.maxtemp_c;
//   let src3 = result.forecast.forecastday[2].day.condition.icon;
//   image3.setAttribute("src", src3);
//   num2.innerHTML = result.forecast.forecastday[2].day.maxtemp_c;
//   const ForecastDay=result.forecast.forecastday[0].date
//   const date = new Date(ForecastDay)
//   const datastr = date.toLocaleDateString("en-US", {
//     weekday: "long"
  
//   });
//   const ForecastDay2=result.forecast.forecastday[1].date
//   const date2 = new Date(ForecastDay2)
//   const datastr2 = date2.toLocaleDateString("en-US", {
//     weekday: "long"
  
//   });
//   console.log(datastr2)
//   day2.innerHTML=datastr2
//   const ForecastDay3=result.forecast.forecastday[2].date
//   const date3 = new Date(ForecastDay3)
//   const datastr3 = date3.toLocaleDateString("en-US", {
//     weekday: "long"
  
//   });
//   console.log(datastr3)
//    day3.innerHTML=datastr3
//   const datastr1 = date.toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric"
//   });
  
//   Day.innerHTML=datastr
//   forDate.innerHTML=datastr1

// }
// city.addEventListener("keyup", function (e) {
//   console.log(e.target.value)
//  para = e.target.value;
//   getData(para);
  
// });
