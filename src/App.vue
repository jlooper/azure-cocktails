<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body {
  background-color: #003366;
}
h1,
h2 {
  font-family: "BioRhyme", serif;
  color: white;
}
.headline {
  font-size: 3em;
}
#app {
  font-family: "Cabin", sans-serif;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 1.5em;
}
</style>
