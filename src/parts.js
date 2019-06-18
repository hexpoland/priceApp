function szukaj (findPart) {
  // definicja cennika tutaj lepszy perfomrance
  // let cennik = $.getJSON('cennik.json', e => {
  parts = this.priceList

  if (findPart.lenght < 8) {
    return
  }
  findPart = findPart.toUpperCase()
  let temp
  let founded = parts.filter((el, index) => {
    return el.properties.numer.match(findPart)
  })
  //   console.log(founded);
  founded.every((el, ind) => {
    if (el.properties.cena > 0) {
      console.log('Cena niezerowa')
      // notif.options.items[0].title = el.properties.numer;
      // notif.options.items[0].message = el.properties.nazwa + '   ' + el.properties.cena;
      // notif.show();
      toList(el)
      alert(
        'Rational Price Extension\n\n' +
          '\tNumer:  ' +
          el.properties.numer +
          '\n' +
          '\tNazwa:  ' +
          el.properties.nazwa +
          '\n' +
          '\tCena:   ' +
          el.properties.cena +
          ',- netto\n\n' +
          '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n'
      )
    } else {
      if (el.properties.Informacje) {
        console.log('zastapione' + el.properties.Informacje)
        let newNumber = el.properties.Informacje.match(
          /\d\d.\d\d.\d\d\d[A-Z]?/g
        )
        console.log(newNumber)
        if (newNumber === null) {
          newNumber = el.properties.Informacje.match(/\d\d\d\d.\d\d\d\d[A-Z]?/g)
        }

        temp = parts.filter(el => {
          return $.isArray(newNumber)
            ? el.properties.numer.match(newNumber[0])
            : el.properties.numer.match(newNumber)
        })
        temp.forEach(el => {
          if (el.properties.cena != '0') {
            // alert('Znalaziono:  ' + el.properties.nazwa + ' Cena: ' + el.properties.cena)
            // toList(el);
            alert(
              'Rational Price Extension\n\n' +
                '\tNumer:  ' +
                el.properties.numer +
                '\n' +
                '\tNazwa:  ' +
                el.properties.nazwa +
                '\n' +
                '\tCena:   ' +
                el.properties.cena +
                ',- netto\n\n' +
                '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n'
            )
          }
        })
      }
    }
  })
  //   }) // getJson first version
}

export default szukaj
