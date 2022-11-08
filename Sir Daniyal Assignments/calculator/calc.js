// Assigning Variable to Display Area
let screen = document.getElementById('display')

// Loading all the buttons and converting it to array using Array constructor
let num = Array.from(document.getElementsByClassName('button'));
console.log(num)

// Loopting through the button array using map and identifying clicked button using add event listener. 
num.map(i => { i.addEventListener('click',(e) => {
    
    // applying switch case and modifying text as per clicked button.
    switch(e.target.innerText)
    {
        // changes the text to empty string ==> clears the text
        case 'C':
            screen.innerText = ""
            break;
        
        // Equal button evalutates the expression using eval() function.    
        case '=':
            try{    
                screen.innerText = eval(screen.innerText)
            }catch{
                screen.innerText = "Error !!" // if evaluation fails throw the error, incase wrong syntax for arthmetic operations is used
                alert('please choose a number and then user operaters.')
                screen.innerText=""
        }
        break;
        
        // appending the typed text to the display area.
        default:
            screen.innerText += e.target.innerText
    }

})})
