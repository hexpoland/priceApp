<template>
  <div>
    <topToolbar />
    <v-content class="content">
      <inputComp />
      <partsList @inputActive="inputHandler" v-if="inputActive" />
    </v-content>
    <bottomNav />
  </div>
</template>

<script>
import topToolbar from "@/components/TopToolbar";
import bottomNav from "@/components/BottomNav";
import inputComp from "@/components/Input";
import partsList from "@/components/PartsList";
export default {
  components: {
    topToolbar,
    bottomNav,
    inputComp,
    partsList
  },
  data: () => {
    return {
      inputActive: false
    };
  },
  computed: {
    inputHandler() {
      console.log("catch input");
      this.inputActive = true;
    }
  }
};
</script>

<style>
* {
  font-family: "Roboto";
}
.content {
}
</style>