/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// section 1 linear gradient\nconst linearGradientFirstExample = function () {\n  let backgroundLinearGradientFirstExample = document.getElementById(\n    'visualForLinearGradientFirstExample'\n  );\n  const degrees = document.querySelector('input[name=\"degrees\"]');\n  const width = document.querySelector('input[name=\"width\"]');\n  const degraded = document.querySelector('input[name=\"degraded\"]');\n\n  const colorOrTransparentArray = [\n    (colorOrTransparent = document.querySelector(\n      '.linearGradientFirstExample input[name=\"colorOrTransparentChecked\"]'\n    )),\n  ];\n\n  for (let i = 0; i < colorOrTransparentArray.length; i++) {\n    if (colorOrTransparentArray[0].checked == true) {\n      shape = 'transparent ';\n    } else {\n      shape = 'rgb(116, 208, 241) ';\n    }\n    cssProperty =\n      'linear-gradient(' +\n      degrees.value +\n      'deg, rgb(0, 204, 203) ' +\n      width.value +\n      '%, ' +\n      shape +\n      ' ' +\n      degraded.value +\n      \"%), url('images/linearGradient1.jpg')\";\n    backgroundLinearGradientFirstExample.style.backgroundImage = cssProperty;\n\n    syncPropertyToInputs(\".linearGradientFirstExample\", cssProperty)\n  };\n}\n\n// section 2 linear gradient\nconst linearGradientSecondExample = function () {\n  let backgroundLinearGradientSecondExample = document.getElementById(\n    'visualForLinearGradientSecondExample'\n  );\n  const colorsNumber = document.querySelector('input[name=\"colorsNumber\"]');\n  const colorsArray = [\n    'linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent 43%)',\n    'linear-gradient(135deg, rgb(223, 115, 255) 55%, transparent 45%)',\n    'linear-gradient(45deg, rgb(253, 108, 158) 45%, transparent 45%)',\n    'linear-gradient(-45deg, rgb(96, 80, 220) 30%, transparent 30%)',\n  ];\n  let cssProperty = '';\n\n  for (let i = 0; i < colorsNumber.value; i++) {\n    if (i == colorsNumber.value - 1) {\n      cssProperty = colorsArray[i] + cssProperty;\n    } else {\n      cssProperty = ', ' + colorsArray[i] + cssProperty;\n    }\n  }\n  backgroundLinearGradientSecondExample.style.background = cssProperty;\n  syncPropertyToInputs(\".linearGradientSecondExample\", cssProperty)\n\n};\n\n// section 3 linear gradient\nconst linearGradientThirdExample = function () {\n  let backgroundLinearGradientThirdExample = document.getElementById(\n    'visualForLinearGradientThirdExample'\n  );\n  const firstDegraded = document.querySelector('input[name=\"firstDegraded\"]');\n  const secondDegraded = document.querySelector('input[name=\"secondDegraded\"]');\n  const thirdDegraded = document.querySelector('input[name=\"thirdDegraded\"]');\n  const fourthDegraded = document.querySelector('input[name=\"fourthDegraded\"]');\n  cssProperty =\n    'linear-gradient(-45deg, rgb(248, 142, 85) 30%, transparent ' +\n    firstDegraded.value +\n    '%), linear-gradient(45deg, rgb(253, 108, 158) 45%, transparent ' +\n    secondDegraded.value +\n    '%), linear-gradient(135deg, rgb(223, 115, 255) 55%, transparent ' +\n    thirdDegraded.value +\n    '%), linear-gradient(30deg, rgb(121, 248, 248) 100%, transparent ' +\n    '100' +\n    '%)';\n  backgroundLinearGradientThirdExample.style.backgroundImage = cssProperty;\n\n  syncPropertyToInputs(\".linearGradientThirdExample\", cssProperty)\n\n};\n\n// section 1 radial gradient\nconst radialGradientfirstExample = function () {\n  let backgroundRadialGradientFirstExample = document.getElementById(\n    'visualForRadialGradientFirstExample'\n  );\n  const blueCircle = document.querySelector('input[name=\"blueCircle\"]');\n  const pictureCircle = document.querySelector('input[name=\"pictureCircle\"]');\n  const degradedBlueCircle = document.querySelector(\n    'input[name=\"degradedBlueCircle\"]'\n  );\n  const degradedPictureCircle = document.querySelector(\n    'input[name=\"degradedPictureCircle\"]'\n  );\n  cssProperty =\n    'radial-gradient(circle at 50%, transparent ' +\n    blueCircle.value +\n    '%, rgba(223, 242, 255) ' +\n    degradedBlueCircle.value +\n    '%), radial-gradient(circle at 50%, rgba(96, 80, 220, 0.1) ' +\n    pictureCircle.value +\n    '%, #1e90ff ' +\n    degradedPictureCircle.value +\n    \"%), url('images/profilePicture.jpg')\";\n  backgroundRadialGradientFirstExample.style.backgroundImage = cssProperty;\n\n  syncPropertyToInputs(\".radialGradientFirstExample\", cssProperty)\n\n};\n\n// section 2 radial gradient\nconst radialGradientSecondExample = function () {\n  let backgroundRadialGradientSecondExample = document.getElementById(\n    'visualForRadialGradientSecondExample'\n  );\n  const degradeSecondRadialGradient = document.querySelector(\n    'input[name=\"degradeSecondRadialGradient\"]'\n  );\n  const XplaceSecondRadialGradient = document.querySelector(\n    'input[name=\"XplaceSecondRadialGradient\"]'\n  );\n  const YplaceSecondRadialGradient = document.querySelector(\n    'input[name=\"YplaceSecondRadialGradient\"]'\n  );\n  const circleAndEllipseArray = [\n    (circleAndEllipse = document.querySelector(\n      '.radialGradientSecondExample input[name=\"circleAndEllipseChecked\"]'\n    )),\n  ];\n\n  for (let i = 0; i < circleAndEllipseArray.length; i++) {\n    if (circleAndEllipseArray[0].checked == true) {\n      shape = 'circle ';\n    } else {\n      shape = 'ellipse ';\n    }\n    cssProperty =\n      'radial-gradient(' +\n      shape +\n      'at ' +\n      XplaceSecondRadialGradient.value +\n      '% ' +\n      YplaceSecondRadialGradient.value +\n      '%, transparent 30%, rgb(96, 80, 220) ' +\n      degradeSecondRadialGradient.value +\n      \"%), url('images/radialGradient2.jpg')\";\n  }\n  backgroundRadialGradientSecondExample.style.backgroundImage = cssProperty;\n  syncPropertyToInputs(\".radialGradientSecondExample\", cssProperty)\n};\n\n// section 1 conic gradient\nconst conicGradientSecondExample = function () {\n  let backgroundConicGradientSecondExample = document.getElementById(\n    'visualForConicGradientFirstExample'\n  );\n  const slicesNumber = document.querySelector('input[name=\"slicesNumber\"]');\n  const slicesArray = [\n    'rgb(150, 131, 236) 200deg',\n    'rgb(10, 186, 181) 124deg 216deg',\n    'rgb(1, 49, 180) 65deg 124deg',\n    'rgb(44, 117, 255) 18deg 65deg',\n    'rgb(142, 162, 198) 15deg 45deg',\n    'rgb(58, 142, 186) 15deg',\n  ];\n\n  let cssPropertyConic = 'rgb(150, 131, 236) 200deg';\n\n  for (let i = 1; i < slicesNumber.value; i++) {\n    cssPropertyConic = slicesArray[i] + ', ' + cssPropertyConic;\n  }\n  cssPropertyConic =\n    'radial-gradient(circle at 50%, transparent 35%, rgba(169, 234, 254) 35%), conic-gradient(' +\n    cssPropertyConic +\n    ')';\n\n  backgroundConicGradientSecondExample.style.backgroundImage = cssPropertyConic;\n  syncPropertyToInputs(\".conicGradientFirstExample\", cssPropertyConic)\n\n};\n\nconst addEventListenerToInputs = function (inputsCalled, functionCalled) {\n  let inputsArray = document.querySelectorAll(inputsCalled);\n  for (let i = 0; i < inputsArray.length; i++) {\n    inputsArray[i].addEventListener('input', functionCalled);\n  }\n};\n\naddEventListenerToInputs(\n  '.linearGradientFirstExample input',\n  linearGradientFirstExample\n);\naddEventListenerToInputs(\n  '.linearGradientThirdExample input',\n  linearGradientThirdExample\n);\naddEventListenerToInputs(\n  '.linearGradientSecondExample input',\n  linearGradientSecondExample\n);\naddEventListenerToInputs(\n  '.radialGradientSecondExample input',\n  radialGradientSecondExample\n);\naddEventListenerToInputs(\n  '.conicGradientFirstExample input',\n  conicGradientSecondExample\n);\naddEventListenerToInputs(\n  '.radialGradientFirstExample input',\n  radialGradientfirstExample\n);\n\nconst forms = document.querySelectorAll('form');\nconst copyPropertyToClipboard = function (event) {\n  event.preventDefault();\n\n  const input = event.srcElement.querySelector('input[name=\"cssProperty\"]');\n  input.select();\n  document.execCommand('copy');\n};\nconst attachFunctionToSubmit = function (form) {\n  form.addEventListener('submit', copyPropertyToClipboard);\n};\n\nfunction syncPropertyToInputs(inputSelector, cssProperty) {\n\n  let inputs = document.querySelectorAll(\n    inputSelector + ' .copyCode input'\n  );\n\n  function copyPropertyToInput(input) {\n    input.setAttribute(\n      'value',\n      'background-image : ' + cssProperty\n    );\n  }\n  inputs.forEach(copyPropertyToInput);\n}\nforms.forEach(attachFunctionToSubmit);\n\n\n\nlinearGradientFirstExample()\nlinearGradientSecondExample()\nlinearGradientThirdExample()\nradialGradientfirstExample()\nradialGradientSecondExample()\nconicGradientSecondExample()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });