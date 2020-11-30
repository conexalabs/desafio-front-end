app.component('GoogleMaps', {
  template: /*html*/ `
  <div class="position-relative">
    <router-link to="/">
      <button class="button button-back">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-arrow-left fa-stack-1x"></i>
        </span>
      </button>
    </router-link>

    <div id="map"></div>
  </div>
  `,
  mounted() {
    console.log(google);

    const coordinates = { lat: -16.70, lng: -49.25 };

    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 13,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: coordinates,
      map: map,
    });

  }
})
