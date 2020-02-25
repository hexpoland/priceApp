<template>
  <div class="navFix">
    <v-bottom-nav app fixed :active.sync="activeItem" :value="true">
      <v-btn @click="removeItem" flat color="primary" value="top">
        <span>Usuń</span>
        <v-icon>delete</v-icon>
      </v-btn>
      <v-btn flat v-if="spinner" color="primary">
        <v-progress-circular class="spinner" indeterminate color="green"></v-progress-circular>
      </v-btn>
      <v-btn v-if="!spinner" @click="webShop" flat color="primary" value="code">
        <!-- <v-btn v-if="!spinner" flat color="primary" value="code"> -->
        <span>WebShop</span>
        <v-icon color="blue">shop</v-icon>
      </v-btn>
      <!-- after commit  -->

      <v-btn @click="sendOrderClick" flat color="primary" value="favorites">
        <span>Wyślij</span>
        <v-icon>email</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      activeItem: "",
      spinner: false
    };
  },
  methods: {
    sendOrderClick() {
      this.$root.$emit("sendorder");
    },
    removeItem() {
      //czysci liste
      this.$root.$emit("removeItem");
      //animacja inputa
      this.$root.$emit("deletedItems");
    },
    webShop() {
      this.spinner = true;
      let user = this.$store.state.setting[0];
      let itemToWebshop = "";
      let selectedItem = this.$store.state.selectedItem;
      selectedItem.forEach(element => {
        itemToWebshop = itemToWebshop + element.numer + "&";
      });
      axios
        .get("https://partsnpriceapi.herokuapp.com/?", {
          params: {
            username: user.username,
            pass: user.password,
            pnumber: itemToWebshop
          }
        })
        .then(e => {
          console.log(e);
          this.spinner = false;
        })
        .catch(err => {
          this.spinner = false;
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.spinner {
}
.navFix {
  position: fixed;
}
</style>