/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domelementbuilder.js":
/*!**********************************!*\
  !*** ./src/domelementbuilder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elt": () => (/* binding */ elt)
/* harmony export */ });
function elt(name,attrs,...children){
    let element;
    element = document.createElement(name);
    if(attrs) Object.assign(element,attrs)

    for(child of children){
        if (typeof child !="string")
        element.appendChild(child);
        else element.appendChild(document.createTextNode(child));
    }

    return element;
}



/***/ }),

/***/ "./src/homepagebuilder.js":
/*!********************************!*\
  !*** ./src/homepagebuilder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHomePage": () => (/* binding */ buildHomePage)
/* harmony export */ });
/* harmony import */ var _domelementbuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domelementbuilder */ "./src/domelementbuilder.js");


// let content = document.getElementById('content');

function buildHomePage(content){
    content.appendChild((0,_domelementbuilder__WEBPACK_IMPORTED_MODULE_0__.elt)("div", {class: "game"}, 
    (0,_domelementbuilder__WEBPACK_IMPORTED_MODULE_0__.elt)("button",
                {type:"button",
                onclick() {
                    alert();
                  }
                },"click me")))

}


// console.log(document.getElementsByTagName('button'))

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepagebuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepagebuilder */ "./src/homepagebuilder.js");
/* harmony import */ var _domelementbuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelementbuilder */ "./src/domelementbuilder.js");



(0,_domelementbuilder__WEBPACK_IMPORTED_MODULE_1__.elt)('div',{id:'content'});

let content = document.getElementById('content');

(0,_homepagebuilder__WEBPACK_IMPORTED_MODULE_0__.buildHomePage)(content);


// function clickme(){
//     console.log('clicked')
// }


                                        // document.querySelector('input').onclick=function(){alert('hi')}

                                            // elt("label", {}, "Your name: ", elt("input", {
                                            //     type: "text",
                                            //     value: name,
                                            //     onchange(event) {
                                            //       dispatch({type: "setUser", user: event.target.value});
                                            //     }
                                            //   }));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9kb21lbGVtZW50YnVpbGRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lcGFnZWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadUM7O0FBRXZDOztBQUVBO0FBQ0Esd0JBQXdCLHVEQUFHLFNBQVMsY0FBYztBQUNsRCxJQUFJLHVEQUFHO0FBQ1AsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRXNCO0FBQ3RCLHVEOzs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ1I7O0FBRXhDLHVEQUFHLFFBQVEsYUFBYTs7QUFFeEI7O0FBRUEsK0RBQWE7OztBQUdiO0FBQ0E7QUFDQTs7O0FBR0EsOEZBQThGOztBQUU5Riw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDBDQUEwQztBQUN6RztBQUNBLGtEQUFrRCxHIiwiZmlsZSI6ImluZGV4Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlbHQobmFtZSxhdHRycywuLi5jaGlsZHJlbil7XG4gICAgbGV0IGVsZW1lbnQ7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgaWYoYXR0cnMpIE9iamVjdC5hc3NpZ24oZWxlbWVudCxhdHRycylcblxuICAgIGZvcihjaGlsZCBvZiBjaGlsZHJlbil7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgIT1cInN0cmluZ1wiKVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7ZWx0fTsiLCJpbXBvcnQge2VsdH0gZnJvbSAnLi9kb21lbGVtZW50YnVpbGRlcidcblxuLy8gbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBidWlsZEhvbWVQYWdlKGNvbnRlbnQpe1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWx0KFwiZGl2XCIsIHtjbGFzczogXCJnYW1lXCJ9LCBcbiAgICBlbHQoXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7dHlwZTpcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcImNsaWNrIG1lXCIpKSlcblxufVxuXG5leHBvcnQge2J1aWxkSG9tZVBhZ2V9XG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJykpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2J1aWxkSG9tZVBhZ2V9IGZyb20gJy4vaG9tZXBhZ2VidWlsZGVyJztcbmltcG9ydCB7ZWx0fSBmcm9tICcuL2RvbWVsZW1lbnRidWlsZGVyJztcblxuZWx0KCdkaXYnLHtpZDonY29udGVudCd9KTtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5idWlsZEhvbWVQYWdlKGNvbnRlbnQpO1xuXG5cbi8vIGZ1bmN0aW9uIGNsaWNrbWUoKXtcbi8vICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4vLyB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jykub25jbGljaz1mdW5jdGlvbigpe2FsZXJ0KCdoaScpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsdChcImxhYmVsXCIsIHt9LCBcIllvdXIgbmFtZTogXCIsIGVsdChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvbmNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJzZXRVc2VyXCIsIHVzZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0pKTsiXSwic291cmNlUm9vdCI6IiJ9