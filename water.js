function countWater(mountains){
    var water;
    for (let i = 0; i<mountains.length; i++){
        for (let j = 0;j<mountains.length; j++){
            if((mountains[i] <= mountains[j])){
                if((j - i) >= 2){
                    for(let k = i; k < j; k++  ){
                        water += mountains[i] - mountains[k];
                    }
                }
                if((j - i) <= -2){
                    for(let k = j; k > i; k--  ){
                        water += mountains[j] - mountains[k];
                    }
                }
                
            }
        }
    }
    return water;
}
let mou = [2,1,5,0,3,4,7,2,3,1,0];
result = countWater(mou);
console.log(result) 

