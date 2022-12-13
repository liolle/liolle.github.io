const themes = ["indigo-white",
    "green-white",
    "red-white",
    "grey-white",
    "white-indigo",
    "white-grey",
    "white-red",
    "yellow-black"]

let index =0



// SetUp Listener
const head = document.querySelector("head")

const left_bnt = document.querySelector("#left_bnt")
const right_bnt = document.querySelector("#right_btn")

left_bnt.addEventListener('click',()=>{
    if (index == 0){
        index = themes.length-1
    }
    else{
        index--
    }
    setTheme()
})

right_bnt.addEventListener('click',()=>{
    index = (index +1)%themes.length
    setTheme()
})

//set Initial theme

function setTheme(){  
    let current_theme = document.querySelector("link[href^='css/themes/']")
    
    if (current_theme == undefined){
        let ct = document.createElement("link")
        
        ct.type = 'text/css';
        ct.rel = 'stylesheet';
        ct.href = `css/themes/${themes[index]}.css`
        
        head.appendChild(ct)
        
        return
        
    }
    current_theme.href = `css/themes/${themes[index]}.css`
    // current_theme.setAttribute("href",`css/themes/${themes[index]}.css`)
}

setTheme()

/*
All-Star Dev | Code Fanatic | Linux Hacker | Bleh
*/

// Typing 

const title = [ 
    "All-Star Dev", 
    "JVM, GCC, Py, ...",
    "BeCoder", 
    "Manga enjoyer"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector(".typed");

// Cursor element 
var _CURSOR = document.querySelector(".cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	let text =  title[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === title[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  title[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === title[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 5000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  title[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (title.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

/*
    <div class="redirect">
        <p id="btn_er">Error-404</p>
        <p id="btn_nav">NavBar</p>
        <p id="btn_tim">Tim</p>
        <p id="btn_vc">V-Card</p>
    </div>

*/

const btn_er = document.querySelector("#btn_er")
const btn_nav = document.querySelector("#btn_nav")
const btn_tim = document.querySelector("#btn_tim")
const btn_vc = document.querySelector("#btn_vc")

btn_er.addEventListener('click',()=>{
    open("http://liolle.github.io/error404","__self")
})
btn_nav.addEventListener('click',()=>{
    open("http://liolle.github.io/navBar","__self")
})
btn_tim.addEventListener('click',()=>{
    open("http://liolle.github.io/tim","__self")
})
btn_vc.addEventListener('click',()=>{
    open("http://liolle.github.io/vCard","__self")
})


