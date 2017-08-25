/*
	Project: 
		SearchBar.js 
		"homepage." shortcut launcher
	Author:
		Name: Szymon Jackiewicz
		E-Mail: szy.jackiewicz@gmail.com
		Website: http://szymonjackiewi.cz
		GitHub: https://github.com/SzyJ
	Link: 
		https://github.com/SzyJ/homepage.
	Purpose:
		Provide logic for keypresses and functionality
*/

var shiftPressed = false;
var ctrlPressed = false;

var userInput = "";
var cursorPos = 0;

var selectedBmIndex = 0;

var MAX_CHARS = 30;

var relativeKeyMap;

function updateUserInput() {
    var tempString = userInput + " ";
    var inputField = document.getElementById("userInput");
    if (userInput) {
		if (userInput > MAX_CHARS) {

		}
		inputField.innerHTML = tempString.substring(0, cursorPos) + "<u>" + tempString.charAt(cursorPos) + "</u>" + tempString.substring(cursorPos + 1, userInput.length);
		inputField.style.backgroundColor = "#4f585e";
		inputField.style.color = "#FFFFFF";
    } else {
		inputField.innerHTML = "Just start typing...";
		inputField.style.backgroundColor = "#FEFEFE";
		inputField.style.color = "#C4C4C4";
    }
    //document.getElementById("test").innerHTML = "cp: " + cursorPos + ", len: " + userInput.length + ", bmIndex: " + selectedBmIndex + " sc: " + SHORTCUTS["g"];
}


function refreshMatchList() {
    clearOutput();
    for (var i = 0; i < BOOKMARKS.length; i++) {
	outputLine(BOOKMARKS[i].getName(), (i == selectedBmIndex), BOOKMARKS[i].getUrl());
    }
}

window.onload = function() {
    // Reset User Input
    updateUserInput();
	
    refreshMatchList();

    // Set up Keyboard
    relativeKeyMap = getRelativeKeyMap("qwerty_ansi");
}

window.onkeyup = function(e) {
    var keyCode = event.keyCode;

    if (shiftPressed && keyCode == 16) {	// Shift Unpressed
        shiftPressed = false;
    }
    if (ctrlPressed && keyCode == 17) {	// Contrl Unpressed
        ctrlPressed = false;
    }
}

function typeChar(keyCode) {
    var character;
    switch(keyCode) {
		case 60:
			character = "&lt;";
			break;
		case 62:
			character = "&gt";
			break;
		case 34:
			character = "&quot";
			break;
		default:
			character = String.fromCharCode(keyCode);
    }
    userInput = userInput.substring(0, cursorPos) + character + userInput.substring(cursorPos, userInput.length);
    cursorPos++;
}

window.onkeydown = function(e) {
    var keyCode = event.keyCode;
    if (processKeypress(keyCode)) {
		refreshMatchList();
	} else {
		selectedBmIndex = 0;
		reloadSearchScores();
	}
	updateUserInput();
}

function modifySearchScore(index, character) {
}

function sortBmArray() {
    BOOKMARKS.sort(function (a,b) {
	if (a.getScore() == b.getScore()) {
		if (a.getName().length > b.getName().length) {
			return 1;
		} else {
			return -1;
		}
	}
	if (a.getScore() < b.getScore()) {
		return 1;
	}
	if (a.getScore() > b.getScore()) {
		return -1;
	}
	return 0;
   });
}

function reloadSearchScores() {
    var bmNameChar;
    var bookmark;
    var searchChar;
	
    for (var bmIndex = 0; bmIndex < BOOKMARKS.length; bmIndex++) {				// For each bookmark name,
		bookmark = BOOKMARKS[bmIndex];
		bookmark.resetScore();
		for (var searchTermIndex = 0; searchTermIndex < userInput.length; searchTermIndex++) {	// For each character in search,
			searchChar = userInput.toLowerCase().charAt(searchTermIndex);
			if (bookmark.getName().length > searchTermIndex) {
				bmNameChar = bookmark.getName().toLowerCase().charAt(searchTermIndex);
			} else {
				bmNameChar = " ";
			}
			if (bmNameChar == searchChar) {
				bookmark.incrementScore(2);
			} else if (relativeKeyMap[searchChar].includes(bmNameChar)) {
				bookmark.incrementScore(1);
			}
		}
    }
	sortBmArray();
    refreshMatchList();
}

