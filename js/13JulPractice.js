var randomTextButton = document.getElementById("randomTextButton");
//TODO: Set variable for range input
var randomTextRange = document.getElementById("randomTextRange")
var randomTextContainer = document.getElementById("randomTextContainer");


randomTextButton.addEventListener("click",function() {

    var paragraphs = "";
//TODO: Replace the number 10 with value from range input
    for (let i = 1; i <= 10 ; i++) {
        var paragraph = "<p>Paragraph " + i + "</p>";
        paragraphs += paragraph;
    }
    randomTextContainer.innerHTML = paragraphs;

})