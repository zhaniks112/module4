(function () {
  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop through the names array
  for (var i = 0; i < names.length; i++) {
    // Get the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // If the first letter is 'j', say "Goodbye"
    if (firstLetter === 'j') {
      goodbyeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
