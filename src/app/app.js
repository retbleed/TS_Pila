document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".stackContainer");
    var inputText = document.getElementById('textHolder');
    var variable = 0;
    function addElementToStack() {
        if (variable <= 7 && inputText.value != "") {
            var newElement = document.createElement("div");
            var textA = inputText.value;
            newElement.classList.add("stackElement");
            var text = document.createTextNode(textA);
            newElement.appendChild(text);
            container.appendChild(newElement);
        }
        else {
            alert("Ha ocurrido un error inesperado");
        }
    }
    var button = document.querySelector(".optionButton");
    button.addEventListener("click", function () {
        addElementToStack();
    });
});
