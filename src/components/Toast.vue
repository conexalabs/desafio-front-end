<template>
  <div>
    <v-snackbar
      :style="customStyle"
      v-model="snackbar"
      :top = "y"
      right
      :timeout="timeout"
      :color="color"
      >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          icon
          color="white"
          v-bind="attrs"
          @click="close"
        >
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    snackbar: { type: Boolean, required: true },
    color: { type: String, required: true },
    text: { type: String, required: true },
    timeout: { type: Number, default: 6000 },
    customStyle: { type: String, default: '' }
  },
  data () {
    return {
      y: 'top',
      x: 'right'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  watch: {
    snackbar (val) {
      if (val === true) {
        setTimeout(() => {
          this.close()
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
</style>
