let homeview=document.querySelector(".home");
let aboutView=document.querySelector(".about");
let projectView=document.querySelector(".project");
let contactView=document.querySelector(".contact");

// homeview.addEventListener("click",()=>{
//     document.scrollTop
// })


function about(){
    let aboutobj=document.getElementById("about-us");
    aboutView.scrollIntoView();
}
projectView.addEventListener("click",()=>{
    window.scrollTo(0,200);
})