<template>
  <div class="resultView">
    <v-list two-line>
      <template v-for="(item,index) in result">
        <v-list-tile ripple @click="toggle(index)">
          <v-list-tile-content>
            <v-list-tile-title>{{item.properties.numer}}</v-list-tile-title>
            <v-list-tile-sub-title>{{item.properties.nazwa}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{item.properties.cena}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
            <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>

            <v-icon v-else color="yellow darken-2">star</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "PartsList",
  props: {
    result: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      selected: [],
      selectedParts: []
    };
  },
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
        this.selectedParts.splice(i, 1);
        console.log(this.selectedParts);
      } else {
        this.selected.push(index);

        this.selectedParts.push({
          id: index,
          numer: this.result[index].properties.numer,
          nazwa: this.result[index].properties.nazwa,
          cena: this.result[index].properties.cena
        });
        console.log(this.selectedParts);
      }
    }
  }
};
</script>

<style scoped>
.resultView {
  position: absolute;
  width: 100%;
  top: 60%;
  left: 0px;
  max-height: 400px;
  overflow-y: scroll;
}
@media only screen(max-width:375) {
  .resultView {
    max-height: 100px;
  }
}
</style>
