let city = document.getElementById("city");
console.log(city)
let find = document.getElementById("find");
let num = document.getElementById("num");
let country = document.getElementById("country");
let icon = document.getElementById("icon");
let image2 = document.getElementById("image");
let weatherCondition = document.getElementById("weather-condition");
let weatherCondition1 = document.getElementById("weather-condition1");
let weatherCondition2 = document.getElementById("weather-condition2");
let num1 = document.getElementById("num1");
let image3 = document.getElementById("image3");
let num2 = document.getElementById("num2");
let Day=document.getElementById('Day')
let forDate = document.getElementById('date')
let day2=document.getElementById('day2')
let day3=document.getElementById('day3')
let result;
 

async function getData( para ) {
  let data;
  if(para!=null&&para!=""){
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${para}&days=3`
    );
  }
  else{
    data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=london&days=3`
    );
    
  }
  // console.log(para);
  
  result = await data.json();
  // console.log(result);

  console.log(result);
  display()
}
getData()
function display (){
  country.innerHTML = result.location.name;
  num.innerHTML = result.current.temp_c;
  let src = result.current.condition.icon;
  icon.setAttribute("src", src);
  weatherCondition.innerHTML = result.current.condition.text;
  weatherCondition1.innerHTML =
  result.forecast.forecastday[1].day.condition.text;
  weatherCondition2.innerHTML =
  result.forecast.forecastday[2].day.condition.text;
  let src2 = result.forecast.forecastday[0].day.condition.icon;
  image.setAttribute("src", src2);
  num1.innerHTML = result.forecast.forecastday[1].day.maxtemp_c;
  let src3 = result.forecast.forecastday[2].day.condition.icon;
  image3.setAttribute("src", src3);
  num2.innerHTML = result.forecast.forecastday[2].day.maxtemp_c;
  const ForecastDay=result.forecast.forecastday[0].date
  const date = new Date(ForecastDay)
  const datastr = date.toLocaleDateString("en-US", {
    weekday: "long"
  
  });
  const ForecastDay2=result.forecast.forecastday[1].date
  const date2 = new Date(ForecastDay2)
  const datastr2 = date2.toLocaleDateString("en-US", {
    weekday: "long"
  
  });
  console.log(datastr2)
  day2.innerHTML=datastr2
  const ForecastDay3=result.forecast.forecastday[2].date
  const date3 = new Date(ForecastDay3)
  const datastr3 = date3.toLocaleDateString("en-US", {
    weekday: "long"
  
  });
  console.log(datastr3)
   day3.innerHTML=datastr3
  const datastr1 = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric"
  });
  
  Day.innerHTML=datastr
  forDate.innerHTML=datastr1

}
city.addEventListener("keyup", function (e) {
  console.log(e.target.value)
 para = e.target.value;
  getData(para);
  
});
