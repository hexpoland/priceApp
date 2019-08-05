<template>
  <div class="topToolbar">
    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ustawienia</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pomoc</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app class="blue darken-2" dark>
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>

      <v-toolbar-title class="font-weight-thin">
        Parts'n
        <strong>Price</strong>
      </v-toolbar-title>
      <v-toolbar-title class="allPrice">{{totalPrice}} zł</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {},

  data: () => {
    return {
      showMenu: false,
      totalPrice: 0
    };
  },
  mounted() {
    this.$root.$on("toggleItemAdd", e => {
      console.log(e);
      this.addToPrice(e);
    });
    this.$root.$on("toggleItemRemove", e => {
      console.log(e);
      this.removeToPrice(e);
    });
    this.$root.$on("removeItem", () => {
      this.totalPrice = 0;
    });
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
    addToPrice: function(e) {
      console.log(this.totalPrice);
      this.totalPrice =
        Number.parseInt(this.totalPrice) + Number.parseInt(e + 1);
    },
    removeToPrice: function(e) {
      this.totalPrice = this.totalPrice =
        Number.parseInt(this.totalPrice) - Number.parseInt(e + 1);
    }
  },
  computed: {}
};
</script>

<style >
.topToolbar {
  z-index: 2;
}
</style>