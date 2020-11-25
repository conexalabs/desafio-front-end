app.component('slider', {
  created() {
    var vw = window.innerWidth; // TO-DO: find properly way to get an viewport value;
    var elWidth = 260;          // TO-DO: find properly way to get an element attribute;
    var elements = [];

    this.size = Math.round( (vw - 100) / elWidth );

    do {
      elements = elements.concat([...this.objects]);
    } while(elements.length < this.size + 2);

    this.elements = elements.map(e => e = {...e});
  },
  props:{
    objects: Object,
  },
  template:/*html*/`
    <div id="slider" class="container flex-column-center">
      <transition-group name="slider-list" class="slider" tag="div"
        @enter="enter"
        @leave="leave"
      >
        <card v-for="(company, index) in elements"
          class="element card"
          :class="elementVisibility(index)"
          :key="company"
          :index="index"
          :social="company.social"
          :cnpj="company.cnpj"
          :address="company.address"
        />
      </transition-group>

      <div>
        <button class="button slider-button"
          :class="{ 'slider-no-pointer-events' : inTransition }"
          @click="prev"
        >
          <i class="fa fa-arrow-circle-left"></i>
        </button>
        <button class="button slider-button" @click="shuffle">Shuffle</button>
        <button class="button slider-button" @click="next"><i class="fa fa-arrow-circle-right"></i></button>
      </div>
    </div>`,
  data() {
    return {
      elements: [],
      inTransition: false,
    }
  },
  methods: {
    enter(){
      console.log("enter");
      this.inTransition = true;
    },
    leave(){
      console.log("leave");
      this.inTransition = false;
    },
    elementVisibility(i) {
      var elementClass = "";
      var count = this.elements.length;
      var size  = this.size;
      var start, end;

      start = Math.floor( (count - size) / 2 );
      end = count - start - (size % 2);
      console.log("size:", size, "count:", count, "start:", start, "end:", end);

      if(start <= i && i <= end) {
        elementClass += ( i == start || i == end) ? 'card-inactive' :  'card-active';
      } else {
        elementClass += 'card-hidden';
      }

      return elementClass;
    },
    shuffle() {
      this.elements = _.shuffle(this.elements);
    },
    next() {
      this.elements.push(this.elements.shift());
    },
    prev() {
      this.elements.unshift(this.elements.pop());
    },
  },
  computed: {
    count() {
      return this.objects.length;
    },
  }
})