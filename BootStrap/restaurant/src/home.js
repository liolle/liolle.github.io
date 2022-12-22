
// navbar link management 

let cur_link = document.querySelector(".active_link")

const links = document.querySelectorAll("#links .col")

links.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if (cur_link != elem && elem.getAttribute("id") != "burger"){
            cur_link.classList.remove("active_link")  
            elem.classList.add("active_link")
            cur_link = elem
            
            //TODO swith page 
            
            switch (elem.textContent) {
                case "Home":
                    window.open("/restaurant/index.html", '_self');
                    
                    break;
                case "Menu":
                    window.open("/restaurant/menu/index.html", '_self');
                    break;
                case "Gallery":
                    window.open("/restaurant/gallery/index.html", '_self');
                    break;
                
                case "About":
                    window.open("/restaurant/about/index.html", '_self');
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
