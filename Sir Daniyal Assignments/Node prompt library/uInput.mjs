// Importing prompt Sync
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Asking for user name
var name = prompt('what is your name : ');
console.log(`hello ${name} welcome !! `)

// Getting input from the user
const num1 = parseInt(prompt("enter 1st number : "))
const num2 = parseInt(prompt("Enter the second number : "))

console.log(`hello ${name} what you want to do ? `)

// Giving option to evalutate
console.log('1 - Add two numbers ')
console.log('2 - Delete two numbers')


// based on choice doing appropriate operation.

var choice = prompt( " : ")

if(choice==1)
{
    console.log(`Ans is : ${num1+num2}`)
}
else if(choice==2)
{
    console.log(`Ans is : ${num1-num2}`)
}
else
{
    console.log('wrong choice')
}
