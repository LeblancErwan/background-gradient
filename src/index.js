// section 1 linear gradient
const linearGradientFirstExample = function () {
  let backgroundLinearGradientFirstExample = document.getElementById(
    'visualForLinearGradientFirstExample'
  );
  const degrees = document.querySelector('input[name="degrees"]');
  const width = document.querySelector('input[name="width"]');
  const degraded = document.querySelector('input[name="degraded"]');

  const colorOrTransparentArray = [
    (colorOrTransparent = document.querySelector(
      '.linearGradientFirstExample input[name="colorOrTransparentChecked"]'
    )),
  ];

  for (let i = 0; i < colorOrTransparentArray.length; i++) {
    if (colorOrTransparentArray[0].checked == true) {
      shape = 'transparent ';
    } else {
      shape = 'rgb(116, 208, 241) ';
    }
    cssProperty =
      'linear-gradient(' +
      degrees.value +
      'deg, rgb(0, 204, 203) ' +
      width.value +
      '%, ' +
      shape +
      ' ' +
      degraded.value +
      "%), url('images/linearGradient1.jpg')";
    backgroundLinearGradientFirstExample.style.backgroundImage = cssProperty;

    syncPropertyToInputs(".linearGradientFirstExample", cssProperty)
  };
}

// section 2 linear gradient
const linearGradientSecondExample = function () {
  let backgroundLinearGradientSecondExample = document.getElementById(
    'visualForLinearGradientSecondExample'
  );
  const colorsNumber = document.querySelector('input[name="colorsNumber"]');
  const colorsArray = [
    'linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent 43%)',
    'linear-gradient(135deg, rgb(223, 115, 255) 55%, transparent 45%)',
    'linear-gradient(45deg, rgb(253, 108, 158) 45%, transparent 45%)',
    'linear-gradient(-45deg, rgb(96, 80, 220) 30%, transparent 30%)',
  ];
  let cssProperty = '';

  for (let i = 0; i < colorsNumber.value; i++) {
    if (i == colorsNumber.value - 1) {
      cssProperty = colorsArray[i] + cssProperty;
    } else {
      cssProperty = ', ' + colorsArray[i] + cssProperty;
    }
  }
  backgroundLinearGradientSecondExample.style.background = cssProperty;
  syncPropertyToInputs(".linearGradientSecondExample", cssProperty)

};

// section 3 linear gradient
const linearGradientThirdExample = function () {
  let backgroundLinearGradientThirdExample = document.getElementById(
    'visualForLinearGradientThirdExample'
  );
  const firstDegraded = document.querySelector('input[name="firstDegraded"]');
  const secondDegraded = document.querySelector('input[name="secondDegraded"]');
  const thirdDegraded = document.querySelector('input[name="thirdDegraded"]');
  const fourthDegraded = document.querySelector('input[name="fourthDegraded"]');
  cssProperty =
    'linear-gradient(-45deg, rgb(248, 142, 85) 30%, transparent ' +
    firstDegraded.value +
    '%), linear-gradient(45deg, rgb(253, 108, 158) 45%, transparent ' +
    secondDegraded.value +
    '%), linear-gradient(135deg, rgb(223, 115, 255) 55%, transparent ' +
    thirdDegraded.value +
    '%), linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent ' +
    '100' +
    '%)';
  backgroundLinearGradientThirdExample.style.backgroundImage = cssProperty;

  syncPropertyToInputs(".linearGradientThirdExample", cssProperty)

};

// section 1 radial gradient
const radialGradientfirstExample = function () {
  let backgroundRadialGradientFirstExample = document.getElementById(
    'visualForRadialGradientFirstExample'
  );
  const blueCircle = document.querySelector('input[name="blueCircle"]');
  const pictureCircle = document.querySelector('input[name="pictureCircle"]');
  const degradedBlueCircle = document.querySelector(
    'input[name="degradedBlueCircle"]'
  );
  const degradedPictureCircle = document.querySelector(
    'input[name="degradedPictureCircle"]'
  );
  cssProperty =
    'radial-gradient(circle at 50%, transparent ' +
    blueCircle.value +
    '%, rgba(223, 242, 255) ' +
    degradedBlueCircle.value +
    '%), radial-gradient(circle at 50%, rgba(96, 80, 220, 0.1) ' +
    pictureCircle.value +
    '%, #1e90ff ' +
    degradedPictureCircle.value +
    "%), url('images/profilePicture.jpg')";
  backgroundRadialGradientFirstExample.style.backgroundImage = cssProperty;

  syncPropertyToInputs(".radialGradientFirstExample", cssProperty)

};

