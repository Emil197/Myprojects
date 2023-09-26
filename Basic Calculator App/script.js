const display = document.querySelector(".display")

const buttonNum = document.querySelectorAll(".number") 
const buttonOp = document.querySelectorAll(".operator")
const buttonClear = document.querySelector(".clear")
const buttonDec = document.querySelector(".decimal")
const buttonEqual = document.querySelector(".equal")

buttonNum.forEach(function (element) {
    element.onclick = function (e) {
        // console.log("number worked");
        if (display.value === "0") {
            display.value = ""
        }
        display.value += this.textContent

    }
});

buttonOp.forEach(function (element) {
    element.onclick = function (e) {
        display.value += this.textContent
    }

})

buttonClear.onclick = function (element) {
    display.value = "0"

}
buttonEqual.onclick = function (element) {
    display.value = eval(display.value)
}

buttonDec.onclick = function (element) {
    if (display.value.indexOf('.') === -1) { 
        display.value += this.textContent;
    }
}
