
let arr = [11, 15, 17, 18, 19] // Initial Array

console.log('Array is : ',arr) // Letting users know the iniital array

let ansArray = [] // Creating an array in which complete array will be stored and shown
    
// Looping through th original array to find the missing numbers

for(i in arr)
    {
        ansArray.push(arr[i]) // inserting values to the answer array
        
        //finding difference in consecutive numbers 
        var num1 = arr[i]
        var num2 = arr[parseInt(1)+parseInt(i)]
        var dif= num2-num1
        
        // if the difference exists
        if(dif>1)
        {
            // Showing details of missing numbers in the array

            console.log(`something is missing between index ${arr.indexOf(num1)} and ${arr.indexOf(num2)}`)
            console.log('total missing nubmers are : ',--dif)
            console.log('missing numbers are: ')
            
            // Showing the missing numbers and appending them to the answer array.
            for(var k=++num1; k<num2; k++)
            {
               let temp_num = num1++
                console.log(temp_num)
               ansArray.push(temp_num)
            }

        }
        
        
    }

// Showing the initial array and answer array 

console.log('Input Array is : ',arr)
console.log('Completed Array is: ',ansArray)
