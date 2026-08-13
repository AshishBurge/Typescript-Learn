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