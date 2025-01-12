const btnel=document.querySelector(".btn")
const imgele=document.getElementById("qrimg")
const boxele=document.getElementById("imgbox")
const inputele=document.getElementById("qrtext")


btnel.addEventListener("click",()=>{
if(inputele.value.length > 0){
        imgele.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputele.value}`
        boxele.classList.add("showimg")
}
})