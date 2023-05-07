document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".stackContainer") as HTMLElement;
  const inputText = document.getElementById('textHolder') as HTMLInputElement;
  let variable = 0;
  function addElementToStack() {
    if(variable <= 7 && inputText.value != ""){
        const newElement = document.createElement("div");
        const textA = inputText.value;
        newElement.classList.add("stackElement");
        const text = document.createTextNode(textA);
        newElement.appendChild(text);
        container.appendChild(newElement);
    }else{
        alert("Ha ocurrido un error inesperado");
    }
  }

  const button = document.querySelector(".optionButton") as HTMLElement;
  button.addEventListener("click", () => {
    addElementToStack();
  });
});
