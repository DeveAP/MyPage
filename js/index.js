
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

 

