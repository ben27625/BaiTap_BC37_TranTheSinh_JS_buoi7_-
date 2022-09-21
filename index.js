// function open(getElementsByClassName) {
//     document.getElementsByClassName("alert").classlist.add("active")
// }


listNumber = [-1,1,2,3,4,5,5,6];


// console.log(listNumber)
// function addNumber() {
    

//     listNumber = listNumber.push(document.getElementById("listNumber").value);

    
//     for (var i = 0  ; i < listNumber.length ; i++ ) {
//         var result = listNumber[i];


//          console.log(result);


//          document.getElementById("arrayResult").innerHTML = result ;
       
       
//       }
     
//     };

 
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
    // listNumber.sort();
    // document.getElementById("resultSeven").innerHTML = evenNumber;

}

// exam 8

function exam8() {


    for(var i = 0; i < listNumber.length ; i++ ) {
        n = listNumber[i];
    function testInteger (n) {
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
    break;
    
    } 
  
    document.getElementById("resultEight").innerHTML = n;

}

// exam 9

function exam9() {
    
}

// exam 10

function exam10() {
    
}

