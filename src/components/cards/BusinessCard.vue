<template>
  <v-card
    rounded="lg"
    @click="$emit('onClick')"
    class="pb-4"
    :class="hasBackfowardButton && 'cursor-auto elevation-3'"
  >
    <v-card-text class="pa-5 primary--text">
      <v-row v-if="hasBackfowardButton">
        <v-col class="py-2">
          <font-awesome-icon
            size="2x"
            icon="arrow-circle-left"
            class="cursor-pointer"
            :color="$vuetify.theme.defaults.light.primary"
          ></font-awesome-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold">Conexão Hub de Inovação</v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="body-1">Razão Social</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold">324.454.0001-76</v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="body-1">CNPJ</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold">Avenida Padre Cicero 1571</v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="body-1">Endereço</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BusinessCard',
  props: {
    companyName: { type: String, required: true },
    cnpj: { type: String, required: true },
    address: { type: String, required: true },
    hasBackfowardButton: { type: Boolean, default: false }
  }
}
</script>
