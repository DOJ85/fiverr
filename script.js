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

// window.fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&lang=en&appid=62133f60aa740596c21f37130a69970c')
//   .then(res => res.json())
//   .then(resJson => console.log(resJson))

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
