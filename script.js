const buttons = document.querySelectorAll("button")
const inputField=document.querySelector("#result")

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent
        if (buttonValue === "C") {
            clearResult()
        } else if (buttonValue === "=") {
            calculateResult()
        } else {
            appendValue(buttonValue)
        }
   }) 
}

const clearResult = () => { 
    inputField.value=""
}
const calculateResult = () => {
    inputField.value=eval(inputField.value)
 }
const appendValue = (buttonValue) => {
    inputField.value += buttonValue
}