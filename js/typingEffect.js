const subTitle = document.getElementsByName('subTitle')[0]
const list_words = ['programador','innovador','creativo']

const speed = 50
let count_word = 0
let select_words = 0 
let finish = false
setInterval(()=>{
    count_word = 0
    select_words++
    if(select_words == list_words.length){
        select_words = 0
    }   
    writing()
},4000)
function writing(){
    if(count_word < list_words[select_words].length){
        subTitle.innerHTML += list_words[select_words].charAt(count_word)
        // console.log(`${count_word} == ${list_words[select_words].length}`)
        count_word++
        setTimeout(writing,speed)
    }
    if(count_word == list_words[select_words].length){
        setTimeout(deWriting,2000)

    }

}

let gg = 4 
function deWriting(){
    if(gg < subTitle.textContent.length){
        let cadena = subTitle.textContent.split('')
        cadena.pop()
        cadena = reArmar(cadena)
        subTitle.innerHTML = cadena
        setTimeout(deWriting,speed)
    }

}
function reArmar(array){
    let result = ''
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result
}