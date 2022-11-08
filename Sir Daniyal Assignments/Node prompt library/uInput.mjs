import PromptSync from "prompt-sync";
const prompt = PromptSync();

var name = prompt('what is your name : ');
console.log(`hello ${name} welcome !! `)


const num1 = parseInt(prompt("enter 1st number : "))
const num2 = parseInt(prompt("Enter the second number : "))

console.log(`hello ${name} what you want to do ? `)

console.log('1 - Add two numbers ')
console.log('2 - Delete two numbers')

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
