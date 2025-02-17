class car{
    constructor(name,year,color,engine,engineSound){
        this.name = name;
        this.year = year;
        this.color= color;
        this.engine = engine;
        this.engineSound = engineSound;
    }
    engineSound(){
        console.log("engine is "+ engineSound);
    }
    carInfo(){
        console.log("Car Name : " + this.name)
        console.log("Car Model : " + this.year)
        console.log("Car color : " + this.color)
        console.log("Car engine : " + this.engine)
        console.log("Car sound : " + this.engineSound);
    }
}   
let bmw2023 = new car("BMW M5","2023","black","v8","ratatata");
let audi  =  new car("audi R8",2020,"red","V8turbo","hmmhmm");
bmw2023.carInfo();
console.log("\n");
console.log("The information abotu the car is : ");
audi.name = "Audi";
audi.carInfo();