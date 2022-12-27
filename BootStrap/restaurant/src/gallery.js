const page_elem = document.querySelectorAll(".pagination .page-item")
const picture_container = document.querySelector("#box_gall")
//TODO  Add picture system 
const picture_type = ["dishe","kitchen","place","dessert"]

function removeChilds(parentElem){
    while (parentElem.firstChild) {
        parentElem.removeChild(parentElem.firstChild);
    }
}

function setUpImgs(page){
    // removeChilds(picture_container)
    let cards = document.querySelectorAll("#box_gall img")
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src",`../img/${picture_type[page]}_${i+1}.jpg`)

        
    }

}


page_elem.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        let active_page =  document.querySelector(".active")
        active_page.classList.remove("active")
        elem.classList.add("active")



        //TODO change pictures
        /*
            Add picture system 
        */
        setUpImgs(elem.querySelector("a").textContent -1)
        
        
    })
})