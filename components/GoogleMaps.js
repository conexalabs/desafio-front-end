app.component('GoogleMaps', {
  template: /*html*/ `
  <div class="maps position-relative">
    <info-card
      card-type="maps"
      :id="currentCompany.cnpjNumber"
      :name="currentCompany.name"
      :cnpj="currentCompany.cnpj"
      :address="currentCompany.address"
    />

    <div id="map" class="maps-canvas"></div>
  </div>
  `,
  mounted() {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({
      address: this.address,
    }, function(result, _status) {
      const { bounds, location, viewport } = result[0].geometry;
      const coordinates = bounds ? bounds.getCenter() : location;

      map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        disableDefaultUI: true,
        zoom: 15,
      });

      map.fitBounds(viewport);

      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    });
  },
  computed: {
    ...Vuex.mapState([
      'currentCompany'
    ]),
    address() {
      return this.currentCompany.address;
    }
  }
})
