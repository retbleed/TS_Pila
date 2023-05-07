document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".stackContainer") as HTMLElement;
  const inputText = document.getElementById("textHolder") as HTMLInputElement;
  let variable = 0;
  let array: string[] = [];

  function pushElement() {
    if (variable <= 7 && inputText.value != "") {
      const newElement = document.createElement("div");
      const textA = inputText.value;
      newElement.classList.add("stackElement");
      const text = document.createTextNode(textA);
      array.push(inputText.value);
      newElement.appendChild(text);
      container.appendChild(newElement);
      variable += 1;
      inputText.value = "";

      if (container) {
        const lastBox = container.lastChild as HTMLElement;
        setTimeout(() => {
          lastBox.style.backgroundColor = "rgb(221, 221, 221)";
        }, 2000); // Cambio de color después de 2 segundos
      }
    } else {
      alert("Ha ocurrido un error inesperado");
    }
  }

  function popElement() {
    const lastElement = container.lastChild as HTMLElement;
    if (lastElement) {
      setTimeout(() => {
        lastElement.style.backgroundColor = "rgb(255, 68, 68)";
      }, 2000); // Cambio de color después de 2 segundos
      setTimeout(() => {
        alert("El ultimo valor fue: " + lastElement.textContent);
        container.removeChild(lastElement);
        array.pop();
      }, 4000);
    }
    inputText.value = "";
  }

  function peekElement(){
    const lastElement = container.lastChild as HTMLElement;
    if (lastElement) {
      alert("El ultimo valor fue: " + lastElement.textContent);
    }
    inputText.value = "";    
  }

  function sizeElement(){
    alert("El tamaño de la pila es de: " + array.length);
  }

  const button = document.querySelector(".optionButton") as HTMLElement;
  button.addEventListener("click", () => {
    const options = document.querySelectorAll<HTMLInputElement>(
      'input[type="radio"][name="option"]'
    );
    let selectedOption;

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
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
    } else {
      alert("Elige una opcion!");
    }
  });
});
