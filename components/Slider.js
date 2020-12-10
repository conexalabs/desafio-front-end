app.component('Slider', {
  props: {
    elements: Object,
    elementWidth: Number,
    sliderPivot: Object,
    sliderWidth: Number,
  },
  template: /*html*/ `
    <div class="container flex-column-center">
      <div class="slider" :class="{'slider-hidden-controls' : !hasEnoughElements}">
        <div class="slider-control slider-control-left"
          @click="prev()"
          @mouseenter="prev()">
          <span class="slider-button slider-button-left" />
        </div>

        <transition-group class="slider-content" name="slider-list" tag="div">
          <slot v-for="(element, index) in sliderList"
            :visibility="elementVisibility(index)"
            :element="element"
          ></slot>
        </transition-group>

        <div class="slider-control slider-control-right"
          @click="next()"
          @mouseenter="next()">
          <span class="slider-button slider-button-right" />
        </div>
      </div>
    </div>`,

  data() {
    return {
      sliderList: [],
      sliderQueue: [],
      count: 0,
    }
  },

  computed: {
    hasEnoughElements() {
      return this.elements.length > this.visibleElements;
    },

    sideLength() {
      return (this.sliderList.length - this.visibleElements) / 2;
    },

    visibilityStart(){
      return this.sideLength - 1;
    },

    visibilityEnd() {
      return this.sliderList.length - this.sideLength;
    },

    visibleElements() {
      return 1 + Math.floor( Math.abs(this.sliderWidth - 400) / this.elementWidth );
    },
  },

  created() {
    if(this.elements.length) this.initializeSlider();
  },

  mounted() {
    if(this.hasEnoughElements) this.adaptSliderList();
  },

  watch: {
    elements: function(elements) {
      let last = elements[elements.length - 1];
      this.updateSliderList(last);
    },

    sliderPivot: function(element) {
      this.updateSliderPosition(element);
    },

    sliderWidth: _.debounce(function(_value) {
      this.adaptSliderList();
      this.count++;
    }, 400),
  },

  methods: {
    next: _.throttle(function () {
      this.rotateSliderLeft();
    }, 600),

    prev: _.throttle(function () {
      this.rotateSliderRight();
    }, 600),

    initializeSlider() {
      this.sliderList = this.elements.map(e => e = {...e});
      this.sliderQueue = this.elements.map(e => e = {...e});
    },

    adaptSliderList() {
      let length = this.elements.length;
      let desiredLength = length;

      if(this.hasEnoughElements) {
        let minimal = this.visibleElements + 4;

        if(minimal % 2 == 0) {
          while(desiredLength < minimal || desiredLength % 2)  desiredLength += length;
        } else {
          if(length % 2 == 0) {
            desiredLength += 1;
            const middle = Math.floor((length-1)/2);
            this.sliderList.push(this.sliderQueue[middle]);
          }
          while(desiredLength < minimal) desiredLength += length;
        }
      }

      while(this.sliderList.length < desiredLength)
        this.sliderList.push({...this.rotateQueueLeft()});
      while(this.sliderList.length > desiredLength)
        this.sliderList.pop(), this.rotateQueueRight();

      return this.sliderList;
    },

    elementVisibility(i) {
      elementClass = '';

      if(this.hasEnoughElements) {
        var end = this.visibilityEnd;
        var start = this.visibilityStart;

        if (i <= start || i >= end) {
          elementClass = 'slider-element-' + (i == start || i == end ? 'disabled' : 'hidden');
        }
      }

      return elementClass;
    },

    rotateQueueLeft() {
      let first = this.sliderQueue.shift();
      this.sliderQueue.push(first);

      return first;
    },

    rotateQueueRight() {
      let last = this.sliderQueue.pop();
      this.sliderQueue.unshift(last);

      return last;
    },

    rotateSliderLeft() {
      this.sliderList.push(this.sliderList.shift());
      this.rotateQueueLeft();
    },

    rotateSliderRight() {
      this.sliderList.unshift(this.sliderList.pop());
      this.rotateQueueRight();
    },

    updateSliderList(element) {
      this.sliderQueue.unshift(element);
      this.adaptSliderList();
    },

    updateSliderPosition(element) {
      if(element !== undefined) {
        let k = this.sliderList.findIndex( e => _.isEqual(e, element) );
        let count = 0;

        if(k >= 0) {
          const middle = Math.floor((this.sliderList.length-1) / 2);

          while(count < this.sliderList.length && !_.isEqual(this.sliderList[middle], element)) {
            (k <= middle) ? this.rotateSliderRight() : this.rotateSliderLeft();
            count++;
          }
        }
      }
    },
  }
})