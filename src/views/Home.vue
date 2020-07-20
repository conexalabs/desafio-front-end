<template>
  <div class="home">
    <SwiperCpnj />
    <div class="container">
      <div class="columns">
        <div class="column">
          <input v-model="campoBuscaCpnj" />
        </div>
        <div class="column">
          {{ resultados }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { debounce } from "lodash";
import CpnjService from "@/services/CpnjService";
import SwiperCpnj from "@/components/SwiperCpnj.vue";

export default {
  name: "Home",
  components: {
    SwiperCpnj,
  },
  data() {
    return {
      campoBuscaCpnj: "",
      resultados: [],
    };
  },
  watch: {
    campoBuscaCpnj: debounce(function(valorInput) {
      if (valorInput !== "") {
        CpnjService.buscarCpnj(valorInput)
          .then(response => response.json())
          .then(json => {
            console.log(json);
          });
      }
    }, 500)
  }
};
</script>
