// section 1 linear gradient
const linearGradientFirstExample = function () {
    let backgroundLinearGradientFirstExample = document.getElementById("visualForLinearGradientFirstExample");
    const degrees = document.querySelector('input[name="degrees"]')
    const width = document.querySelector('input[name="width"]')
    const degraded = document.querySelector('input[name="degraded"]')
    backgroundLinearGradientFirstExample.style.background = "linear-gradient(" + degrees.value + "deg, rgb(0, 204, 203) " + width.value + "%, transparent " + degraded.value + "%), url('../images/linearGradient1.jpg')";
}

// section 2 linear gradient
const linearGradientSecondExample = function () {
    let backgroundLinearGradientSecondExample = document.getElementById("visualForLinearGradientSecondExample");
    const colorsNumber = document.querySelector('input[name="colorsNumber"]')
    const colorsArray = [
        "linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent 43%)",
        "linear-gradient(135deg, rgb(223, 115, 255) 55%, transparent 45%)",
        "linear-gradient(45deg, rgb(253, 108, 158) 45%, transparent 45%)",
        "linear-gradient(-45deg, rgb(96, 80, 220) 30%, transparent 30%)"
    ]
    let cssProperty = "";

    for (let i = 0; i < colorsNumber.value; i++) {
        if (i == colorsNumber.value - 1) {
            cssProperty = colorsArray[i] + cssProperty;

        } else {
            cssProperty = ", " + colorsArray[i] + cssProperty;

        }
        backgroundLinearGradientSecondExample.style.background = cssProperty;

    }
}

// section 3 linear gradient
const linearGradientThirdExample = function () {
    let backgroundLinearGradientThirdExample = document.getElementById("visualForLinearGradientThirdExample");
    const firstDegraded = document.querySelector('input[name="firstDegraded"]')
    const secondDegraded = document.querySelector('input[name="secondDegraded"]')
    const thirdDegraded = document.querySelector('input[name="thirdDegraded"]')
    const fourthDegraded = document.querySelector('input[name="fourthDegraded"]')
    backgroundLinearGradientThirdExample.style.background =
        "linear-gradient(-47deg, rgb(248, 142, 85) 25%, transparent " + firstDegraded.value + "%), linear-gradient(45deg, rgb(253, 108, 158) 34%, transparent " + secondDegraded.value + "%), linear-gradient(100deg, rgb(223, 115, 255) 55%, transparent " + thirdDegraded.value + "%), linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent " + fourthDegraded.value + "%)";
    console.log("linear-gradient(-47 deg, rgb(248, 142, 85) 25%, transparent" + firstDegraded.value + "%), linear-gradient(45 deg, rgb(253, 108, 158) 34%, transparent" + secondDegraded.value + "%), linear-gradient(100 deg, rgb(223, 115, 255) 55%, transparent" + thirdDegraded.value + "%), linear-gradient(30 deg, rgb(121, 248, 248) 100%, transparent" + fourthDegraded.value + "%)")
}

// section 2 radial gradient
const radialGradientSecondExample = function () {
    let backgroundRadialGradientSecondExample = document.getElementById("visualForRadialGradientSecondExample");
    const degradeSecondRadialGradient = document.querySelector('input[name="degradeSecondRadialGradient"]')
    const XplaceSecondRadialGradient = document.querySelector('input[name="XplaceSecondRadialGradient"]')
    const YplaceSecondRadialGradient = document.querySelector('input[name="YplaceSecondRadialGradient"]')
    const circleAndEllipseArray = [
        circleAndEllipse = document.querySelector('.radialGradientSecondExample input[name="circleAndEllipseChecked"]')
    ]

    for (let i = 0; i < circleAndEllipseArray.length; i++) {

        if (circleAndEllipseArray[0].checked == true) {
            shape = "circle "
        } else {
            shape = "ellipse "
        }
        backgroundRadialGradientSecondExample.style.background = "radial-gradient(" +
            shape + "at " + XplaceSecondRadialGradient.value + "% " + YplaceSecondRadialGradient.value + "%, transparent 30%, rgb(96, 80, 220) " + degradeSecondRadialGradient.value + "%)";
    }

}

const addEventListenerToInputs = function (inputsCalled, functionCalled) {
    let inputsArray = document.querySelectorAll(inputsCalled);
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].addEventListener("input", functionCalled)
    }
}

addEventListenerToInputs(".linearGradientFirstExample input", linearGradientFirstExample)
addEventListenerToInputs(".linearGradientThirdExample input", linearGradientThirdExample)
addEventListenerToInputs(".linearGradientSecondExample input", linearGradientSecondExample)
addEventListenerToInputs(".radialGradientSecondExample input", radialGradientSecondExample)