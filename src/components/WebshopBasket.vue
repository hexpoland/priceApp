<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
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
  methods: {
    async getWebshopItems() {
      let user = this.$store.state.setting[0];

      console.log("get webshop");
      axios
        .get("https://partsnpriceapi.herokuapp.com/webshopBasket", {
          crossdomain: true,
          headers: { "Access-Control-Allow-Origin": "*" },
          params: { username: user.username, pass: user.password }
        })
        .then(res => {
          console.log("I get webshop items");
          this.items = res.data.webshopItems;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getWebshopItems();

    this.$root.$on("webshopButton", () => {
      this.dialog = true;
    });
  },
  created() {}
};
</script>

<style></style>
