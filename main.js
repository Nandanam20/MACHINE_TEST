function analyzeText() {
    var textInput = document.getElementById("textInput").value;
    var lines = textInput.split(/\r\n|\r|\n/).filter(Boolean);
    var words = textInput.split(/\s+/).filter(Boolean); 
    var letters = textInput.replace(/\s/g, "").split(""); 
    var repeatedWords =  {};
    
    words.forEach(function(word) {
        repeatedWords[word] = (repeatedWords[word] || 0) + 1;
    });

    var lineCount = lines.length;
    var wordCount = words.length;
    var letterCount = letters.length;
    
    var result = "Line Count: " + lineCount + "<br>";
    result += "Word Count: " + wordCount + "<br>";
    result += "Letter Count: " + letterCount + "<br>";
    
    result += "<br>Repeated Word Count:<br>";
    for (var word in repeatedWords) {
        if (repeatedWords.hasOwnProperty(word)) {
            result += word + ": " + repeatedWords[word] + "<br>";
        }
    }
    
    document.getElementById("result").innerHTML = result;
}
