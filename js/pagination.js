function openTab(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-amber", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-amber";
}
