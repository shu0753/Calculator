var display=document.querySelector("input")
var btn=document.querySelectorAll("button")
// to access nodelist we have to use foreach method-------------
var storage=[]
var result=0
function cal(value){
    if(value=="AC"){
        storage=[]
        result=0
        display.value=result
    }
    else if(value=="="){
        var final=storage.join("")
        result=eval(final)
        display.value=result
        // eval is a inbuilt function for evaluation---------------------------
    }
    else{
        storage.push(value)
        var final=storage.join("")
        display.value=final
    }
    //   storage.push(value)
    //   var final=storage.join("")
    //   to avoid comma in array we use join method--------------------
}


btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        cal(e.innerHTML);
    })
})