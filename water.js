function countWater(mountains){
    let highMou = Math.max.apply(null, mountains);
    let water = 0;
    for (let i = 1; i<=highMou; i++){
        let flagWater = 0;
        let flagWall = 0;
        let ifStartFromWater = 0;
        let count =0;
        for (let j = 0; j<mountains.length; j++){
            if (mountains[j] < i ){
                if(ifStartFromWater){
                count +=1;
                }
                if(flagWater ){
                    flagWall = 1;
                    flagWater = 0
                }
            }else {
                ifStartFromWater = 1;
                flagWater = 1;
                if (flagWall){
                    flagWall = 0;
                    water += count;
                    count = 0;
                }
            }
        }
    }
    return water;
}

let mou =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
result = countWater(mou);
console.log(result) 

