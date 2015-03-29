
var track1;

exports.foo = function() {
	var fs = require('fs');
	var midiConverter = require('midi-converter');
	var midiSong = fs.readFileSync('20150327.mid', 'binary');
	var jsonSong = midiConverter.midiToJson(midiSong);
	//fs.writeFileSync('20150327.json', JSON.stringify(jsonSong)); //save a copy
	var jsonSong_data = require('./20150327.json');
	track1 = jsonSong_data.tracks[1]
	console.log('done');
};