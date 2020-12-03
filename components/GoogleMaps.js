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
    const goiania = new google.maps.LatLng(-16.681010707655762, -49.25628136315215);
    const geocoder = new google.maps.Geocoder();
    const address = this.currentCompany.address;
    const companyName = this.currentCompany.name;

    var request = {
      query: this.currentCompany.name,
      fields: ['name', 'geometry', 'icon']
    }

    var map = new google.maps.Map(document.getElementById('map'), {
      center: goiania,
      disableDefaultUI: true,
      zoom: 15,
      mapId: "3f20e08f1addea6d",
    });

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        updateMap(map, results[0]);
      } else {
        geocoder.geocode({ address }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            updateMap(map, results[0]);
          }
        });
      }
    });

    function updateMap(map, result) {
      const { bounds, location, viewport } = result.geometry;
      const coordinates = bounds ? bounds.getCenter() : location;

      map.fitBounds(viewport);
      const { OPTIONAL_AND_HIDES_LOWER_PRIORITY, REQUIRED_AND_HIDES_OPTIONAL } = google.maps.CollisionBehavior;


      let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        collisionBehavior: OPTIONAL_AND_HIDES_LOWER_PRIORITY,
        animation: google.maps.Animation.DROP,
        icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
        label: {
          text: result.name || companyName,
          color: '#d22c28',
          className: 'maps-label',
          fontSize: '15px',
          fontWeight: '400'
        },
      });
    }
  },
  computed: {
    ...Vuex.mapState([
      'currentCompany'
    ]),
  }
})
