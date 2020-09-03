// rest operator
function anunciarGanahadores (premio, ...ganhadores) {
  ganhadores.forEach(ganhador => console.log(`${ganhador} ganhou um ${premio}`));
}

const ganhadores = ['Antonio', 'Julieta', 'Marcela', 'Pedro'];
console.log('--- REST ---');
anunciarGanahadores('Carro', ganhadores);

// spread operator
console.log('--- SPREAD ---');
anunciarGanahadores('Carro', ...ganhadores);

const frutas = ['Banana', 'Morango', 'Uva'];
const verduras = ['Cenoura', 'Batata'];

const alimentos = [...frutas, ...verduras];
console.log('Alimentos: ', alimentos);
console.log([...alimentos, 'Mandioca'])

const alimentosObj = [
  { name: 'Banana', calorias: 90 },
  { name: 'Morango', calorias: 100 },
  { name: 'Tomate', calorias: 80 }
]

console.log('Alimentos Obj: ', alimentosObj);
console.log([...alimentosObj, { name: 'Abacate', calorias: 100 }]);
console.log(alimentosObj.map((alimento, index) => ({
  ...alimento, id: index += 1
})));

const alimento = { name: 'Banana', calorias: 90 };
console.log({ ...alimento, id: 1 });

const numeroMaximo1 = Math.max(3, 4, 5, 12, 3, 3, 24, 2, 3, 4);
console.log('Maximo1: ', numeroMaximo1);

const todosNumeros = [3, 4, 5, 12, 3, 3, 24, 2, 3, 4];
const numeroMaximo2 = Math.max(...todosNumeros);
console.log('Maximo2: ', numeroMaximo2);
