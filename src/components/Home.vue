<template>
  <div class="hello">
    <h1 class="headline">Azure Cocktails</h1>
    <p>Blue cocktails from the classic Mr. Boston book</p>
    <div class="container">
      <div v-for="cocktail in cocktails" :key="cocktail.name" class="card">
        <h2>{{cocktail.name}}</h2>
        <img class="cocktail-img" :src="'/assets/' + cocktail.RowKey + '.png'">
        <p>{{cocktail.measurement1}} {{cocktail.ingredient1}}</p>
        <p>{{cocktail.measurement2}} {{cocktail.ingredient2}}</p>
        <p>{{cocktail.measurement3}} {{cocktail.ingredient3}}</p>
        <p>{{cocktail.measurement4}} {{cocktail.ingredient4}}</p>
        <p>{{cocktail.measurement5}} {{cocktail.ingredient5}}</p>
        <p>{{cocktail.measurement6}} {{cocktail.ingredient6}}</p>
        <p>{{cocktail.instructions}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["cocktails"])
  },

  created() {
    this.$store.dispatch("fetchCocktails");
  }
};
</script>

<style scoped>
h2 {
  height: 100px;
}
.container {
  display: grid;
  /* Display as a Grid */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* repeat = as many times as you can fit */
  /* auto-fit = fit as many items on the line as possible, go bigger if you need to */
  /*minmax = (min size, max size) = the minimum size the column should be is 200px, but if there's space then give them all 1fr of that width. */
  grid-gap: 10px;
}
.card {
  background-color: #0099ff;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
.cocktail-img {
  max-width: 200px;
  max-height: 300px;
  border-radius: 10px;
}
</style>

