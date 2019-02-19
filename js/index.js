
//menu
const menu = document.getElementsByClassName('header-style');
const about = document.getElementsByClassName('about-me')[0];
const skill = document.getElementsByClassName('content-skills')[0];
const project = document.getElementsByClassName('content-adjust')[0];
const portal = document.getElementsByClassName('portal-text')[0];
let count = [0,0,0,0]
document.addEventListener('scroll',animate_other,false);
document.addEventListener('touchmove',animate_IOS,false);
// window.onscroll = ScrollStart;
animate_IOS()
function animate_IOS() {
    if(window.scrollY > -1 && window.scrollY < 51 && count[3] == 0){ // Animacion de portal 
        portal.style.animationPlayState = 'running'
        count[3] = 1;
    } 
    if(window.scrollY > 51 && window.scrollY < 1304 && count[0] == 0){ // Animacion de habilidades
        about.style.animationPlayState = 'running'
        count[0] = 1;

    }
    if(window.scrollY > 441 && window.scrollY < 1592 && count[1] == 0){ // Animacion de habilidades
        skill.style.animationPlayState = 'running'
        count[1] = 1;
    }
    if(window.scrollY > 1704 && count[2] == 0){ // Animacion de proyectos
        project.style.animationPlayState = 'running'
        count[2] = 1;
    }
}
function animate_other() {
    // alert(`Esta es la posicion ${window.scrollY}`)
    if(window.scrollY > 51 && window.scrollY < 1304 && count[0] == 0){ // Animacion de la biografia 
        about.animate(animation_left,{
            duration:1000,
            fill:'forwards'
        });
        count[0] = 1;
    }
    if(window.scrollY > 741 && window.scrollY < 2092 && count[1] == 0){ // Animacion de habilidades
        skill.animate(animation_top,{
            duration: 1000,
            fill: 'forwards'
        })
        count[1] = 1;
    }
    if(window.scrollY > 1904 && count[2] == 0){ // Animacion de proyectos
        project.animate(animation_right,{
            duration: 2000,
            fill: 'forwards'
        })
        count[2] = 1;
    } 
    if(window.scrollY > -1 && window.scrollY < 51 && count[3] == 0){ // Animacion de portal 
        portal.animate(animation_left,{
            duration:1000,
            fill:'forwards'
        });
        count[3] = 1;
    }     
    if (window.scrollY > 200) {
        menu[0].classList = "header-style active-menu";
    }
    else{
        menu[0].classList = "header-style";
    }
}

const animation_left = [
    {
        transform: 'translateX(300px)',
        opacity: 0
    },
    {
        transform: 'translateX(0px)',
        opacity: 1
    }
];
const animation_top = [
    {
        transform: 'translateY(300px)',
        opacity: 0,
        
    },
    {
        transform: 'translateY(0px)',
        opacity: 1,
    }
];
const animation_right = [
    {
        transform: 'translateX(-100%)',
        opacity:1
    },
    {
        transform: 'translateX(20px)',
        opacity:1

    },
    {
        transform: 'translateX(-20px)',
        opacity:1

    },
    {
        transform: 'translateX(0px)',
        opacity:1

    }
];
