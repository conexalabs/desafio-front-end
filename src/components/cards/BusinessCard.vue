<template>
  <v-card
    rounded="lg"
    @click="$emit('onClick')"
    height="100%"
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
            @click="() => $router.push({ name: 'Home' })"
            :color="$vuetify.theme.defaults.light.primary"
          ></font-awesome-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold">{{companyName}}</v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="body-1">Razão Social</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold">{{cnpj}}</v-col>
          </v-row>
          <v-row class="mt-0">
            <v-col class="body-1">CNPJ</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="pb-0 subtitle-1 font-weight-bold text-wrap">{{address}}</v-col>
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

<style lang="sass" scoped>
.text-wrap
  word-wrap: break-word
</style>
