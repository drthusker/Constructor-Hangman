// should control whether or not a letter appears as a "_" or as a letter on-screen

const Letter = function(letters) {
	this.charac = lett;
	this.appear = false;
	this.letterRender = function(){

		if(this.letter === ' '){
			this.appear = true;
			return ' ';
		}
		if(this.appear === false){
			return ' _';
		}else{
			return this.letter;
		}
	};
};
module.exports = letter;