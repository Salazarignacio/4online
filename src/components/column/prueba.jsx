const player1 = [
    {index: 0, columna: 'A'},
    {index: 0, columna: 'B'}, 
    {index: 0, columna: 'C'}
];

function search(a, b, c, d) {
    const array = [a, b, c, d];
    let tieneColumnas = true;
    array.forEach((x, index) => {
      if (!player1.some((elemento) => elemento.columna === x)) {
        tieneColumnas = false;
      }
    });
    console.log(tieneColumnas)
     return tieneColumnas;
     
  }



