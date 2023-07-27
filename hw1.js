//find max, min, sum
function maxN(num){

    let max = num[0]; 
    for(let i = 1; i < num.length; i++ ){
        max = num[i]>max? num[i]:max;
            
    }
    return max;
}
function minN(num){
    let less = num[0]; 
    for(let i = 1; i < num.length; i++ ){
        less = num[i]<less? num[i]:less;
    }
    return less;
}
function sumN(num){
    let sum = 0;
    for(let i = 0; i<num.length; i++){
        sum += num[i];
    }
    return sum;
}

let numbers = [4,5,76,34,-6,-9];
result = maxN(numbers);
console.log(result);
result = minN(numbers);
console.log(result);
result = sumN(numbers);
console.log(result);