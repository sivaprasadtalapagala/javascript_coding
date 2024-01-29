// 1.Reverse a String:
// Write a function that takes a string as input and returns the reversed version of the string.


// let strng1="siva";
// let reverse_strng;
// function reverse_string(value){
//     reverse_strng=value.split('').reverse().join('');
//     console.log(reverse_strng)
// }
// reverse_string(strng1);



// ====================================================


// 2.Factorial:
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

// const input=5;
// factorial(input)
// function factorial(n) {
//     // const fact=n*(n-1)
//      current=1;
// for(i=1;i++;i<=n){
//  this.current=i*this.current;
//  console.log("factorial value1",this.current)
//  if(i===n){
//     return
//  }

// }

// }
// console.log("factorial value",this.current)

// // var current=1;
// // for(i=1;i++;i<=4){
// //  current=i*this.current
// // }
// console.log("==",current)

// // 4*3*2*1
// // n(n-1)(n-2)(n-3)(n-4)




// ======================================================

// Palindrome Check:
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.

palindrome_word="Noon";
isPalindrome(palindrome_word);
function isPalindrome(str) {
    if((str.split('').length % 2) == 0){
        for(st in str.split('')){
            const iterateUpto= ((str.split('').length)%2)-1;
            if(str[st]==str[str.length-(st+1)]){
                console.log("palindrome");
                // if((st+1)%2==str){
                //     console.log("palindrome===")
                //     return
                // }
                if(st==iterateUpto){
                 console.log("palindrome===")
                    return
                }else{

                }
            }else{
                console.log("not palindrome");
            }
        }
    }else{

    }
}