const menus = document.querySelector(".dropdown .btn")

const menu_type_options = document.querySelectorAll(".dropdown-item")

menu_type_options.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        menus.textContent = elem.textContent
    })

})

let db_menu = undefined

fetch("/restaurant/menu.json").then((response)=>{
    if(!response.ok){
        throw new Error(response.status)
    }
    return response.json()
}).then((data)=>{
    db_menu =data
})
 

let cur_menu = document.querySelector(".active_menu")

const m_links = document.querySelectorAll("#menu_tab .col")

function dishMaker(d){

    let recette = document.createElement("div")
    recette.innerHTML = 
    `<div class='row '>
        <div class='col col-sm-10 text-start'>
            <p class='d_name m-0 fs-6'>${d["name"]}</p>
            <p class='d_ingredients'>${d["ingredients"]}</p>
        </div>
        <div class='col col-sm-2 text-end'>
            ${d["price"]} &#8364
        </div>
    </div>
    `
    recette.classList.add("mt-3")
    

    
    return recette
}

function removeChilds(parentElem){
    while (parentElem.firstChild) {
        parentElem.removeChild(parentElem.firstChild);
    }
}

function populateMenu(num){
    let list_menu = document.querySelector("#list_menu")
    removeChilds(list_menu)
    db_menu[num]["dishes"].forEach((elem)=>{
        list_menu.appendChild(dishMaker(elem))
    })

}

m_links.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if (cur_menu != elem && elem.getAttribute("id") != "burger"){
            cur_menu.classList.remove("active_menu")  
            elem.classList.add("active_menu")
            cur_menu = elem
            
            //TODO swith page 
            
            switch (elem.textContent) {
                case "Lunch":
                    populateMenu(0)
                    break;
                case "Dinner":
                    populateMenu(1)
                    break;
                case "Dessert":
                    populateMenu(2)
                    break;
                
                case "About":
                    
                    break;
            
                default:
                    
                    break;
            }
        }

        if (elem.getAttribute("id") == "burger"){
            //TODO open drop-down menu
        }
    })
})

let m_interval = setInterval(()=>{

    if(db_menu !== undefined){
        populateMenu(0)
        clearInterval(m_interval)
    }
},100)
