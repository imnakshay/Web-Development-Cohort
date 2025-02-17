
setInterval(()=>{
    let cDate = new Date();
    let cHour = cDate.getHours();
    let cMin = cDate.getMinutes();
    let cSec = cDate.getSeconds();
    console.clear();
    console.log("Current time is : ");
    console.log(cHour+" : "+cMin+" : "+cSec);
},1000)