<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card>
        <v-toolbar dark class="blue darken-2" color="primary">
          <v-btn icon @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-thin">
            Web
            <strong>Shop</strong>
          </v-toolbar-title>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dialog: false,
      items: []
    };
  },
  mounted() {
    this.$root.$on("webshopButton", () => {
      this.dialog = true;
    });
  },
  created() {
    let user = this.$store.state.setting[0];

    axios
      .get("https://partsnpriceapi.herokuapp.com/webshopBasket", {
        params: { username: user.username, pass: user.password }
      })
      .then(res => {
        this.items = res.data.webshopItems;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>