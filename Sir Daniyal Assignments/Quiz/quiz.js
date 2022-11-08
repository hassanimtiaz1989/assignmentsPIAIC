
let arr = [] // empty array to store answers
let rightarr = ['2','1','1','2','4','3','1','2','2','2'] 
let score=0;
function result(){
    for(i in rightarr)
    {
    arr.push(document.mcqtest.ans1.value);
    arr.push(document.mcqtest.ans2.value);
    arr.push(document.mcqtest.ans3.value);
    arr.push(document.mcqtest.ans4.value);
    arr.push(document.mcqtest.ans5.value);
    arr.push(document.mcqtest.ans6.value);
    arr.push(document.mcqtest.ans7.value);
    arr.push(document.mcqtest.ans8.value);
    arr.push(document.mcqtest.ans9.value);
    arr.push(document.mcqtest.ans10.value);

}
    for(i in rightarr)
    {
        if(arr[i]==rightarr[i])
        score = ++score;
    }

 alert(`Your total Score is  ${score} out of 10`)
}


