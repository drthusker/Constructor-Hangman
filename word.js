

var letter = require("./letter.js");

function Word(words) {
	this.words = words;
	this.lets = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.lets.push( new letter(this.words[i]));
		}
	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

		this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = true;
				toReturn++;
				}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = "";

		this.lets.forEach(function(currLett){
			var currentLetter = target.leterRender();
			display+= currentLetter;
		} );
		return string;
	}
}
module.exports = Word;