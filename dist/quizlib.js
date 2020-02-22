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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/quizlib.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/quizlib.css":
/*!*************************!*\
  !*** ./src/quizlib.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/quizlib.js":
/*!************************!*\
  !*** ./src/quizlib.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quizlib_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizlib.css */ "./src/quizlib.css");
/* harmony import */ var _quizlib_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_quizlib_css__WEBPACK_IMPORTED_MODULE_0__);


/**
 * QuizLib version 1.0.1
 * by Andy Palmer
 * https://alpsquid.github.io/quizlib
 */

/**
 * Class that represents an HTML Quiz. Provides methods for checking answers, generating a score and providing visual feedback.  
 *
 * See https://alpsquid.github.io/quizlib for usage
 *
 * @class Quiz
 * @constructor
 * @param {String} quizContainer ID of the quiz container element.
 * @param {Array} answers Array of correct answers using the input value. e.g. ['a', '7', ['a', 'b']].
 *        Can use nested arrays for multi-answers such as checkbox questions
 * @example
 * 		new Quiz('quiz-div', ['a', '7', ['c', 'd'], 'squids', ['a', 'b']]);
 */
var Quiz = function(quizContainer, answers) {
	/**
	 * Enum containing classes used by QuizLib as follows:
	 * - **QUESTION**: 'quizlib-question'
	 *   - used to identify a question element
	 * - **QUESTION_TITLE**: 'quizlib-question-title'
	 *   - used to identify the question title element
	 * - **QUESTION_WARNING**: 'quizlib-question-answers'
	 *   - used to identify the element containing question answers
	 * - **QUESTION_ANSWERS**: 'quizlib-question-warning'
	 *   - used by the 'unanswered question warning' element. Removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **CORRECT**: 'quizlib-correct'
	 *   - added to question titles to highlight correctly answered questions.  
	 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **INCORRECT**: 'quizlib-incorrect'
	 *   - added to question titles to highlight incorrectly answered questions.  
	 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
	 * - **TEMP**: 'quizlib-temp'
	 *   - Add to any elements you want to be removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} (called by {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}}).
	 *     For example, adding an element with the correct answer in your {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} callback and have it be removed automatically
	 * 
	 * @property Classes
	 * @type Object
	 * @default See above
	 * @final
	 * @deprecated Since version 1.0.1, Classes should be accessed through the static context (Quiz.Classes)
	 */
	this.Classes = Object.freeze({
		QUESTION: "quizlib-question", 
		QUESTION_TITLE: "quizlib-question-title",
		QUESTION_ANSWERS: "quizlib-question-answers",
		QUESTION_WARNING: "quizlib-question-warning",
		CORRECT: "quizlib-correct",
		INCORRECT: "quizlib-incorrect",
		TEMP: "quizlib-temp"
	});

	/**
	 * Warning displayed on unanswered questions
	 *
	 * @property unansweredQuestionText
	 * @type String
	 * @default 'Unanswered Question!'
	 */
	this.unansweredQuestionText = 'Unanswered Question!';

	// Quiz container element
	this.container = document.getElementById(quizContainer);
	this.questions = [];
	/**
	 * Quiz Result object containing quiz score information. See {{#crossLink "QuizResult"}}{{/crossLink}}
	 *
	 * @property result
	 * @type QuizResult
	 */
	this.result = new QuizResult();
	/**
	 * User defined answers taken from constructor
	 *
	 * @property answers
	 * @type Array
	 */
	this.answers = answers;

	// Get all the questions and add element to the questions array
	for (var i=0; i < this.container.children.length; i++) {
		if (this.container.children[i].classList.contains(Quiz.Classes.QUESTION)) {
			this.questions.push(this.container.children[i]);
		}
	}

	if (this.answers.length != this.questions.length) {
		throw new Error("Number of answers does not match number of questions!");
	}
};

/**
 * Enum containing classes used by QuizLib as follows:
 * - **QUESTION**: 'quizlib-question'
 *   - used to identify a question element
 * - **QUESTION_TITLE**: 'quizlib-question-title'
 *   - used to identify the question title element
 * - **QUESTION_WARNING**: 'quizlib-question-answers'
 *   - used to identify the element containing question answers
 * - **QUESTION_ANSWERS**: 'quizlib-question-warning'
 *   - used by the 'unanswered question warning' element. Removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **CORRECT**: 'quizlib-correct'
 *   - added to question titles to highlight correctly answered questions.
 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **INCORRECT**: 'quizlib-incorrect'
 *   - added to question titles to highlight incorrectly answered questions.
 *     Use freely to take advantage of {{#crossLink "Quiz/highlightResults:method"}}{{/crossLink}} and {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}}
 * - **TEMP**: 'quizlib-temp'
 *   - Add to any elements you want to be removed by {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} (called by {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}}).
 *     For example, adding an element with the correct answer in your {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} callback and have it be removed automatically
 *
 * @property Classes
 * @type Object
 * @default See above
 * @final
 */
