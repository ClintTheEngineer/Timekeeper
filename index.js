import { timeZones } from "./timezones.js";
import { isDST } from "./daylight-savings.js";

const getTimeByTimeZone = (timeZone) => {
    
    let resultTime;
    const currentDate = new Date();
    let minutes = currentDate.getUTCMinutes();
    let hours = currentDate.getUTCHours()+timeZones[timeZone];
   
    if (isDST() === true) hours = hours+1;
    
    if (minutes.toString().length === 1) minutes = `0${minutes}`;
    if (hours.toString().length === 1) minutes = `0${hours}`;
    Object.keys(timeZones).forEach((e)=> {
     if (timeZone === e && hours > 0) {
        resultTime = `${hours}:${minutes}`
    } else {
        resultTime = `${hours+24}:${minutes}`
    }    
   })   
 
   return resultTime;
}

console.log(getTimeByTimeZone('Eastern'));
