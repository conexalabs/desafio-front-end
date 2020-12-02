app.component('Slider', {
  props:{
    elements: Object,
  },
  template:/*html*/`
    <div id="slider" class="container flex-column-center">
      <transition-group name="slider-list" class="slider" tag="div">
        <info-card v-for="(company, index) in elements"
          class="element"
          :class="elementVisibility(index)"
          :key="company"
          :social="company.social"
          :cnpj="company.cnpj"
          :address="company.address"
        />
      </transition-group>

      <div>
        <button class="button slider-button" @click="prev">
          <i class="fa fa-arrow-circle-left"></i>
        </button>
        <button class="button slider-button" @click="shuffle">Shuffle</button>
        <button class="button slider-button" @click="next">
          <i class="fa fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>`,
  computed: {
    ...Vuex.mapState([
      'viewportWidth'
    ]),
    threshold() {
      return Math.round( (this.viewportWidth - 100) / 260 );
    },
  },
  methods: {
    elementVisibility(i) {
      var elementClass = "";
      var count = this.elements.length;
      var threshold  = this.threshold;
      var start = Math.floor( (count - threshold) / 2 );
      var end = count - start - (threshold % 2);

      if(start <= i && i <= end) {
        elementClass += ( i == start || i == end) ? 'card-inactive' :  'card-active';
      } else {
        elementClass += 'card-hidden';
      }

      return elementClass;
    },
    shuffle() {
      this.$store.commit('shuffle');
    },
    next() {
      this.$store.commit('rotateListLeft');
    },
    prev() {
      this.$store.commit('rotateListRight');
    },
  },
})