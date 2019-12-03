<template>
  <div class="card slide-in-bottom">
    <v-card
    min-height="300"
    :max-width="setCardSize()"
    :min-width="setCardSize()"
    @click="$emit('card-clicked')"
    >
      <v-card-title v-if="backBtn">
        <a>
          <v-icon
          class="primary--text"
          size="32"
          @click.stop="$emit('back-btn-clicked')">
          fa-arrow-circle-left
          </v-icon>
        </a>
      </v-card-title>
      <v-card-text class="card-text">
        <div class="mb-4">
          <span class="primary--text"><b>{{empresa.nome}}</b></span><br/>
          Razão Social
        </div>
        <div class="mb-4">
          <span class="primary--text"><b> {{empresa.cnpj}}</b></span><br/>
          CNPJ
        </div>
        <div class="mb-4">
          <span class="primary--text">
            <b>
              {{`${empresa.logradouro}
               ${empresa.numero}
               ${empresa.bairro}
               ${empresa.municipio}`}}
            </b>
          </span>
          <br/>
          Endereço
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    empresa: Object,
    backBtn: Boolean
  },
  methods: {
    setCardSize () {
      return this.$vuetify.breakpoint.xsOnly ? '250' : '320'
    }
  }
}
</script>
