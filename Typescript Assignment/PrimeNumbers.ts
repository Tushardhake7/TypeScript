   var a: number = 0;
   var inputNumber: number = 0;
   var strPrimeNumber: string = "";

for (a = 1; a <= 100; a++) {
    var counter: number = 0;
    for (inputNumber = a; inputNumber >= 1; inputNumber--) {
        if (a % inputNumber == 0) {
            counter = counter + 1; 
        }
    } 

    if (counter == 2) { 
        strPrimeNumber = strPrimeNumber + a + " ";
    }
}

console.log("Prime Numbers from 1 to 100: ");
console.log(strPrimeNumber);
