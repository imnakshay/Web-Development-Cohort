let hour = 0;
let min = 0;
let sec = 0;
function timer(){
    if(sec>=0&&sec<59){
        sec++;
    }else if(min<59&&min>=0){
        min++;
        sec=0;
        
    }else{
        hour++;
        sec=0;
        min=0
        
    }
    console.log(`${hour} : ${min} : ${sec}`);
}
setInterval(timer,1000);
