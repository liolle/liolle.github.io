const coordonate = [51.51905375112025, -0.10040098629230368]

var map = L.map('map').setView(coordonate, 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker(coordonate).addTo(map);

const copy = document.querySelector("#map_loc:hover .hidden")

function copyLocation(){
    cp('loc')     
      
}

function cp(type){
  let copy_text = ""
  let clipboard ;

  switch(type){
    case "tel":
      clipboard = document.querySelector("#map_tel .hidden")
      copy_text = "2079460626"
      break
    case "loc":
      clipboard = document.querySelector("#map_loc .hidden")
      copy_text = "50-52 Long Ln, London EC1A 9EJ, Royaume-Uni"
      break
    default:
      throw new Error("not supposed to be here")
  }

  navigator.clipboard.writeText(copy_text).then(() => {
    clipboard.style.color = "green"
    clipboard.style.visibility = "visible"

    setTimeout(()=>{
        clipboard.style.visibility = "hidden"
        clipboard.style.color = "black"
    },500)
  },
  () => {
    navigator.permissions.query({name:'clipboard-write'})

  })
}