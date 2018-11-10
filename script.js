function toggleSideBar() {
  /* Reveal the Side Bar */
  document.getElementById("side-bar").classList.toggle("active");

  /* Cover the body */
  document.getElementById("cover").classList.toggle("active");


  /* Push toggle button to the right */
  document.getElementById("toggleSideBar").classList.toggle("active");
}

function closeCover(){
  document.getElementById("cover").classList.remove("active");
  document.getElementById("side-bar").classList.remove("active");
  document.getElementById("toggleSideBar").classList.remove("active");
}


let G, options, spans;

document.addEventListener('DOMContentLoaded', init);

function init(){
    if(navigator.geolocation){
        let giveUp = 1000 * 30;  //30 seconds
        let tooOld = 1000 * 60 * 60;  //one hour
        options ={
            enableHighAccuracy: false,
            timeout: giveUp,
            maximumAge: tooOld
        }

        navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
    }else{
        //using an old browser that doesn't support geolocation
    }
}

function gotPos(position){
  window.fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=62133f60aa740596c21f37130a69970c')
  .then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  document.getElementById('location').innerHTML = data.name;
  document.getElementById('temp').innerHTML = "Temperature: " + data.main.temp + "°C";
  document.getElementById('weather').innerHTML = "Humidity: " + data.main.humidity + "%";
  document.getElementById('windSpeed').innerHTML = "Wind Speed: " + (data.wind.speed * 3.6).toFixed(2) + "Km/h";
}).catch(err => {
  // Do something for an error here
});
}

function posFail(err){
    //err is a number
    let errors = {
        1: 'No permission',
        2: 'Unable to determine',
        3: 'Took too long'
    }
    // document.querySelector('h1').textContent = errors[err];
}
