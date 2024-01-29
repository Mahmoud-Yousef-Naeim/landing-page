//  first way


let allImages = document.querySelectorAll(".container footer  img");

allImages.forEach(img => {
    img.addEventListener("click" , ()=> {
        let firstImage =  document.querySelector(".container section .image img")
        firstImage.src = img.src
        document.body.style.background = img.alt
    })
})



// second way 

let firstImage = document.querySelector("section .image img");


function updateImage(phone) {
    firstImage.src = phone;
}

function updateColor(color) {
    document.body.style.background = color
}
