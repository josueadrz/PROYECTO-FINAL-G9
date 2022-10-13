function pizzaDefault() {

  let mapDefault = document.getElementById("map")

  let defaultURL = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsXvWDzrPBZERksmlW6uTzRw&key=AIzaSyC1GwuWtjOqNc8mzk0sKlnBGx-_GVD-xXI"

  mapDefault.innerHTML = `<iframe height="350" src="${defaultURL}"></iframe>`
}

function findMe() {
  let output = document.getElementById("map");

  /* verificar si soporta geolocalizacion */
  if (navigator.geolocation) {
    output.innerHTML = `<p class="ubcOn">Exelente tu navegador soporta Geolocalizacion</p>`;
  } else {
    output.innerHTML = `<p class="ubcOff">No te preocupes aunque tu navegador no soporta Geolocalizacion igual podemos hacer el delivery solo llamanos</p>`;
  };

  /* obtenemos latitud y longitud */
  function localizacion(posicion) {
    let latitude = posicion.coords.latitude;
    let longitude = posicion.coords.longitude;

    let imgURL = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=AIzaSyC1GwuWtjOqNc8mzk0sKlnBGx-_GVD-xXI`;

    output.innerHTML = `<iframe height="350" src="${imgURL}"></iframe>`
  }

  function error() {
    Swal.fire({
      title: "Upsss",
      text: "No se pudo obtener tu ubicacion, por favor Activa tu ubicacion",
      icon: "Error"
    })
  }

  navigator.geolocation.getCurrentPosition(localizacion, error);
}

pizzaDefault()





/* let map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8
}); */


