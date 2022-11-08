// задание1
const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('.innCheck')
const innResult = document.querySelector('.innResult')

const innRegExp = /^\ 1-2 \d{13}$/

innCheck.addEventListener('click', () => {
    if (innRegExp.test(innInput.value)){
        innResult.innerText = 'Ok'
        innResult.style.color = 'green'
    }else{
        innResult.innerText = 'Not ok'
        innResult.style.color = 'red'
    }
})
// задание2
const smallBox=document.querySelector('.smallBox')
const BigBox=document.querySelector('.bigBox')


function VerstaBig(){
    BigBox.style.position = 'relative'
    BigBox.style.background = 'yellow'
    BigBox.style.height = '100px'
}
VerstaBig()

function Verstasmall(){
    smallBox.style.position = 'Absolute'
    smallBox.style.background = 'green'
    smallBox.style.height = '50px'
    smallBox.style.width = '50px'
    smallBox.style.transition = ' 1s'
    smallBox.style.left = '0'
    smallBox.style.top = '0'
}
Verstasmall()


let Postop = 0
let Posleft = 0

function MoveSmall(){
    if(Posleft<=1000 && Postop===0){
        Posleft+=100
        smallBox.style.left =`${Posleft}px`
        setTimeout(MoveSmall,100)
    }
}
MoveSmall()
















