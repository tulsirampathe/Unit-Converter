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

function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;

    if (option_from === "meter" && option_to === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (option_from === "meter" && option_to === "milimeter") {
        result.value = Number(input.value) * 1000;
    } else if (option_from === "meter" && option_to === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (option_from === "meter" && option_to === "inch") {
        result.value = Number(input.value) * 39.3701;
    } else if (option_from === "meter" && option_to === "foot") {
        result.value = Number(input.value) * 3.28084;
    } else if (option_from === "meter" && option_to === "yard") {
        result.value = Number(input.value) * 1.09361;
    } else if (option_from === "meter" && option_to === "mile") {
        result.value = Number(input.value) * 0.000621371;
    } else if (option_from === "meter" && option_to === "meter") {
        result.value = input.value;
    }


    if (option_from === "centimeter" && option_to === "meter") {
        result.value = Number(input.value) / 100;
    } else if (option_from === "centimeter" && option_to === "milimeter") {
        result.value = Number(input.value) * 10;
    } else if (option_from === "centimeter" && option_to === "kilometer") {
        result.value = Number(input.value) / 100000;
    } else if (option_from === "centimeter" && option_to === "inch") {
        result.value = Number(input.value) / 2.54;
    } else if (option_from === "centimeter" && option_to === "foot") {
        result.value = Number(input.value) / 30.48;
    } else if (option_from === "centimeter" && option_to === "yard") {
        result.value = Number(input.value) / 91.44;
    } else if (option_from === "centimeter" && option_to === "mile") {
        result.value = Number(input.value) / 160934.4;
    } else if (option_from === "centimeter" && option_to === "centimeter") {
        result.value = input.value;
    }

    if (option_from === "milimeter" && option_to === "meter") {
        result.value = Number(input.value) / 1000;
    } else if (option_from === "milimeter" && option_to === "milimeter") {
        result.value = input.value;
    } else if (option_from === "milimeter" && option_to === "kilometer") {
        result.value = Number(input.value) / 1000000;
    } else if (option_from === "milimeter" && option_to === "inch") {
        result.value = Number(input.value) / 25.4;
    } else if (option_from === "milimeter" && option_to === "foot") {
        result.value = Number(input.value) / 304.8;
    } else if (option_from === "milimeter" && option_to === "yard") {
        result.value = Number(input.value) / 914.4;
    } else if (option_from === "milimeter" && option_to === "mile") {
        result.value = Number(input.value) / 1609344;
    } else if (option_from === "milimeter" && option_to === "centimeter") {
        result.value = Number(input.value) / 10;
    }

    if (option_from === "kilometer" && option_to === "meter") {
        result.value = Number(input.value)*1000;
    } else if (option_from === "kilometer" && option_to === "milimeter") {
        result.value = Number(input.value)* 1000000;
    } else if (option_from === "kilometer" && option_to === "kilometer") {
        result.value = input.value;
    } else if (option_from === "kilometer" && option_to === "inch") {
        result.value = Number(input.value)*39370.08;
    } else if (option_from === "kilometer" && option_to === "foot") {
        result.value = Number(input.value) *3280.84;
    } else if (option_from === "kilometer" && option_to === "yard") {
        result.value = Number(input.value) *1093.61;
    } else if (option_from === "kilometer" && option_to === "mile") {
        result.value = Number(input.value) *0.621371;
    } else if (option_from === "kilometer" && option_to === "centimeter") {
        result.value = Number(input.value) *100000;
    }


    if (option_from === "mile" && option_to === "meter") {
        result.value = Number(input.value)*1609.344;
    } else if (option_from === "mile" && option_to === "milimeter") {
        result.value = Number(input.value)* 1609344;
    } else if (option_from === "mile" && option_to === "kilometer") {
        result.value = Number(input.value)*1.609344;
    } else if (option_from === "mile" && option_to === "inch") {
        result.value = Number(input.value)*63360;
    } else if (option_from === "mile" && option_to === "foot") {
        result.value = Number(input.value) *5280;
    } else if (option_from === "mile" && option_to === "yard") {
        result.value = Number(input.value) * 1760;
    } else if (option_from === "mile" && option_to === "mile") {
        result.value = Number(input.value) *0.621371;
    } else if (option_from === "mile" && option_to === "centimeter") {
        result.value = Number(input.value) * 160934.4;
    }


    if (option_from === "yard" && option_to === "meter") {
        result.value = Number(input.value)* 0.9144;
    } else if (option_from === "yard" && option_to === "milimeter") {
        result.value = Number(input.value)*914.4;
    } else if (option_from === "yard" && option_to === "kilometer") {
        result.value = Number(input.value)* 0.0009144;
    } else if (option_from === "yard" && option_to === "inch") {
        result.value = Number(input.value)* 36;
    } else if (option_from === "yard" && option_to === "foot") {
        result.value = Number(inyardvalue) *3;
    } else if (option_from === "mile" && option_to === "yard") {
        result.value = input.value;
    } else if (option_from === "yard" && option_to === "mile") {
        result.value = Number(input.value) *0.000568182;
    } else if (option_from === "yard" && option_to === "centimeter") {
        result.value = Number(input.value) *91.44;
    }


    if (option_from === "foot" && option_to === "meter") {
        result.value = Number(input.value)*  0.3048;
    } else if (option_from === "foot" && option_to === "milimeter") {
        result.value = Number(input.value)* 304.8;
    } else if (option_from === "foot" && option_to === "kilometer") {
        result.value = Number(input.value)* 0.0003048;
    } else if (option_from === "foot" && option_to === "inch") {
        result.value = Number(input.value)* 12;
    } else if (option_from === "foot" && option_to === "foot") {
        result.value = input.value;
    } else if (option_from === "foot" && option_to === "yard") {
        result.value = Number(input.value)* 0.333333;
    } else if (option_from === "foot" && option_to === "mile") {
        result.value = Number(input.value) *0.000189394;
    } else if (option_from === "foot" && option_to === "centimeter") {
        result.value = Number(input.value) *30.48;
    }


    if (option_from === "inch" && option_to === "meter") {
        result.value = Number(input.value)* 0.0254;
    } else if (option_from === "inch" && option_to === "milimeter") {
        result.value = Number(input.value)* 25.4;
    } else if (option_from === "inch" && option_to === "kilometer") {
        result.value = Number(input.value)*0.0000254;
    } else if (option_from === "inch" && option_to === "inch") {
        result.value = input.value;
    } else if (option_from === "inch" && option_to === "foot") {
        result.value = Number(input.value)*0.0833333;
    } else if (option_from === "inch" && option_to === "yard") {
        result.value = Number(input.value)* 0.0277778;
    } else if (option_from === "inch" && option_to === "mile") {
        result.value = Number(ininchvalue) *0.0000157828;
    } else if (option_from === "inch" && option_to === "centimeter") {
        result.value = Number(input.value) * 2.54;
    }

}

   




