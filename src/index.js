// section 1 linear gradient
function linearGradientFirstExample() {
    let backgroundLinearGradientFirstExample = document.getElementById("visualForLinearGradientFirstExample");
    const degrees = document.querySelector('input[name="degrees"]')
    const width = document.querySelector('input[name="width"]')
    const degraded = document.querySelector('input[name="degraded"]')
    backgroundLinearGradientFirstExample.style.background = "linear-gradient(" + degrees.value + "deg, rgb(0, 204, 203) " + width.value + "%, transparent " + degraded.value + "%), url('../images/linearGradient1.jpg')";
}

let inputsLinearGradientFirstExample = document.querySelectorAll(".linearGradientFirstExample input");
for (let i = 0; i < inputsLinearGradientFirstExample.length; i++) {
    inputsLinearGradientFirstExample[i].addEventListener("input", linearGradientFirstExample)
}

// section 2 linear gradient
function linearGradientSecondExample() {
    let backgroundLinearGradientThirdExample = document.getElementById("visualForLinearGradientThirdExample");
    const firstDegraded = document.querySelector('input[name="firstDegraded"]')
    const secondDegraded = document.querySelector('input[name="secondDegraded"]')
    const thirdDegraded = document.querySelector('input[name="thirdDegraded"]')
    const fourthDegraded = document.querySelector('input[name="fourthDegraded"]')
    backgroundLinearGradientThirdExample.style.background =
        "linear-gradient(-47deg, rgb(248, 142, 85) 25%, transparent " + firstDegraded.value + "%), linear-gradient(45deg, rgb(253, 108, 158) 34%, transparent " + secondDegraded.value + "%), linear-gradient(100deg, rgb(223, 115, 255) 55%, transparent " + thirdDegraded.value + "%), linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent " + fourthDegraded.value + "%)";
    console.log("linear-gradient(-47 deg, rgb(248, 142, 85) 25%, transparent" + firstDegraded.value + "%), linear-gradient(45 deg, rgb(253, 108, 158) 34%, transparent" + secondDegraded.value + "%), linear-gradient(100 deg, rgb(223, 115, 255) 55%, transparent" + thirdDegraded.value + "%), linear-gradient(30 deg, rgb(121, 248, 248) 100%, transparent" + fourthDegraded.value + "%)")
}

let inputsLinearGradientThirdExample = document.querySelectorAll(".linearGradientThirdExample input");
for (let i = 0; i < inputsLinearGradientThirdExample.length; i++) {
    inputsLinearGradientThirdExample[i].addEventListener("input", linearGradientSecondExample)
}