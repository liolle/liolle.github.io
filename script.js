
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
