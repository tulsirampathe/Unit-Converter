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



    if (option_from === "second" && option_to === "minute") {
        result.value = Number(input.value) / 60;
    } else if (option_from === "second" && option_to === "hour") {
        result.value = Number(input.value) / 3600;
    } else if (option_from === "second" && option_to === "day") {
        result.value = Number(input.value) / 86400;
    } else if (option_from === "second" && option_to === "week") {
        result.value = Number(input.value) / 604800;
    } else if (option_from === "second" && option_to === "year") {
        result.value = Number(input.value) / 31536000;
    } else if (option_from === "second" && option_to === "second") {
        result.value = input.value;
    }


    if (option_from === "minute" && option_to === "second") {
        result.value = Number(input.value) * 60;
    } else if (option_from === "minute" && option_to === "hour") {
        result.value = Number(input.value) / 60;
    } else if (option_from === "minute" && option_to === "day") {
        result.value = Number(input.value) / 1440;
    } else if (option_from === "minute" && option_to === "week") {
        result.value = Number(input.value) / 10080;
    } else if (option_from === "minute" && option_to === "year") {
        result.value = Number(input.value) / 525600;
    } else if (option_from === "minute" && option_to === "minute") {
        result.value = input.value;
    }


    if (option_from === "hour" && option_to === "second") {
        result.value = Number(input.value) * 3600;
    } else if (option_from === "hour" && option_to === "minute") {
        result.value = Number(input.value) * 60;
    } else if (option_from === "hour" && option_to === "day") {
        result.value = Number(input.value) / 24;
    } else if (option_from === "hour" && option_to === "week") {
        result.value = Number(input.value) / 168;
    } else if (option_from === "hour" && option_to === "year") {
        result.value = Number(input.value) / 8, 760;
    } else if (option_from === "hour" && option_to === "hour") {
        result.value = input.value;
    }


    if (option_from === "day" && option_to === "second") {
        result.value = Number(input.value) * 86400;
    } else if (option_from === "day" && option_to === "minute") {
        result.value = Number(input.value) * 1440;
    } else if (option_from === "day" && option_to === "hour") {
        result.value = Number(input.value) * 24;
    } else if (option_from === "day" && option_to === "week") {
        result.value = Number(input.value) / 7;
    } else if (option_from === "day" && option_to === "year") {
        result.value = Number(input.value) / 365.25;
    } else if (option_from === "day" && option_to === "day") {
        result.value = input.value;
    }


    if (option_from === "week" && option_to === "second") {
        result.value = Number(input.value) * 604800;
    } else if (option_from === "week" && option_to === "minute") {
        result.value = Number(input.value) * 10080;
    } else if (option_from === "week" && option_to === "hour") {
        result.value = Number(input.value) * 168;
    } else if (option_from === "week" && option_to === "day") {
        result.value = Number(input.value) * 7;
    } else if (option_from === "week" && option_to === "year") {
        result.value = Number(input.value) / 52.1775;
    } else if (option_from === "week" && option_to === "week") {
        result.value = input.value;
    }



    if (option_from === "year" && option_to === "second") {
        result.value = Number(input.value) * 31536000;
    } else if (option_from === "year" && option_to === "minute") {
        result.value = Number(input.value) * 525600;
    } else if (option_from === "year" && option_to === "hour") {
        result.value = Number(input.value) * 8760;
    } else if (option_from === "year" && option_to === "day") {
        result.value = Number(input.value) * 365.25;
    } else if (option_from === "year" && option_to === "week") {
        result.value = Number(input.value) * 52.1775;
    } else if (option_from === "year" && option_to === "year") {
        result.value = input.value;
    }

}








