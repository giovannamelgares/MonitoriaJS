//Exercicios monitoria JavaScript - 5 exercicios (26/02)
//Exercicio 1: Compare the Triplets!
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    
    for(let i=0; i<3; i++){
        if(a[i]>b[i]){
            alice++;
        } else if (a[i]<b[i]){
            bob++;
        }
    }
    return [alice,bob];
}

//Exercicio 2: Simple Array Sum!
function simpleArraySum(ar){
    // Write your code here
    let soma =0;
    for(let i=0; i <ar.length; i++){
        soma = soma + ar[i];
    }
    return soma;
}

//Exercicio 3: A Very Big Sum!
function aVeryBigSum(ar) {
    // Write your code here
    let soma =0;
    for(let i=0; i < ar.length; i++){
        soma = soma+ar[i];
    }
    return soma;
}

//Exercicio 4: Birthday Cake Candles!
function birthdayCakeCandles(candles) {
    // Write your code here
    let numeroMaior = candles[0];
    let contadorVelas = 0;
    for(let i=1; i<candles.length; i++){
        if(candles[i] > numeroMaior){
            numeroMaior = candles[i];
        }
    }
    for(let i=0; i<candles.length; i++){
        if(candles[i]==numeroMaior){
            contadorVelas++
        }
    }
    return contadorVelas;
}

//Exercicio 5: Plus Minus!
function plusMinus(arr) {
    let nPositivo = 0;
    let nNegativo = 0;
    let nZero = 0;
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >  0){
            nPositivo++
        } else if (arr[i] < 0){
            nNegativo++
        } else{
            nZero++
        }
    }
    let positivo = nPositivo / arr.length;
    let negativo = nNegativo / arr.length;
    let zero = nZero / arr.length;
    
    console.log(positivo.toFixed(6)); //fazer para as dizimas!
    console.log(negativo.toFixed(6)); //fazer para as dizimas!
    console.log(zero.toFixed(6)); //fazer para as dizimas!
}
