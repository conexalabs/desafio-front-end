<template>
  <div id="app" class="container-fluid">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/reset-css/index.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: $textos;
  padding: 0;
  overflow: hidden;
  .conteudo {
    background-image: linear-gradient($gradiente) ;
    height: 70vh;
  }
  .nav {
    height: 30vh;
  }
}
// transition
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate(2em);
}

.fade-enter-active, .fade-leave-active {
   transition: all .3s ease;
}
</style>
