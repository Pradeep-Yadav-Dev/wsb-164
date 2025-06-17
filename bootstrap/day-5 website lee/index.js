let headerHeadering=document.querySelector(".headerHeadering")
let spanTag=document.querySelector(".headerHeadering span")

console.log(headerHeadering ,spanTag )

spanTag.addEventListener("click",()=>{
        headerHeadering.classList.add("removeHeaderHeadering")
})