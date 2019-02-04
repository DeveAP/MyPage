
//menu
const menu = document.getElementsByClassName('header-style');
window.onscroll = () => {
    if (window.scrollY > 0) {
        menu[0].classList = "header-style active-menu";
    }
    else{
        menu[0].classList = "header-style";
    }
};

// Filtros
const filtros = document.getElementsByClassName('fil-etiqueta');
const content_proyects = document.getElementsByClassName('image-project');
console.log(filtros,content_proyects);

for(let i = 0; i < filtros.length; i++){
    filtros[i].addEventListener('click', (ev) => {
        ev.preventDefault();
        let filtrar;
        switch (i) {
            case 0:
                filtrar = 'image-project javascript';
                break;
            case 1: 
                filtrar = 'image-project python';
                break;
            case 2:
                filtrar = 'image-project photoshop'
                break;
            default:
                filtrar = '';
                break;
        }
        if (i == 3) {
            all_fill(content_proyects);
        }
        else{
            content_fill(content_proyects,filtrar);
        }
        
    });
}
    
function content_fill(contents,filtrar){
    for(let i = 0; i < contents.length; i++){
        if(contents[i].classList.value != filtrar){
            contents[i].style.display ='none';
        }
        else{
            contents[i].style.display = 'inherit';
        }
    }    
}
function all_fill(contents){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'inherit';
    }
}
// skills
const slide =document.getElementsByClassName('skills-content');
let move = 0; // valor determinante de la pantalla 
let num = 0; // valor de ubicacion del movimiento
const acelerador = 8; // acelera
let max = 0;
let min = 0;
// slide[0].addEventListener('touchstart',(e)=>{ // Evento que ubica la pantalla 
//     move = e.changedTouches[0].clientX
//     console.log(move)
// }) 
slide[0].addEventListener('touchmove',(e) => { // Evento que mueve los elementos
    let moving = e.changedTouches[0].clientX
    max = slide[0].children[0].scrollWidth * 3.3
    if(move > moving){
        console.log('izquierda')
        if(num >= -max){
            num -= acelerador;
            slide[0].style.left = `${num}px`
        }
        else{
            console.log('block')
        }
    }
    else{
        console.log('Derecha')
        if (num <= min) {
            num += acelerador;
            slide[0].style.left = `${num}px`        
        }
        else{
            console.log('block')
        }
    }
    move = moving // declaracion del punto final del movimiento 
    
})

 

