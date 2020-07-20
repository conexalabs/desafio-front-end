<template>
  <div
    id="app"
    :class="{ darken: theme === 'darken', lighten: theme === 'lighten' }"
  >
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <div>
        <button @click="toggleTemaNoturno">Noturno</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "lighten"
    };
  },
  methods: {
    toggleTemaNoturno() {
      this.theme === "lighten"
        ? (this.theme = "darken")
        : (this.theme = "lighten");
    }
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.darken {
  background-color: #2c3e50;
  color: #eee;

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #ececec;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

.lighten {
  background-color: aliceblue;
  color: #333;

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