// section 2 radial gradient
const radialGradientSecondExample = function () {
  let backgroundRadialGradientSecondExample = document.getElementById(
    'visualForRadialGradientSecondExample'
  );
  const degradeSecondRadialGradient = document.querySelector(
    'input[name="degradeSecondRadialGradient"]'
  );
  const XplaceSecondRadialGradient = document.querySelector(
    'input[name="XplaceSecondRadialGradient"]'
  );
  const YplaceSecondRadialGradient = document.querySelector(
    'input[name="YplaceSecondRadialGradient"]'
  );
  const circleAndEllipseArray = [
    (circleAndEllipse = document.querySelector(
      '.radialGradientSecondExample input[name="circleAndEllipseChecked"]'
    )),
  ];

  for (let i = 0; i < circleAndEllipseArray.length; i++) {
    if (circleAndEllipseArray[0].checked == true) {
      shape = 'circle ';
    } else {
      shape = 'ellipse ';
    }
    cssProperty =
      'radial-gradient(' +
      shape +
      'at ' +
      XplaceSecondRadialGradient.value +
      '% ' +
      YplaceSecondRadialGradient.value +
      '%, transparent 30%, rgb(96, 80, 220) ' +
      degradeSecondRadialGradient.value +
      "%), url('images/radialGradient2.jpg')";
  }
  backgroundRadialGradientSecondExample.style.backgroundImage = cssProperty;
  syncPropertyToInputs(".radialGradientSecondExample", cssProperty)
};

// section 1 conic gradient
const conicGradientSecondExample = function () {
  let backgroundConicGradientSecondExample = document.getElementById(
    'visualForConicGradientFirstExample'
  );
  const slicesNumber = document.querySelector('input[name="slicesNumber"]');
  const slicesArray = [
    'rgb(150, 131, 236) 200deg',
    'rgb(10, 186, 181) 124deg 216deg',
    'rgb(1, 49, 180) 65deg 124deg',
    'rgb(44, 117, 255) 18deg 65deg',
    'rgb(142, 162, 198) 15deg 45deg',
    'rgb(58, 142, 186) 15deg',
  ];

  let cssPropertyConic = 'rgb(150, 131, 236) 200deg';

  for (let i = 1; i < slicesNumber.value; i++) {
    cssPropertyConic = slicesArray[i] + ', ' + cssPropertyConic;
  }
  cssPropertyConic =
    'radial-gradient(circle at 50%, transparent 35%, rgba(169, 234, 254) 35%), conic-gradient(' +
    cssPropertyConic +
    ')';

  backgroundConicGradientSecondExample.style.backgroundImage = cssPropertyConic;
  syncPropertyToInputs(".conicGradientFirstExample", cssPropertyConic)

};

const addEventListenerToInputs = function (inputsCalled, functionCalled) {
  let inputsArray = document.querySelectorAll(inputsCalled);
  for (let i = 0; i < inputsArray.length; i++) {
    inputsArray[i].addEventListener('input', functionCalled);
  }
};

addEventListenerToInputs(
  '.linearGradientFirstExample input',
  linearGradientFirstExample
);
addEventListenerToInputs(
  '.linearGradientThirdExample input',
  linearGradientThirdExample
);
addEventListenerToInputs(
  '.linearGradientSecondExample input',
  linearGradientSecondExample
);
addEventListenerToInputs(
  '.radialGradientSecondExample input',
  radialGradientSecondExample
);
addEventListenerToInputs(
  '.conicGradientFirstExample input',
  conicGradientSecondExample
);
addEventListenerToInputs(
  '.radialGradientFirstExample input',
  radialGradientfirstExample
);

const forms = document.querySelectorAll('form');
const copyPropertyToClipboard = function (event) {
  event.preventDefault();

  const input = event.srcElement.querySelector('input[name="cssProperty"]');
  input.select();
  document.execCommand('copy');
};
const attachFunctionToSubmit = function (form) {
  form.addEventListener('submit', copyPropertyToClipboard);
};

function syncPropertyToInputs(inputSelector, cssProperty) {

  let inputs = document.querySelectorAll(
    inputSelector + ' .copyCode input'
  );

  function copyPropertyToInput(input) {
    input.setAttribute(
      'value',
      'background-image : ' + cssProperty
    );
  }
  inputs.forEach(copyPropertyToInput);
}
forms.forEach(attachFunctionToSubmit);



linearGradientFirstExample()
linearGradientSecondExample()
linearGradientThirdExample()
radialGradientfirstExample()
radialGradientSecondExample()
conicGradientSecondExample()