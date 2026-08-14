//Q1. String + conditionals: isPalindrome(s: string): boolean ignoring
//  case/spaces. Real: input sanitization checks.

function isPalindrome(s: string): boolean{
    let str: string = s.toLowerCase();
    let rev:string = ""
    let isPalindrome = false
    for(let i = 0; i<str.length ;i++){
        rev = str[i] + rev
    }
    if(str === rev){
        isPalindrome = true
            return isPalindrome;
    }else{
        return isPalindrome
    }
}
console.log(isPalindrome("Ama"))
console.log("=============================================")
//Q2. Write a function calculateFactorial(n: number): number that
//  computes the factorial of a non-negative integer.

function calculateFactorial(n: number): number{
    let k = 1;
    for(let i = 1; i<=n; i++){
        k = k * i
    }
    return k;
}
console.log(calculateFactorial(6))

console.log("===============================================")
//Q3. Create Prime check function
function isPrime(num: number): boolean{
    let prime: boolean = false
    let count: number = 0
    for(let i=1; i<= num; i++){
        if(num%i == 0)
        {
            count++
        }
    }
    if(count == 2){
        prime = true
    }
    return prime
}

console.log(isPrime(22));