Quiz.Classes = Object.freeze({
    QUESTION: "quizlib-question",
    QUESTION_TITLE: "quizlib-question-title",
    QUESTION_ANSWERS: "quizlib-question-answers",
    QUESTION_WARNING: "quizlib-question-warning",
    CORRECT: "quizlib-correct",
    INCORRECT: "quizlib-incorrect",
    TEMP: "quizlib-temp"
});

/**
 * Checks quiz answers against provided answers. Calls {{#crossLink "Quiz/clearHighlights:method"}}{{/crossLink}} for each question.
 *
 * @method checkAnswers
 * @param {Boolean} [flagUnanswered=true] Whether to ignore unanswered questions. If false, unanswered questions will not be flagged
 * @return {Boolean} True or if *flagUnanswered* is true: True if all questions have been answered. Otherwise false and unanswered questions are highlighted.
 */
Quiz.prototype.checkAnswers = function(flagUnanswered) {
	if (flagUnanswered === undefined) flagUnanswered = true;
	var unansweredQs = [];
	var questionResults = [];
	for (var i=0; i < this.questions.length; i++) {
		var question = this.questions[i];
		var answer = this.answers[i];
		var userAnswer = [];
		
		this.clearHighlights(question);
		
		// Get answers
		var answerInputs = question.getElementsByClassName(Quiz.Classes.QUESTION_ANSWERS)[0].getElementsByTagName('input');
		var input;
		for (var k=0; k < answerInputs.length; k++) {
			input = answerInputs[k];
			if (input.type === "checkbox" || input.type === "radio") {
				 if (input.checked) userAnswer.push(input.value);
			} else if (input.value !== '') {
				userAnswer.push(input.value);
			}
		}
				
		// Remove single answer from array to match provided answer format
		if (userAnswer.length == 1 && !Array.isArray(answer)) {
			userAnswer = userAnswer[0];
		} else if (userAnswer.length === 0) {
			unansweredQs.push(question);
		}
		
		// Check the answers.
		// For single-choice questions, one correct answer must be given (out of perhaps multiple correct ones).
		if (input.type === "radio") {
			// Remove the single answer from its array, if it's still in there.
			if (Array.isArray(userAnswer) && userAnswer.length == 1) {
				userAnswer = userAnswer[0];
			}
		
			if (Array.isArray(answer)) {
				questionResults.push(answer.indexOf(userAnswer) >= 0);
			}
			else {
				questionResults.push(userAnswer === answer);
			}
		}
		// For multiple-choice questions (type "checkbox") and free-text questions, all correct answers must be given.
		else {
			questionResults.push(Utils.compare(userAnswer, answer));
		}
	}

	if (unansweredQs.length === 0 || !flagUnanswered) {
		this.result.setResults(questionResults);
		return true;
	}
	else {
		// Highlight unanswered questions if set
		for (i=0; i < unansweredQs.length; i++) {
			var warning = document.createElement('span');
			warning.appendChild(document.createTextNode(this.unansweredQuestionText));
			warning.className = Quiz.Classes.QUESTION_WARNING;
			unansweredQs[i].getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].appendChild(warning);
		}
	}
	return false;
};

/**
 * Clears highlighting for a question element (correct and incorrect classes), including unanswered question warnings and elements using the Classes.TEMP class
 * 
 * @method clearHighlights
 * @param {HTMLDocument} question Question element to clear
 */
Quiz.prototype.clearHighlights = function(question) {
	// Remove question warning if it exists
	var questionWarnings = question.getElementsByClassName(Quiz.Classes.QUESTION_WARNING);
	while (questionWarnings.length > 0) {
		questionWarnings[0].parentNode.removeChild(questionWarnings[0]);
	}
	
	// Remove highlighted elements
	var highlightedQuestions = [question.getElementsByClassName(Quiz.Classes.CORRECT), question.getElementsByClassName(this.Classes.INCORRECT)];
	var highlightedElement;
	for (i=0; i < highlightedQuestions.length; i++) {
		while (highlightedQuestions[i].length > 0) {
			highlightedElement = highlightedQuestions[i][0];
			highlightedElement.classList.remove(Quiz.Classes.CORRECT);
			highlightedElement.classList.remove(Quiz.Classes.INCORRECT);
		}
	}
	
	// Remove temp elements
	var tempElements = question.getElementsByClassName(Quiz.Classes.TEMP);
	while (tempElements.length > 0) {
		tempElements[0].parentNode.removeChild(tempElements[0]);
	}
};

