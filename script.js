let h3 = document.querySelector('h3');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let getInf = document.querySelector('#inf');

let numMultiplicator = 1;


//h2.innerHTML = `${num} x ${num-1} = ${num * (num-1)}<br>`; // Take value of the first number.

function btnResult(){ 

        let numberFactorial = document.querySelector('#numberFactorial');

        getInf.style.display = 'flex';
       // console.log(typeof numberFactorial);
        h2.innerHTML = ' ';
        h1.innerHTML = ' ';
        h3.innerHTML = ' ';
        numMultiplicator = 1;

    // Check if there is a number and a integer number.
    if(numberFactorial.value.length === 0 || Number.isInteger(Number(numberFactorial.value)) !== true){

        alert('Digite um número inteiro.')
        numberFactorial.value = '';
        getInf.style.display = 'none';
    }else{

        h1.innerHTML += `${numberFactorial.value}! = `; // Take the number to apply factorial.

        h3.innerHTML += `${numberFactorial.value}!`;
        for(let i = numberFactorial.value; i > 1; i--){
            
        numMultiplicator *= i; // Multiply the factorial numbers
        numberFactorial.value--;
        
        h2.innerHTML +=`${numMultiplicator} x ${numberFactorial.value} = ${numMultiplicator * numberFactorial.value}<br>`; // Show tha table results.
        h1.innerHTML += `${numberFactorial.value} -> `; // Show what numbers are multiply.

        }

    h1.innerHTML += `${numMultiplicator}`; // Show the final result.

    h3.innerHTML += ` = ${numMultiplicator}`;
    numberFactorial.value = '';

    }

}

function btnClean(){

    location.reload();
}