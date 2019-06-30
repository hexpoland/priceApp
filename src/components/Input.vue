<template>
  <v-container class="mainView" v-bind:class="(isActive?'active':'nonActive')">
    <input
      class="partInput"
      @input="activeAnim"
      @keyup.enter="searchParts"
      type="text"
      v-model="partsNumber"
      placeholder="podaj numer części..."
    />
    <v-icon class="search" @click="searchParts">search</v-icon>
  </v-container>
</template>

<script>
import cennik from "../cennik.json";

export default {
  data: () => {
    return {
      priceList: cennik.features,
      isActive: false,
      partsNumber: ""
    };
  },
  methods: {
    szukaj(findPart) {
      let parts = this.priceList;

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
          console.log("Cena niezerowa");
          alert(
            "Rational Price Extension\n\n" +
              "\tNumer:  " +
              el.properties.numer +
              "\n" +
              "\tNazwa:  " +
              el.properties.nazwa +
              "\n" +
              "\tCena:   " +
              el.properties.cena +
              ",- netto\n\n" +
              "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n"
          );
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
                alert(
                  "Rational Price Extension\n\n" +
                    "\tNumer:  " +
                    el.properties.numer +
                    "\n" +
                    "\tNazwa:  " +
                    el.properties.nazwa +
                    "\n" +
                    "\tCena:   " +
                    el.properties.cena +
                    ",- netto\n\n" +
                    "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n"
                );
              }
            });
          }
        }
      });
    },
    searchParts() {
      this.szukaj(this.partsNumber);
    },
    activeAnim() {
      this.isActive = this.partsNumber !== "" ? true : false;
      console.log("Emit input ");
      if (this.isActive) {
        this.$emit("inputActive");
      }
    }
  }
};
</script>

<style>
.active {
  transition: transform 1s ease;

  transform: translateY(-30vh);
  opacity: 0.6;
}
.nonActive {
  transition: transform 1s ease;

  transform: translateY(0);
}
.content {
  padding-top: 56px;
  padding-bottom: 56px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.partInput {
  color: gray;
  padding: 30px;
  font-size: 16px;
  border: 1px solid lightgray;
  width: 50vh;
  height: 50px;
  border-radius: 50px;
  box-shadow: 2px 4px 9px lightgray;
}
.partInput:focus {
  outline: none;
}
.search {
  position: absolute;
  max-width: 50px;
  margin-left: 130px;
}
.mainView {
  display: flex;

  align-items: center;
  justify-content: center;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .partInput {
    width: 100vh;
    height: 50px;
  }
}
</style>