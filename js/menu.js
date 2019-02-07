document.addEventListener("DOMContentLoaded", function(event) { // Comprueba si la pagina ya se completo 
    // Declaraciones de variables para la utilizacion de atributos
    const active_nav = document.getElementsByClassName('cd-3d-nav-trigger')[0]
    const nav_container = document.getElementsByClassName('cd-3d-nav-container')[0]
    const lista_nav = document.getElementsByClassName('cd-3d-nav')[0]
    let button_header =document.getElementsByClassName('cd-header')[0];
    const content_body = document.getElementsByClassName('body-style')[0]
    const marker = document.getElementsByClassName('cd-marker')[0]

    // Declaracion de hijos del menu o los li y agregandoles eventos clicks
    let selectedItem = lista_nav.children
    for(let i=0;i<selectedItem.length;i++){
        selectedItem[i].addEventListener('click', (e) => {
            selectedNav(i)
        })
    }

    active_nav.addEventListener('click',(e) => { // click al boton del menu
        toogle3dBlock(exist_class(button_header,'nav-is-visible'))
    })
    window.addEventListener('resize', () => { // adaptacion del menu segun el tamano de la pantalla
        window.requestAnimationFrame(updateSelectNav)
    })

    function exist_class(elements,search){ // funcion para comprobar si existe un tipo de clase en una etiqueta o clase en general
        for (let i = 0;i < elements.classList.length;i++){
            if (elements.classList[i] == search) {
                return false
            }
        }
        return undefined
    } 
    function toogle3dBlock(addOrRemove){ // activa las animaciones en los multiples elementos
        if(typeof(addOrRemove) === 'undefined') addOrRemove = true;
        button_header.classList.toggle('nav-is-visible', addOrRemove)
        button_header.classList.toggle('header-black',addOrRemove)
        nav_container.classList.toggle('nav-is-visible', addOrRemove)
        content_body.classList.toggle('nav-is-visible', addOrRemove)
        content_body.addEventListener('transitionend',() => {
            updateSelectNav()
        })
    }
    let itemSelect = 0; // valor definido del marcador
    function selectedNav(exece){ // seleciona el atributo li clickeado y le coloca las animaciones y colores
        let selectedItem = lista_nav.children
        itemSelect = exece
        for (let i = 0; i < selectedItem.length; i++) {
            if(i == exece){
                selectedItem[i].classList.value='cd-selected'
                marker.classList.value = `cd-marker color-${i+1}`
                marker.style.left = `${lista_nav.children[i].offsetLeft}px`
            }
            else{
                selectedItem[i].classList.value=''
            }
        }    
    }
    function updateSelectNav(){ // adapta el marcador a la pantalla
        let itemMarket = lista_nav.children[itemSelect]
        marker.style.left = `${itemMarket.offsetLeft}px` 
    }
})



