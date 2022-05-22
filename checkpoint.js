// exercicio 1
function inteiros (a, b ,c){

if(a>b && a>c){
console.log('o maior numero é', a)
}else if(b>a && b>c){
console.log ('o maior numero é', b)
}
else if(c>a && c>b){
console.log ('o maior numero é', c)
}
if(a<b && a<c){
console.log ('o menor numero é', a)
}else if(b<a && b<c){
console.log ('o menor numero é', b)
}
else if(c<a && c<b){
console.log ('o menor numero é', c)
}
}
 inteiros(10,30,10)


// exercicio 2


function Sangue ( idade ) {
    if ( idade >= 18 && idade <= 67) {
        return 'pode doar'} 
    else {
        return 'não pode doar'
    }
}

console. log (Sangue (67))

// exercicio 3

function programa(valor){
    if (valor > 0){                                                       // Teste para verificar o sinal do valor
      return "Positivo"
    }else{
      return "Negativo"
    }
}
console.log (programa(-4))

// exercicio 4

function calcular_media(a, b){
let media = a + b / 2;

if (media >=7 ) {
return "Aprovado"
}else if (media ==10){
return "Aprovado com distinção"
}else if (media <7){
return "Reprovado"
}
}

console.log(calcular_media(4,5))