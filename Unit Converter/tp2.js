var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;

myResult();


function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;
    var inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
        result.value = ""; 
        return;
    }

    if (option_from === "celsius" && option_to === "fahrenheit") {
        result.value = (Number(input.value) * 9 / 5) + 32;
    } else if (option_from === "celsius" && option_to === "kelvin") {
        result.value = Number(input.value) + 273.15;
    } else if (option_from === "celsius" && option_to === "celsius") {
        result.value = input.value;
    }


    if (option_from === "kelvin" && option_to === "celsius") {
        result.value = Number(input.value)-273.15;
    } else if (option_from === "kelvin" && option_to === "fahrenheit") {
        result.value = (Number(input.value) - 273.15) * 9 / 5 + 32;
    } else if (option_from === "kelvin" && option_to === "kelvin") {
        result.value = input.value;
    }


    if (option_from === "fahrenheit" && option_to === "celsius") {
        result.value = (Number(input.value) - 32) * 5 / 9;
    } else if (option_from === "fahrenheit" && option_to === "kelvin") {
        result.value = (Number(input.value) - 32) * 5 / 9 + 273.15;
    } else if (option_from === "fahrenheit" && option_to === "fahrenheit") {
        result.value = input.value;
    }
}






