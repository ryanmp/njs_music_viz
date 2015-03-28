var fs = require('fs');
var midiConverter = require('midi-converter');
var midiSong = fs.readFileSync('20150327.mid', 'binary');
var jsonSong = midiConverter.midiToJson(midiSong);
fs.writeFileSync('20150327.json', JSON.stringify(jsonSong));