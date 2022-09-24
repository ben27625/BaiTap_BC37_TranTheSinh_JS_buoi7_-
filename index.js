// function open(getElementsByClassName) {
//     document.getElementsByClassName("alert").classlist.add("active")
// }


var listNumber = [1,2,3,4,5,6];



function addNumber() {
    

  listNumber.push(+document.getElementById("listNumber").value);


         document.getElementById("arrayResult").innerHTML = listNumber ;
       
       
      }
     
    
 
// exam 1 

function sum() {
    var sum = 0;
    for(var i = 0 ; i < listNumber.length ; i++) {

        if(listNumber[i] > 0) {
                 
            sum += listNumber[i];
           
      
        }
   
}

document.getElementById("resultOne").innerHTML = sum ;
}

// exam 2 

function increase() {
    var k  = 0 ;
    for(var i = 0 ; i < listNumber.length ; i++ ) {
        if(listNumber[i] > 0) {
            k++;
            
        }
       
    }
    
   document.getElementById("resultTwo").innerHTML = k;
}

// exam3
function min() {
    var min = Math.min.apply(null,listNumber);
    document.getElementById("resultThree").innerHTML = min;
}

// exam4 
function minInt() {
   
   for(var i = 0 ; i < listNumber.length ; i++) {
        if(listNumber[i] > 0 ) {
            var min = listNumber[i];
            break;
        }
   }

   for(var i = 0 ; i < listNumber.length ; i++) {
        if(listNumber[i] > 0 && listNumber[i] < min) {
            min = listNumber[i];
        }
   }
   document.getElementById("resultFour").innerHTML = min;
}

// exam 5 

function exam5() {
    var evenNumber ;
    for(var i = 0 ; i < listNumber.length ; i++) {
        if(listNumber[i] % 2 === 0 ) {
            evenNumber = listNumber[i];
        }
    }
    document.getElementById("resultFive").innerHTML = evenNumber;
}

// exam 6

function exam6() {

}

// exam 7

function exam7() {
    var sortNumber = listNumber.sort();
    document.getElementById("resultSeven").innerHTML = sortNumber;

}

// exam 8


function testPrime(n) {
        var isPrime = true;
    
        if (n < 2) {
            isPrime = false;
        }
        else if (n === 2) {
            isPrime = true;
        }
        else if (n % 2 === 0) {
            isPrime = false;
        }
        else {
            for (var i = 3; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        return isPrime;
}

function exam8() {
    
    var prime = 0;
    for(var i = 0 ; i < listNumber.length ; i++) {
        if(testPrime(listNumber[i])) {
            prime = listNumber[i];
            break;
        } else {
            prime = -1;
        }

    }


document.getElementById("resultEight").innerHTML = prime;

}


// exam 9
var addNumbers = [];
function addNum() {
    addNumbers.push(+document.getElementById("inputNine").value);
    document.getElementById("outputNine").innerHTML = addNumbers;
}

function exam9() {
    var join = listNumber.concat(addNumbers);
    var count = 0;
    for(var i = 0; i < join.length; i++) {
        if(Number.isInteger(join[i])) {
            count += 1;
        }
    }

    document.getElementById("resultNine").innerHTML = count;

  


    
}

// exam 10

function exam10() {
    
}

