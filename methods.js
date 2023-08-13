//map, sort, forEach
Array.prototype.myMap = function (fn){
    let result = [];
    for (let i = 0; i<this.length; i++){

        result[i]=fn(this[i], i ,this);

    }
    return result;
}
Array.prototype.mySort = function (fn){
    let arr = [...this]
    let chang = 0;
    switch(typeof(fn)){
        case('function'):
            for (let i = 0; i < arr.length; i++){
                for (let j =i+1; j < arr.length; j++){
                    if(fn(arr[i],arr[j])>0){
                        chang = arr[i];
                        arr[i]=arr[j];
                        arr[j] = chang;
                        
                    } 
                }            
            }
            
            break;
        default : 
            for (let i = 0; i < arr.length; i++){ 
                for (let j = i+1; j < arr.length; j++){
                    if(arr[i]-arr[j] > 0){
                        chang = arr[i];
                        arr[i]=arr[j];
                        arr[j] = chang;
                    } 
                }            
            }    
            break;
        }
    return arr;

}
Array.prototype.myForEach = function (fn){
    for (let i = 0; i<this.length; i++){
        fn(this[i],i,this)

    }
}
let arr = [1, 2, 3, 4];
arr.myForEach(function(element) {
  console.log(element*5);
});
// g = [1,2,undefined,4];
// k = g.myMap(function(x){
//     return x*2
// });
// console.log(g);
// console.log(k);
// g = [4,6,56,7,3];
// k = g.mySort();
// h = g.sort();

// console.log(g);
// console.log(k);
// console.log(h);