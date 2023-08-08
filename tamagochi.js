//add tamagochi
class Tamagochi{
    constructor(name) {
        this.name = name
        this.live = 1;
        this.characteristics ={
        "helth" : 100,
        "desire" : "nothing",
        "happiness" : 100,
        "satiety" : 100,
        "vigor" : 100,
        "purity" : 100 
        };
        this.interval = setInterval(() => {
            this.writeStatus();
            this.changeCharac()

          }, 30000);
          this.interval2 = setInterval(() => {
            this.getDesire();
            this.checkch();
          }, 10);
    }
    changeCharac(){
        for (const k in this.characteristics){
            this.characteristics[k] -= 5;
        }
    }
    restart(){
        this.characteristics ={
            "helth" : 100,
            "desire" : "nothing",
            "happiness" : 100,
            "satiety" : 100,
            "vigor" : 100,
            "purity" : 100 
            };
           
            this.interval = setInterval(() => {
                this.writeStatus();
                this.changeCharac()
              }, 30000);
            this.interval2 = setInterval(() => {
                this.getDesire();
                this.checkch();
              }, 10);


    }
    getDesire(){
        for (const [k, v] of Object.entries(this.characteristics)) {
            if (v <= 80 ) {
                this.characteristics.desire = k;
                break;
            }else{
                this.characteristics.desire = "nothing";
            }
        }
    }

    writeStatus(){
        console.log(this.name + " status");
        console.log("helth = " + this.characteristics.helth );
        console.log("desire = "+ this.characteristics.desire);
        console.log("happiness = "+ this.characteristics.happiness);
        console.log("satiety = "+ this.characteristics.satiety);
        console.log("vigor = "+ this.characteristics.vigor);
        console.log("purity = "+ this.characteristics.purity);
        
    }

    play(){

        if (this.characteristics.happiness >= 95){
            this.characteristics.helth -= 5 ;
            this.characteristics.purity -= 5;
            this.characteristics.vigor -= 5;
            this.characteristics.satiety -=5;
            console.log("I don't want to play anymore"); 
        }else {
            this.characteristics.happiness += 10;
            this.checkch();
            this.writeStatus();
            console.log("We just played and now I'm happy");        
        }
    }

    feed(){
        if ( this.characteristics.satiety >= 95){
            this.characteristics.happiness -= 5 ;
            this.characteristics.helth  -= 15;
        }else {
            this.characteristics.satiety += 10;
            this.characteristics.helth+=10;
            this.checkch();
            this.writeStatus();
            console.log("You have fed me, I am fuller, thank you."); 
        }
    }

    heal(){
        if ( this.characteristics.helth >= 100){
            this.characteristics.happiness -= 5 ;
            this.characteristics.helth -= 15;
            console.log("I am not sick")

        }else {
            this.characteristics.satiety += 10;
            this.characteristics.helth+=10;
            this.checkch();
            this.writeStatus();
            console.log("You healed me, thank you."); 
        }
    }

    wash(){
        if ( this.characteristics.purity >= 95){
            this.characteristics.happiness -= 5 ;
            console.log("I shine with purity, stop washing me")
        }else {
            this.characteristics.purity += 10;
            this.characteristics.helth +=10;
            this.checkch();
            this.writeStatus();
            console.log("I'm clean now, thank you"); 
        }
    }
    
    sleep(){
        if ( this.characteristics.vigor >= 95){
            this.characteristics.happiness -= 5 ;
            console.log("I don't want to sleep ")
        }else {
            this.characteristics.vigor += 10;
            this.characteristics.helth +=10;
            this.checkch();
            this.writeStatus();
            console.log("I'm clean now, thank you"); 
        }
    }
    fulfillAWish(){
        switch(this.characteristics.desire){
            case"helth":
                this.heal();
                break;
            case"happiness":
                this.play();
                break;
            case"satiety":
                this.feed();
                break;
            case"vigor":
                this.sleep();
                break;
            case"purity":
                this.wash();
                break;
        }
        console.log("You fulfilled my wish, thank you");
    }
 
    checkch(){
        for (const [k, v] of Object.entries(this.characteristics)) {
            if (v > 100) {
                this.characteristics[k] = 100;
            }else if(v<=0){
                clearInterval(this.interval);
                clearInterval(this.interval2);
                this.live = 0;
                console.log(`My ${k} has reached 0, so you lost, do you want to repeat the game?(y/n)  `)


            }

        }
    }

}
function exitProgram() {
    console.log('Exiting program...');
    process.exit();
}

let mytamagochi = new Tamagochi("Alex");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', (line) => {
    input = line;
    switch(input){
        case'p':
            mytamagochi.play();
            break;
        case"f":
            mytamagochi.feed();
            break;    
        case"h":
            mytamagochi.heal();
            break;
        case"w":
            mytamagochi.wash();
            break;
        case"fw":
            mytamagochi.fulfillAWish();
            break;
        case"y":
            mytamagochi.restart();
            break;
        case"n":
            exitProgram();
            break;    
        }

});

