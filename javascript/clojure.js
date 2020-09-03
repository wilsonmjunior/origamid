let item1 = 1;
function funcao1 () {
  let item2 = 2;
  function funcao2 () {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}
funcao1();
/*
  A funcao2 possui 4 escopos. 
  O 1º escopo é o local, com acesso ao item3.
  o 2º escopo da acesso ao item2, esse escopo é chamado de CLOJURE (funcao1)
  (escopo de função dentro de função). O terceiro é o script com acesso ao item1. 
  E o 4º é o global (window).
*/

function contagem () {

}
