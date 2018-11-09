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
