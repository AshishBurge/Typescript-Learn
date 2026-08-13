//Q1. Operators: Write isEven(n: number): boolean using arithmetic and 
// return a boolean.

function isEven(n: number): boolean {
    if(n%2 == 0){
        console.log(`Given number ${n} is even`)
        return true
    }else {
        console.log(`Given number ${n} is not even`)
        return false
    }
}
console.log(isEven(12))
console.log(isEven(11))

let isEven_ = (n:number):boolean => n%2 == 0;
console.log(isEven_(18))

console.log("==================================================")

//Q2. Conditionals: Implement grade(score: number): string 
// returning "A/B/C/F" with if/else chains. 
// Real: display pass/fail labels.

function grade(score:number): string{
    if(score>=90 && score<=100){
        return "A";
    }else if(score>=65 && score<90){
        return "B";
    }else if(score>=35 && score<65){
        return "C";
    }else if(score>=0 && score<35){
        return "F";
    }else{
        return "I"
    }
}
function result(student_grade:string){
    console.log(student_grade)
    if(student_grade === "I"){
        console.log("Invalid Score")
    }
    else if(student_grade === "A" || student_grade === "B" || student_grade === "C"){
        console.log("Pass")
    }else{
        console.log("Fail")
    }
}
result(grade(915));
//Q3. Loops (while): Implement countDigits(n: number): number 
// that counts digits using a while loop. 
// Real: validate numeric length constraints.
console.log("====================================================")
function countDigits(n:number): number{
    let count:number = 0;
    while(n>0){
        count++;
         n = (n - n%10) / 10
    }
    return count;
}
function ValidateDigits(n: number){
    let digits:number = countDigits(n);
    console.log(`digits  = ${digits}`)
    if(digits>3){
        throw new Error("Digits count should be upto 3")
    }
}
ValidateDigits(124)

//Q4. String basics: Build normalizeName(s: string): string that trims, lowercases, and capitalizes first letter. Real: normalize form input.
//Q5. Data types & casting: toNumber(value: string|number): number | null — try parse and return null if invalid. Real: accept mixed form inputs.
//Q6. Function types: Define a typed callback applyTwice(fn: (x:number)=>number, v:number): number and show usage.