
// navbar link management 

let cur_link = document.querySelector(".active_link")

const links = document.querySelectorAll("#links .col")

function pathResolve(currentPage, nextPage){
    if (currentPage.includes("/restaurant/gallery/index.html")   ||
    currentPage.includes("/restaurant/menu/index.html") ||
    currentPage.includes("/restaurant/about/index.html")){

        if (nextPage == "home"){
            window.open(`../index.html`, '_self');
            return;
        }

        window.open(`../${nextPage}/index.html`, '_self');
    }else{
        window.open(`./${nextPage}/index.html`, '_self');
    }
}

function changePage(input){

    if (cur_link.textContent == input) return

    switch (input) {
        case "Home":
            pathResolve(document.location.pathname, "home")

            break;
        case "Menu":
            pathResolve(document.location.pathname, "menu")
            
            break;
        case "Gallery":
            pathResolve(document.location.pathname, "gallery")
            break;
        
        case "About":
            pathResolve(document.location.pathname, "about")
            break;
    
        default:
            throw new Error("Navbar links error")
            
    }
}

links.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        
        if (cur_link != elem && elem.getAttribute("id") != "burger"){
            

            changePage(elem.textContent)
            
            
        }

        if (elem.getAttribute("id") == "burger"){
            //TODO open drop-down menu
        }
    })
})

drop_down_items = document.querySelectorAll(".dropdown-item")

drop_down_items.forEach((elem)=>{

    elem.addEventListener('click',()=>{
        changePage(elem.textContent)
    })

})
