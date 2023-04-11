const input = document.querySelector(`.inputSection`);
const outputContainer = document.querySelector(`#blankContainer`);

input.addEventListener(`submit`,function(start){
    start.preventDefault();

    const num1 = parseFloat(document.querySelector(`#num1`).value);
    const num2 = parseFloat(document.querySelector(`#num2`).value);
    const operator = document.querySelector(`#operator`).value;

    let calculatedResult;
    switch (operator){
        case "+":
            calculatedResult = num1 + num2;
            break;
            case "-":
            calculatedResult = num1 - num2;
            break;
            case "*":
            calculatedResult = num1 * num2;
            break;
            case "/":
            calculatedResult = num1 / num2;
            break;
            default:
      calculatedResult = "Invalid operator";
      break;
    }
    outputContainer.textContent = calculatedResult;

});