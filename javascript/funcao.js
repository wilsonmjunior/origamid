addEventListener('click', function () {
  console.log('Oi cara de boi!!');
});

function imc2 (peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 2.8); //+ undefined (fica flutuante, nao aparece)

// mostra o resultado e o undefined tambem
console.log(imc2(100, 1.8));
