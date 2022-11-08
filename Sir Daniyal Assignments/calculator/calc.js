let screen = document.getElementById('display')

let num = Array.from(document.getElementsByClassName('button'));
console.log(num)

num.map(i => { i.addEventListener('click',(e) => {
    switch(e.target.innerText)
    {
        case 'C':
            screen.innerText = ""
            break;
        case '=':
        try{    
        screen.innerText = eval(screen.innerText)
        }catch{
            screen.innerText = "Error !!"
            alert('please choose a number and then user operaters.')
            screen.innerText=""
        }
            break;
            default:
            screen.innerText += e.target.innerText
    }

})})
