/*(function (window){
    var greetings="Hello";
    var  helloSpeaker=function (names){
          console.log(greetings+" "+names);
     }
     window.helloSpeaker=helloSpeaker;
})(window);*/




(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);