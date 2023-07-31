function countWater(mountains){
    let highMou = Math.max.apply(null, mountains);
    let water = 0;
    for (let i = 1; i<=highMou; i++){
        console.log("i "+ i);
        let flagState = 0;
        let flagFin = 0;
        let countF = 0;
        let count =0;
        for (let j = 0; j<mountains.length; j++){

            if (mountains[j] < i ){
                if(countF){
                count +=1;
                }
                if(flagState ){
                    flagFin = 1;
                    flagState = 0
                }
            }else {
                countF = 1;
                flagState = 1;
                if (flagFin){
                    flagFin = 0;
                    water += count;
                    count = 0;
                }
            }
            console.log("count1 ="+ count);
        }
        console.log("count ="+ count);
        console.log("water ="+ water);

    }
    return water;
}

let mou =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
result = countWater(mou);
console.log(result) 

