 const btnsele=document.querySelectorAll("button")
// console.log(btnsele);
const inputel=document.querySelector("#result")

const deletelastdigit=document.querySelector(".deletebtnn")

for(let i=0;i<btnsele.length;i++){
    btnsele[i].addEventListener("click",()=>{
        const btnval=btnsele[i].innerHTML
        
        if(btnval==="C"){
            clearresult()
        }
        else if(btnval==="="){
            calculateresult()
        }
        else if(btnval==="DEL"){
            deletedigit()
        }
    
        else{
            appendvalue(btnval)
        }
    })
}
function clearresult(){
    inputel.value =''
}
function calculateresult(){
    inputel.value=eval(inputel.value)
}
 function appendvalue(btnval) {
   
    inputel.value += btnval
}
let string=0;
function deletedigit(){
string=inputel.substring(0,inputel.length-1);
inputel.value=string;
}