const burger = document.querySelector(".material-symbols-outlined")
const menu = document.querySelector(".menu")

function showMenu(){
    
    
    if (menu.classList.contains("hide")){   
        menu.classList.remove("hide")
    }
    else{
        menu.classList.add("hide")
    }
}

// burger.addEventListener('click',()=>{
    

//     //Open buger
    

// })

window.addEventListener('click',(e)=>{

    if (e.target == burger){
        showMenu()
    }
    else{
        menu.classList.add("hide")

    }


})