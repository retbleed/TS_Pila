document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".stackContainer");
    var inputText = document.getElementById("textHolder");
    var variable = 0;
    var array = [];
    function pushElement() {
        if (variable <= 7 && inputText.value != "") {
            var newElement = document.createElement("div");
            var textA = inputText.value;
            newElement.classList.add("stackElement");
            var text = document.createTextNode(textA);
            array.push(inputText.value);
            newElement.appendChild(text);
            container.appendChild(newElement);
            variable += 1;
            inputText.value = "";
            if (container) {
                var lastBox_1 = container.lastChild;
                setTimeout(function () {
                    lastBox_1.style.backgroundColor = "rgb(221, 221, 221)";
                }, 2000); // Cambio de color después de 2 segundos
            }
        }
        else {
            alert("Ha ocurrido un error inesperado");
        }
    }
    function popElement() {
        var lastElement = container.lastChild;
        if (lastElement) {
            setTimeout(function () {
                lastElement.style.backgroundColor = "rgb(255, 68, 68)";
            }, 2000); // Cambio de color después de 2 segundos
            setTimeout(function () {
                alert("El ultimo valor fue: " + lastElement.textContent);
                container.removeChild(lastElement);
                array.pop();
            }, 4000);
        }
        inputText.value = "";
    }
    function peekElement() {
        var lastElement = container.lastChild;
        if (lastElement) {
            alert("El ultimo valor fue: " + lastElement.textContent);
        }
        inputText.value = "";
    }
    function sizeElement() {
        alert("El tamaño de la pila es de: " + array.length);
    }
    var button = document.querySelector(".optionButton");
    button.addEventListener("click", function () {
        var options = document.querySelectorAll('input[type="radio"][name="option"]');
        var selectedOption;
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (option.checked) {
                selectedOption = option;
                break;
            }
        }
        if (selectedOption) {
            switch (selectedOption.value) {
                case "push":
                    pushElement();
                    return;
                case "pop":
                    popElement();
                    return;
                case "peek":
                    peekElement();
                    return;
                case "size":
                    sizeElement();
                    return;
                default:
                    return;
            }
        }
        else {
            alert("Elige una opcion!");
        }
    });
});
