/*(function (window){
    var greetings="Good Bye";
    var byeSpeaker=function (names){
          console.log(greetings+" "+names);
     }
     window.byeSpeaker=byeSpeaker;
})(window);*/

(function(window) {
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);