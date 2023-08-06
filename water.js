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




var a = [2,1,5,0,3,4,7,2,3,1,0] , //10
  b = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6] , // 17
  c = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] , // 10
  d = [7, 0, 1, 3, 4, 1, 2, 1] , // 9
  e = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] , // 10
  f = [2, 2, 1, 2, 2, 3, 0, 1, 2] ,// 4
  j = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] , // 24
  k = [2, 2, 2, 2, 2] ;// 0

var h = [7, 0, 1, 3, 4, 1, 2, 1] , // 9 
  i_arr = [10, 0, 5, 5, 5, 0, 1, 5, 0, 0] ,// 14 
  l = [100, 0, 5, 6, 8, 0] ;// 13 

console.log("countWaterult is: ", countWater( a ) , "a - countWaterult must be 10");
console.log("countWaterult is: ", countWater( b ), "b - countWaterult must be 17");
console.log("countWaterult is: ", countWater( c ), "c - countWaterult must be 10");
console.log("countWaterult is: ", countWater( d ), "d - countWaterult must be 9");
console.log("countWaterult is: ", countWater( e ), "e - countWaterult must be 10");
console.log("countWaterult is: ", countWater( f ), "f - countWaterult must be 4");
console.log("countWaterult is: ", countWater( j ), "j - countWaterult must be 24");
console.log("countWaterult is: ", countWater( k ), "k - countWaterult must be 0"); 


console.log("countWaterult is: ", countWater( h ), " h - countWaterult must be 9"); 
console.log("countWaterult is: ", countWater( i_arr ), " i - countWaterult must be 14"); 
console.log("countWaterult is: ", countWater( l ), " l - countWaterult must be 13");
