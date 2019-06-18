<template>
  <v-container class="mainView" v-bind:class="(partsNumber.length>8?'active':'nonActive')">
    <input class="partInput" type="text" v-model="partsNumber" placeholder="podaj numer części...">
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
      // definicja cennika tutaj lepszy perfomrance
      // let cennik = $.getJSON('cennik.json', e => {
      let parts = this.priceList;

      if (findPart.lenght < 8) {
        return;
      }
      findPart = findPart.toUpperCase();
      let temp;
      let founded = parts.filter((el, index) => {
        return el.properties.numer.match(findPart);
      });
      //   console.log(founded);
      founded.every((el, ind) => {
        if (el.properties.cena > 0) {
          console.log("Cena niezerowa");
          // notif.options.items[0].title = el.properties.numer;
          // notif.options.items[0].message = el.properties.nazwa + '   ' + el.properties.cena;
          // notif.show();
          //   toList(el);
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
                // alert('Znalaziono:  ' + el.properties.nazwa + ' Cena: ' + el.properties.cena)
                // toList(el);
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
      //   }) // getJson first version
    },
    searchParts() {
      this.isActive = !this.isActive;
      this.szukaj(this.partsNumber);
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