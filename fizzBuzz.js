//console.log('fizzy');
/*
Scope: FizzBuzz program for numbers
divisible by 3,5 or both btw 1 to 100
*/
const fizzyBuzz = function(){
     
    for(let i = 1; i <= 100; i++){
        let fizz = i % 3;
        let buzz = i % 5;
     if(fizz ===0){
       console.log (`${i}: Fizz`);
     }
     if(buzz ===0){
      console.log (`${i}: Buzz`);
    }
    if(buzz===0 && fizz===0){
      console.log (`${i}: FizzBuzz`);
    }
    if(fizz !=0 && buzz!=0){
      console.log (i);
    }
       
    }

}

//call the function.
//fizzyBuzz();

const FizzBuzzy = () => {
    let numArr = [];
    for(let count = 1; count <= 100; count++) {
      numArr.push(count);
    }
    
    let newArr = numArr.map(num => {
      if(num % 3 === 0 && num % 5 === 0) {
        return num = 'FizzBuzz';
      } else if(num % 3 === 0 && num % 5 !== 0) {
        return num = 'Fizz';
      } else if(num % 3 !== 0 && num % 5 === 0) {
        return num = 'Buzz';
      } else {
        return num;
      }
    });
    console.log(newArr);
  };
  
  //FizzBuzzy();

//recursive version.
const fizzbuzz = (n,m) => {
    let num;
    if(n == (m+1)){
      return num;
    }
    
    if(n % 3 == 0 && n % 5 == 0){
      num = 'fizzbuzz'
    }else if(n % 5 == 0){
      num = 'buzz'
    }else if(n % 3 == 0){
      num = 'fizz'
    }else{
      num = n
    }
    return fizzbuzz(++n, m);
  }