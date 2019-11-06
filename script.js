function add(x,y){
    return x + y;    
}
console.log(add(2,4))

function multiply(x,y){
    return x * y;
}
console.log(multiply(6,8))

function power(x,n){
    var answer = 1;

    for(let i = 0; i < n; i ++){
        answer = multiply(answer,x)
    }
    return answer
}
console.log(power(2,8))

function factorial(x){
    answer1 = 1;

    for(let i = 1; i <= x; i ++){
        answer1 = multiply(answer1,i)
    }
    return answer1
}
console.log(factorial(4))

function fibonacci(x){
    var answer2 = x;
    answer2 = add(answer2 - 1,answer2 - 2)
    return answer2
}
console.log(fibonacci(8))