function processKeypress(keyCode) {
    if (!shiftPressed && keyCode == 16) {		// Contrl Pressed
        shiftPressed = true;
		return true;
    }
    if (!ctrlPressed && keyCode == 17) {		// Contrl Pressed
        ctrlPressed = true;
		return true;
    }

    if (keyCode >= 65 && keyCode <= 90) {		//letter
        if (shiftPressed) {	//upper case letter or shortcut
			if (SHORTCUTS[String.fromCharCode(keyCode)] === undefined) {
				
				typeChar(keyCode); //add ascii character ascii(key);
			} else {
				var stringToEnter = SHORTCUTS[String.fromCharCode(keyCode)];
				userInput = userInput + stringToEnter;
				cursorPos = userInput.length;
			}
        } else {	//lower case letter
			typeChar(keyCode+32);//add ascii character ascii(key + 32);
        }
		
		return false;
    } else if (keyCode >= 48 && keyCode <= 57) {	//number or number symbols
		if (shiftPressed) {	//upper case letter

        } else {		//lower case letter
            typeChar(keyCode);//add ascii character ascii(key + 32);
        }
		return false;
    }

    if (keyCode == 37) {// left arrow
		if (cursorPos > 0) {
			if (ctrlPressed) {
				cursorPos = 0;
			} else {
				cursorPos--;
			}
		}
		return true;
    }

    if (keyCode == 39) {	//right arrow
		if (cursorPos < userInput.length) {
			if (ctrlPressed) {
				cursorPos = userInput.length;
			} else {
				cursorPos++;
			}
		}
        
        window.scrollTo(0,document.body.scrollWidth);
		return true;
    }

    if (keyCode == 38) {// up arrow
		if (selectedBmIndex > 0) {
			selectedBmIndex--;
		}
		return true;
    }

    if (keyCode == 40) {// down arrow
		if (selectedBmIndex < BOOKMARKS.length - 1) {
			selectedBmIndex++;
		}
		return true;
    }

    if (keyCode == 8 && cursorPos > 0) { //backspace
		if (ctrlPressed) {
			userInput = userInput.substring(cursorPos, userInput.length);
			cursorPos = 0;
		} else {
			userInput = userInput.substring(0, cursorPos - 1) + userInput.substring(cursorPos, userInput.length);
			cursorPos--;
		}
		return false;
    }

    if (keyCode == 46 && cursorPos < userInput.length) { //delete
	if (ctrlPressed) {
	    userInput = userInput.substring(0, cursorPos)
	} else {
	    userInput = userInput.substring(0, cursorPos) + userInput.substring(cursorPos + 1, userInput.length);
	}
	return false;
    }

    if (keyCode == 188 || (keyCode >= 190&& keyCode <= 192)) { // comma, dot, slash keys
	if (shiftPressed) {
	    typeChar(keyCode - 128);	// Less than, greater than, Question mark
	} else {
	    typeChar(keyCode - 144);	// comma, dot or slash
	}
	return false;
    }

	if (keyCode == 221 || keyCode == 119) { // [ and ] keys
	    if (shiftPressed) {
		typeChar(keyCode + 4);	// braces  {}
	    } else {
		typeChar(keyCode - 28);	// brackets []
	    }
		return false;
	}

	if (keyCode == 222) { // quote key
	    if (shiftPressed) {
		typeChar(34);	// double quote "
		} else {
		    typeChar(39);	// single quote '
		}
		return false;
	}

	if (keyCode == 186) { // ; key
	    if (shiftPressed) {
		typeChar(58);	// :
	    } else {
		typeChar(59);	// ;
	    }
		return false;
	}

    if (keyCode == 187) { // = key
	if (shiftPressed) {
	    typeChar(43);	// +
	} else {
	    typeChar(61);	// =
	}
	return false;
    }

    if (keyCode == 189) { // - key
	if (shiftPressed) {
	    typeChar(95);	// _
	} else {
	    typeChar(45);	// -
	}
	return false;
    }

    if (keyCode == 220) { // \ key
	if (shiftPressed) {
	    typeChar(124);	//  pipe |
	} else {
	    typeChar(92);	// backslash
	}
	return false;
    }

    if (keyCode == 32) { //space
        typeChar(keyCode);
		return false;
    }

    if (keyCode == 13) { //enter
		if (ctrlPressed) {
			window.open(getSearchPattern(SEARCH_ENGINE) + userInput, "_self");
		} else {
			window.open(BOOKMARKS[selectedBmIndex].getUrl(), "_self");
		}
    }
}

function outputLine(string, selected, url) {
    var ul = document.getElementById("searchResults");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(" " + string));
    if (selected) {
		li.className += "selected";
    }
	li.onclick = function() {
		window.open(url, "_self")
	}
    ul.appendChild(li);

    document.getElementById("searchResults").lastChild.innerHTML = string;
    window.scrollTo(0,document.body.scrollHeight);
}

function clearInput() {
    userInput = "";
    cursorPos = 0;
}

function clearOutput() {
    document.getElementById("searchResults").innerHTML = "";
}

function openLink() {
	
}
