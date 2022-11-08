//Creating Class and adding methods

// Defining Class person and giving three properties name, age and income.
class person{
    constructor(name,age,income)
    {
        this.name = name;
        this.age = age;
        this.income = income;  
    }
    // defining methods
    // this method converts income of the object person in to us dollars
    toUsd(){
        return(this.income*230)
    }
    // this method covnerts income of the object person into canadian dollars.
    toCnd()
    {
        return(this.income*120)
    }
    // this method converts salary of the individual by a custom rate, it takes input rate as an argument processes and returns converted income.
    toCustom(rate)
    {
        if(rate==undefined)
        return 'pass value plz';

        return this.income*230;
    }
    
}

// Creating new object of the class
let ali = new person('ali','32','80000')

// Using the methods to convert income of the person into US Dollars,Canadian dollars and custom exchange rate
console.log(`Salary in custom ${ali.toCustom(140)}`)
console.log(`Salary in Canadian Dollars ${ali.toCnd()}`)
console.log(`Salary in USD ${ali.toUsd()}`)



