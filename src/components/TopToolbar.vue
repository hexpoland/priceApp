<template>
  <div class="topToolbar">
    <v-dialog v-model="settingsDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Ustawienia</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="user.email" label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="user.username" label="Login webshop*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="user.password"
                  label="Hasło Webshop*"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-checkbox v-model="saveSettings" label="Zapamiętaj"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*pola wymagane</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="settingsDialog = false">Anuluj</v-btn>
          <v-btn color="blue darken-1" flat @click="saveFunc">Zapisz</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list dense>
        <v-list-tile @click="(settingsDialog=true),(showMenu=false)">
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
import store from "@/store.js";
export default {
  props: {},

  data: () => {
    return {
      showMenu: false,
      totalPrice: 0,
      settingsDialog: false,
      user: {
        email: "",
        username: "",
        password: ""
      },
      saveSettings: false
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
  created() {
    console.log("Creted");
    this.userSetting();
  },
  methods: {
    saveFunc: function() {
      this.settingsDialog = false;
      if (this.saveSettings) {
        this.$store.commit("SAVE_SETTINGS", this.user);
      }
    },
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
  computed: {
    userSetting: function() {
      if (this.$store.state.setting) {
        this.user = this.$store.state.setting[0];
      }
    }
  }
};
</script>

<style >
.topToolbar {
  z-index: 2;
}
</style>