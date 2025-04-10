const express = require('express');
const app = express();
const PORT = 5000;
const getTimeByTimeZone = require('./index');
const aliases = require('./zone-aliases');
const timeZones = require('./timezones');


app.use(express.json());

app.get('/time', (req, res) => {
    try {
      const { zone } = req.query;
      const time = getTimeByTimeZone(zone || 'UTC');
      res.json({ time });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


app.get('/time/:zone', (req, res) => {   
    try {
        const { zone } = req.params;
        const time = getTimeByTimeZone(zone);
        res.json({ time });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})
  
  

app.get('/zones', (req, res) => {
    const { search } = req.query;
  
    const allZones = Object.keys(timeZones);
    const allAliases = Object.keys(aliases);
  
    const combined = [...new Set([...allZones, ...allAliases])];
  
    if (!search) {
      return res.json({ zones: combined });
    }
  
    const filtered = combined.filter(zone =>
      zone.toLowerCase().includes(search.toLowerCase())
    );
  
    res.json({ zones: filtered });
  });
  



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
