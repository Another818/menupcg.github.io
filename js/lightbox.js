const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.visibility = "visible";
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.visibility = "hidden";
}