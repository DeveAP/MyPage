const active_nav = document.getElementsByClassName('cd-3d-nav-trigger')[0]
const nav_container = document.getElementsByClassName('cd-3d-nav-container')[0]
const lista_nav = document.getElementsByClassName('cd-3d-nav')[0]
let button_header;
const content_body = document.getElementsByTagName('main')[0]
active_nav.addEventListener('click',(e) => {
    
    button_header = document.getElementsByClassName('cd-header')[0] 
    toogle3dBlock(exist_class(button_header,'nav-is-visible'))
    updateSelectedNav()
})
lista_nav.addEventListener('click',() => {

})
// window.addEventListener('resize', () => {
//     window.requestAnimationFrame()
// })

function exist_class(elements,search){
    for (let i = 0;i < elements.classList.length;i++){
        if (elements.classList[i] == search) {
            console.log(elements.classList[i])
            return false
        }
    }
    return undefined
}
function toogle3dBlock(addOrRemove){
    if(typeof(addOrRemove) === 'undefined') addOrRemove = true;
    button_header.classList.toggle('nav-is-visible', addOrRemove)
    nav_container.classList.toggle('nav-is-visible', addOrRemove)
    content_body.classList.toggle('nav-is-visible', addOrRemove)
    content_body.addEventListener('click',() => {
        updateSelectedNav()
    })
}
function updateSelectedNav(exece){
    let selectedItem = lista_nav.children
    for(let i =0;i<selectedItem.length;i++){
        if(exece != i){
            selectedItem[i].classList.value = ''
        }
        else{
            selectedItem[i].classList.value = 'cd-selected'
        }
    }    
}
function eventLi(){
    let selectedItem = lista_nav.children
    for(let i=0;i<selectedItem.length;i++){
        selectedItem[i].addEventListener('click', (e) => {
            updateSelectedNav(i)
        })
    }
}
eventLi();