function countWater(mountains){
    let highMou = Math.max.apply(null, mountains);
    let water = 0;
    for (let i = 1; i<=highMou; i++){
        console.log("i "+ i);
        let flagState = 0;
        let flagFin = 0;
        let count =0;
        for (let j = 0; j<mountains.length; j++){
            if (mountains[j] < i ){
                if(!flagState){
                count =0;
             }
                
                flagState = 1;
                flagFin = 1;
            
            }else {
                flagState = 0;
                if (flagFin){
                    flagFin = 0;
                    water += count;
                }
            }
            if(flagState){
                count +=1;
            }   
            console.log("count1 ="+ count);
        }
        console.log("count ="+ count);
        console.log("water ="+ water);

    }
    return water;
}

let mou =  [2, 2, 1, 2, 2, 3, 0, 1, 2];
result = countWater(mou);
console.log(result) 

