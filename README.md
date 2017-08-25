# -- WARNING --
This is a project I have put together quickly to see how this concept
worked and the code is **not finished**. It is very inefficeint!


Also, I am not that femiliar with JavaScript so I may have used slightly innefficient
methods of doing things. :tired_face:

Want to try it out? Its here: [homepage.](http://szymonjackiewi.cz/homepage./)

## TODO list
* Optimise search algorithm
* Redirect to error page when error occurs allowing for use as a search engine
* Re-write how keyboard input is handled making it more modular to support more 
keyboard layouts.
* Add middle-click functionalty to open in a new tab. (maybe [SHFT]+[ENTR])

# -- What Is it? --
I hate the look of the chrome browser bookmark bar,
so i decided to create a web-page to allow me to search
for my bookmarks easily.
		
# -- Usage --
The page was designed to launch common websites as
efficiently as possible. I set it as my 'New-Tab'
and 'Home' page. This allows me to press 
[CTRL+T] followed by the start of the name.

The configuration file can be found under JavaScript/**Config.js**.


This is the only file you should edit before you use.
If you have any ideas or reskins you wish to do elsewhere however,
go for it!
		
# -- How it works? --
Every key pressed, contributes to a score given to 
each word depending on the distance away from the 
expected key. This means that the word can be
missoelled and still be at the top of the list!
		
# -- Navigation --
[Left-Arrow]/[Right-Arrow] move cursor by 1 character
in the input field
		
[CTRL]+([Left-Arrow]/[Right-Arrow]) move to the start
or end of the input.
		
[Up-Arrow]/[Down-Arrow] move the Bookmark selection
up and down. (reset to the top on input)
		
[ENTR] replace the tab with the currently selected
bookmark
		
[CTRL]+[ENTR] search the internet for the input.

[SHFT]+[Letter-Key] append input with shortcut
