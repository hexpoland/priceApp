<template>
  <v-container class="mainView" v-bind:class="isActive ? 'active' : 'nonActive'">
    <div class="divInput">
      <span v-if="autoSug" class="suggest">{{ autoSug.properties.nazwa}}...</span>
      <input
        v-on:change="autoSug"
        class="partInput"
        @focus="prevent"
        @keyup.enter="searchParts"
        type="text"
        v-model="partsNumber"
        placeholder="podaj numer części..."
      />
      <v-icon class="searchIco" @click="searchParts">search</v-icon>
    </div>
    <!-- </fieldset> -->
    <div>
      <List class="resultList" v-if="isActive" :result="resultFunc" />
    </div>
  </v-container>
</template>

<script>
import cennik from "../cennik.json";
import List from "@/components/PartsList.vue";
export default {
  components: {
    List
  },
  mounted: function mounted() {
    this.activeAnim();
    //animacja po usunieciu listy
    this.$root.$on("deletedItems", () => {
      this.activeAnim();
    });
  },
  data: () => {
    return {
      priceList: cennik.features,
      isActive: true,
      partsNumber: "",
      resultArray: []
    };
  },
  methods: {
    szukaj(findPart) {
      let parts = this.priceList;
      if (this.autoSug) {
        console.log("DEBUG FAVORITES");
        findPart = this.autoSug.properties.numer;
      }
      if (findPart.lenght < 8) {
        return;
      }
      findPart = findPart.toUpperCase();
      let temp;
      let founded = parts.filter(el => {
        return el.properties.numer.match(findPart);
      });

      founded.every(el => {
        if (el.properties.cena > 0) {
          this.$store.commit("ADD_TO_STORE", el);
        } else {
          if (el.properties.Informacje) {
            console.log("zastapione" + el.properties.Informacje);
            let newNumber = el.properties.Informacje.match(
              /\d\d.\d\d.\d\d\d[A-Z]?/g
            );
            console.log(newNumber);
            if (newNumber === null) {
              newNumber = el.properties.Informacje.match(
                /\d\d\d\d.\d\d\d\d[A-Z]?/g
              );
            }

            temp = parts.filter(el => {
              return Array.isArray(newNumber)
                ? el.properties.numer.match(newNumber[0])
                : el.properties.numer.match(newNumber);
            });
            temp.forEach(el => {
              if (el.properties.cena != "0") {
                this.$store.commit("ADD_TO_STORE", el);
              }
            });
          }
        }
      });
    },
    activeAnim() {
      if (this.$store.state.item.length > 0) {
        this.isActive = true;
        this.$emit("inputActive");
      } else this.isActive = false;
    },
    searchParts() {
      if (this.partsNumber !== "") {
        this.szukaj(this.partsNumber);
        this.partsNumber = "";
        this.activeAnim();
      }
    },
    onlyDot() {
      this.partsNumber = this.partsNumber.replace(",", ".");
    },
    prevent() {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  },
  computed: {
    autoSug: function() {
      let result = "";

      if (this.partsNumber.length > 2) {
        result = this.$store.state.favorites.filter(el => {
          return el.properties.numer.match(this.partsNumber);
        });
        if (result.length > 0) {
          return result[0];
        } else {
          return false;
        }
      }
      return false;
    },
    resultFunc: function() {
      this.resultArray = this.$store.state.item;

      return this.resultArray;
    }
  }
};
</script>

<style>
.suggest {
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  position: absolute;
  margin-top: -32px;
  margin-left: -10px;
  color: rgb(0, 180, 126);
  font-style: italic;
  font-size: 16px;
}

.active {
  transition: transform 1s ease;
  margin-bottom: 20px;
  transform: translateY(-27vh);
  opacity: 0.6;
}
@media only screen and (min-height: 800px) {
  .active {
    transform: translateY(-23vh);
  }
}
.nonActive {
  transition: transform 1s ease;

  transform: translateY(-15vh);
}
.content {
  padding-top: 56px;
  padding-bottom: 56px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divInput {
  position: relative;
  /* display: flex;
  flex-direction: column; */
}
.partInput {
  display: flex;
  color: gray;
  padding: 30px;
  font-size: 16px;
  border: 1px solid lightgray;
  width: 70vw;
  height: 50px;
  border-radius: 50px;
  box-shadow: 2px 4px 9px lightgray;
}

.partInput:focus {
  outline: none;
}
.searchIco {
  position: absolute;
  top: 20px;
  right: 20px;
}
.mainView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.resultList {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .mainView {
    width: auto;
  }
  .partInput {
    position: relative;
    max-width: auto;
    padding: 30px;
    padding-right: 0;
  }
}
</style>