/** 
 * Highlights correctly and incorrectly answered questions by:  
 * - Adding the class 'quizlib-correct' to correctly answered question titles
 * - Adding the class 'quizlib-incorrect' to incorrectly answered question titles
 * 
 * @method highlightResults
 * @param {Function} [questionCallback] Optional callback for each question with the following arguments:
 * 1. Quiz: the quiz object
 * 2. Element: the question element
 * 3. Number: question number
 * 4. Boolean: true if correct, false if incorrect.
 * 
 * This allows you to further customise the handling of answered questions (and decouples the library from a specific HTML structure), for example highlighting the correct answer(s) on incorrect questions.  
 * Use the Classes.TEMP ('quizlib-temp') class on added elements that you want removing when {{#crossLink "Quiz/checkAnswers:method"}}{{/crossLink}} is called
 * 
 * @example
 * ```
 *    // Method Call
 *    quiz.highlightResults(handleAnswers);
 *    
 *    // handleAnswers callback
 *    function handleAnswers(quizObject, questionElement, questionNo, correctFlag) {
 *        ...
 *    }
 * ```
 */
Quiz.prototype.highlightResults = function(questionCallback) {
	var question;
	for (var i=0; i < this.questions.length; i++) {
		question = this.questions[i];
		if (this.result.results[i]) {
			question.getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].classList.add(Quiz.Classes.CORRECT);
		}
		else {
			question.getElementsByClassName(Quiz.Classes.QUESTION_TITLE)[0].classList.add(Quiz.Classes.INCORRECT);
		}
		if (questionCallback !== undefined) questionCallback(this, question, i, this.result.results[i]);
	}
};


/**
 * Quiz Result class that holds score information
 *
 * @class QuizResult
 * @constructor
 */
var QuizResult = function() {
	/**
	 * Array of booleans where the index is the question number and the value is whether the question was answered correctly. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property results
	 * @type Array
	 */
	this.results = [];
	/**
	 * Total number of questions. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property totalQuestions
	 * @type Number
	 */
	this.totalQuestions = 0;
	/**
	 * Number of questions answered correctly. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property score
	 * @type Number
	 */
	this.score = 0;
	/**
	 * Percentage score between 0 and 1. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property scorePercent
	 * @type Number
	 */
	this.scorePercent = 0;
	/**
	 * Formatted score percent that's more useful to humans (1 - 100). Percent is rounded down. Updated by {{#crossLink "QuizResult/setResults:method"}}{{/crossLink}}
	 * @property scorePercentFormatted
	 * @type Number
	 */
	this.scorePercentFormatted = 0;
};

/**
 * Calculates score information from an array of question results and updates properties
 *
 * @method setResults
 * @param {Array} questionResults Array of question results where the index is the question number and the value is whether the question was answered correctly. e.g. [true, true, false]
 */
QuizResult.prototype.setResults = function(questionResults) {
	this.results = questionResults;
	this.totalQuestions = this.results.length;
	this.score = 0;
	for (var i=0; i < this.results.length; i++) {
		if (this.results[i]) this.score++;
	}
	this.scorePercent = this.score / this.totalQuestions;
	this.scorePercentFormatted = Math.floor(this.scorePercent * 100);
};


/**
 * Utils class that provides useful methods
 *
 * @class Utils
 */
var Utils = function() {};
/**
 * Compare two objects without coercion. If objects are arrays, their contents will be compared, including order.
 *
 * @method compare
 * @param {Object} obj1 main object
 * @param {Object} obj2 object to compare obj1 against
 * @return {boolean} True if objects are equal
 */
Utils.compare = function(obj1, obj2) {
	if (obj1.length != obj2.length) return false;

	if (Array.isArray(obj1) && Array.isArray(obj2)) {
		for (var i=0; i < obj1.length; i++) {
			if (obj1[i] !== obj2[i]) return false;
		}
		return true;
	}
	return obj1 === obj2;
};


/***/ })

/******/ });
//# sourceMappingURL=quizlib.js.map