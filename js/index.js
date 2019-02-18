
//menu
const menu = document.getElementsByClassName('header-style');
const about = document.getElementsByClassName('about-me')[0];
const skill = document.getElementsByClassName('content-skills')[0];
const project = document.getElementsByClassName('content-adjust')[0];
let count = [0,0,0]
window.onscroll = () => {
    console.log(window.scrollY)
    if(window.scrollY > 51 && window.scrollY < 1304 && count[0] == 0){
        about.animate(animation_left,{
            duration:1000,
            fill:'forwards'
        });
        count[0] = 1;
    }
    if(window.scrollY > 741 && window.scrollY < 2092 && count[1] == 0){
        skill.animate(animation_top,{
            duration: 1000,
            fill: 'forwards'
        })
        count[1] = 1;
    }
    if(window.scrollY > 1904 && count[2] == 0){
        project.animate(animation_right,{
            duration: 2000,
            fill: 'forwards'
        })
        count[2] = 1;
    }      
    if (window.scrollY > 200) {
        menu[0].classList = "header-style active-menu";
    }
    else{
        menu[0].classList = "header-style";
    }
};

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
