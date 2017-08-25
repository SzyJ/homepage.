/*
	Project: 
		Config.js 
		"homepage." shortcut launcher
	Author:
		Name: Szymon Jackiewicz
		E-Mail: szy.jackiewicz@gmail.com
		Website: http://szymonjackiewi.cz
		GitHub: https://github.com/SzyJ
	Link: 
		https://github.com/SzyJ/homepage.
	Purpose:
		Contains reusable "Objects" used by SearchBar.js
*/

function Bookmark(name, url) {
    this.name = name;
    this.url = url;
    var score = 0;

    this.getName = function() {
	return name;
    }

    this.getUrl = function() {
	return url;
    }

    this.getScore = function() {
	return score;
    }

    this.incrementScore = function(value) {
	score += value;
    }

    this.resetScore = function() {
	score = 0;
    }
}

function getRelativeKeyMap(type) {
    switch(type) {
		case "qwerty_ansi":
			return {
				"a":"qwsz",
				"b":"vghn",
				"c":"xdfv",
				"d":"sxcfre",
				"e":"wsdr43",
				"f":"dcvgtr",
				"g":"fvbhyt",
				"h":"gbnjuy",
				"i":"ujko98",
				"j":"hnmkiu",
				"k":"jm,loi",
				"l":"k,.,po",
				"m":"njk,",
				"n":"bhjm",
				"o":"iklp",
				"p":"ol,[",
				"q":"aw21",
				"r":"edft54",
				"s":"wazxde",
				"t":"rfgy65",
				"u":"yhji87",
				"v":"cfgb",
				"w":"qase32",
				"x":"zsdc",
				"y":"tghu76",
				"z":"asx",
				"1":"qw2",
				"2":"1qwe3",
				"3":"2we4",
				"4":"3er5",
				"5":"4rt6",
				"6":"5ty7",
				"7":"6yu8",
				"8":"7ui9",
				"9":"8io0",
				"0":"9op-",
				" ":" ",
				",":".lkm",
				".":"/;l,",
				"/":".;'",
				"'":"/;[]",
				";":".lp['/",
				"[":"';p-=]",
				"]":"'[=\\",
				"\\":"]",
				"-":"0p[=",
				"=":"-[]"
				}
    }
}

function getSearchPattern(engine) {
    switch(engine) {
		case "google":
			return "http://google.com/search?q=";
		case "duckduckgo":
			return "https://duckduckgo.com/?q=";
		case "bing":
			return "https://www.bing.com/search?q=";
		case "reddit":
			return "https://www.reddit.com/search?q=";
		case "youtube":
			return "https://www.youtube.com/results?search_query=";
	break;
    }
}