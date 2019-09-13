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
		Allow user to easily configure variables used by the web-page.
*/

/*
 Currently supported:
	qwerty_ansi

 Coming soon:
	qwerty_iso
	qwertz
	azerty
	dvorak
	colemak
*/
var KEYBOARD = "qwerty_ansi";

/*
 Search engine to be used when a serach is made.
 
 Search can be made by pressing [CTRL+ENTR] after an input is made

 currently supported:
	google
	duckduckgo
	bing
	reddit
	youtube
*/
var SEARCH_ENGINE = "google";

/*
 Add your bookmarks here!
 the format:
	new Bookmark("<name>", "<url>")
 
 things to look out for:
	- make sure each bookmark entry ends with a ',' EXCEPT the last one.
	- the order that Bookmarks are entered is the order that they will
	  be displayed in. Put your most common bookmark at the top!
	- after an input is made, bookmarks will be sorted based on their
	  length
*/
var BOOKMARKS = [
		// Random Bookmarks
		new Bookmark("youtube", "https://www.youtube.com/feed/subscriptions"),
		new Bookmark("twitch", "https://www.twitch.tv/directory/following"),
		new Bookmark("facebook", "https://www.facebook.com"),
		new Bookmark("bank", "https://retail.santander.co.uk/"),
		new Bookmark("reddit", "https://www.reddit.com"),
		new Bookmark("github", "https://github.com/SzyJ"),
		new Bookmark("cmd", "http://szy.wtf"),
	
		//Google Services
		new Bookmark("google", "https://www.google.co.uk/?gws_rd=ssl"),
		new Bookmark("google music", "https://play.google.com/music/listen?hl=en#/home"),
		new Bookmark("google inbox", "https://inbox.google.com/"),
		new Bookmark("google calendar", "https://calendar.google.com/calendar/render#main_7"),
		new Bookmark("google drive", "https://drive.google.com/drive/my-drive"),
		new Bookmark("google keep", "https://keep.google.com/u/0/"),
		
		//Uni Stuff
		new Bookmark("uni mail", "https://outlook.office365.com/owa/?realm=newcastle.ac.uk#path=/mail"),
		new Bookmark("uni bb", "https://blackboard.ncl.ac.uk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1"),
		new Bookmark("uni nes", "https://ness.ncl.ac.uk"),
		new Bookmark("uni s3p", "https://s3p.ncl.ac.uk/status/index.aspx")
		
		//Work Stuff
		// ...
	];

/*
 Add your shortcuts here!
 These can be used to auto-input common phrases with one button.
 Can be used as 'folders' if you give some bookmarks the same start phrase
 and add it here!
 
 these are accessed by pressing [SHIFT+Letter]
 
 the format:
	"<key>":"<phrase>"
 
 things to look out for:
	- make sure each bookmark entry ends with a ',' EXCEPT the last one.
	- the key can currently ONLY be a capital letter
	- the phrase will always be added to the end of the input and move
	  the cursor to the end of it.
*/
var SHORTCUTS = {
		"G":"google ",
		"U":"uni ",
		"W":"work "
	};