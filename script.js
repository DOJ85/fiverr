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

//geolocation.js
// How to use Navigator.geolocation
//
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
    // spans = document.querySelectorAll('p span');
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
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
