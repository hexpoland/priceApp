<template>
  <div class="app">
    <topToolbar />
    <v-content class="content">
      <inputComp />
      <partsList @inputActive="inputHandler" v-if="inputActive" @sendorder="sendOrder" />
      <webshopBasket />
    </v-content>
    <bottomNav />
  </div>
</template>

<script>
import topToolbar from "@/components/TopToolbar";
import bottomNav from "@/components/BottomNav";
import inputComp from "@/components/Input";
import partsList from "@/components/PartsList";
import webshopBasket from "@/components/WebshopBasket";
export default {
  components: {
    topToolbar,
    bottomNav,
    inputComp,
    partsList,
    webshopBasket
  },
  data: () => {
    return {
      inputActive: false,
      snackbar: true
    };
  },
  computed: {
    inputHandler() {
      console.log("catch input");
      this.inputActive = true;
    },
    sendOrder() {
      if (this.selectedParts) console.log(`this arr wil be sended `);
    }
  }
};
</script>

<style>
* {
  font-family: "Roboto";
}
html,
body {
  background-color: #1976d2;
  overflow: hidden;
  height: 100%;
  -webkit-overflow-scrolling: none;
  position: fixed;
  width: 100%;
}
.app {
  width: 100vm;
  height: 100%;
  background-color: white;
}
</style>