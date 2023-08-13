const API_KEY = "cfa14e4abedc70a4e4fc69237b24c8bc";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weater = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weater.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);