function findMe() {
  let output = document.getElementById("map");
  
  /* verificar si soporta geolocalizacion */
  if (navigator.geolocation) {
    output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
  } else {
    output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
  }

  /* obtenemos latitud y longitud */
  function localizacion(posicion) {
    let latitude = posicion.coords.latitude;
    let longitude = posicion.coords.longitude;

    let imgURL = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=AIzaSyC1GwuWtjOqNc8mzk0sKlnBGx-_GVD-xXI`;

    output.innerHTML = `<iframe height="250" width="80" src="${imgURL}"></iframe>`
    /* output.innerHTML = `<p>Latitud: ${latitude} <br> Longitud: ${longitude} </p>`; */
  }
  function error(){
    output.innerHTML = "<p>No se pudo obtener tu ubicacion</p>";
  }
  navigator.geolocation.getCurrentPosition(localizacion,error);
}



/* let map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
}); */


