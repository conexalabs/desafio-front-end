import Vue from 'vue'

Vue.filter('unmaskNumber', number => {
  if (number) {
    return number.replace('(', '').replace(')', '').replaceAll(' ', '').replaceAll('.', '').replace('-', '').replace('/', '').replaceAll('+', '')
  }
})
