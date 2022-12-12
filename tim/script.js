const films = []

fetch("films.json")
.then(response => response.json())
.then((data)=>{
    // data.forEach(element => {
    //     console.log(element)
    // });
    poluate(data)
});

function poluate(data){

    let movies_list = document.querySelector(".movies")

    data.forEach(element => {
        
        movies_list.appendChild(createCard(element))
    });
}

/*
        <div class="m_card">
            
            <div class="img_container">
                <img src="./images/space_odyssey.jpg" alt="">
            
            </div>

            <div class="desciption">
                <p class="title">2001 - Space Odyssey</p>
                <p class="des">Humanity finds a musterious, obviously arificial 
                    object buried beneath the Lunar surface and, with the 
                    intelligent computer H.A.L. 9000, sets off on a quest.
    
                </p>
            </div>
        </div>
*/

/*
{
        "photo":"./images/space_odyssey.jpg",
        "title":"2001 - Space Odyssey",
        "description":"Humanity finds a musterious, obviously arificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest."
    },
*/

function createCard(info){

    let card = document.createElement("div")
    card.classList.add("m_card")
    
    card.innerHTML = `

    <div class="img_container">
        <img class="pic" src="${info.photo}" alt="">
    </div>

    <div class="desciption">
        <p class="title">${info.title}</p>
        <p class="des">
            ${info.description}

        </p>
    </div>
    `

    return card

}

// Socials listener

const socials = document.querySelectorAll(".fa")

socials.forEach(element=>{
    element.addEventListener('click',()=>{
        
        if (element.classList.contains("fa-twitter")){
            window.open("https://twitter.com/timberners_lee","_blank")
        }
        

    })
})