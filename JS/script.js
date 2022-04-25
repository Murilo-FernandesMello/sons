const som1 = document.getElementById('m1')
const som2 = document.getElementById('m2')
const som3 = document.getElementById('m3')
const img1 = document.getElementById('im1')
const img2 = document.getElementById('im2')
const img3 = document.getElementById('im3')

img3.addEventListener('click', ()=>{
    som3.src = "./som/cavalo.mpeg"
    m3.play();
})

img2.addEventListener('click', ()=>{
    som2.src = "./som/ambulancia.mpeg"
    m2.play();
})

img1.addEventListener('click', ()=>{
    som1.src = "./som/errou.mpeg"
    m1.play();
})