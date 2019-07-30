<template>
  <section>
    <div class="container">
      <blank-state v-if="!companies"></blank-state>
      <carousel
        v-if="companies && companies.length"
        class="list col-sm-10 col-md-10 col-lg-12"
        :navigationEnabled="true"
        :navigation-next-label="navigationNext"
        :navigation-prev-label="navigationPrev"
        :perPageCustom="[[320, 1], [425, 1], [768, 2], [1024, 3], [1440, 4]]"
      >
        <slide
          v-for="(company, index) in companies"
          :key="index"
          @slideclick="handleSlideClick(company)"
        >
          <div class="box">
            <company-card :company="company" />
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import BlankState from './BlankState.vue';
import CompanyCard from './CompanyCard.vue';

export default {
  name: 'List',
  props: ['companies', 'loading'],
  computed: {
    navigationNext() {
      return `<span style="font-size: 48px; color: white; margin-left: -20px">></span>`;
    },
    navigationPrev() {
      return `<span style="font-size: 48px; color: white;  margin-right: -20px"><</span>`;
    },
  },
  components: {
    Carousel,
    Slide,
    BlankState,
    CompanyCard,
  },
  methods: {
    handleSlideClick(company) {
      this.$router.push({ path: `/maps/${company.cnpj.replace(/\D/g, '')}` });
    },
  },
};
</script>

<style lang="sass">
    section
      height: calc(100vh - 235px)
      background: $gradient
      .container
        .blank-state
          padding-top: 130px
          text-align: center
        .list
          margin: 0 auto
          padding-top: 130px
          .box
            padding: 0 10px
          .card
            cursor: pointer

</style>
