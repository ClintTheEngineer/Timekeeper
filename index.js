const timeZones = require('./timezones.js');
const aliases = require('./zone-aliases.js');
const isDST = require('./daylight-savings.js');


const getTimeByTimeZone = (zone) => {
    const normalizedZone = aliases[zone] || zone;
    const offset = timeZones[normalizedZone];

  if (offset === undefined) {
    throw new Error(`Unknown time zone: ${timeZone}`);
  }

  const now = new Date();
  let hours = now.getUTCHours() + offset + (isDST() ? 1 : 0);
  let minutes = now.getUTCMinutes();

  // Handle 24-hour wraparound
  hours = (hours + 24) % 24;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}`;
};



module.exports = getTimeByTimeZone;


