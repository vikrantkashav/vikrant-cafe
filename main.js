function myNav(){
    let bar = document.querySelector(".Bar-section");
    let nav = document.querySelector(".Navigation-bar");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "Images/Menu-Bar.png"
        }else{
            nav.style.left = "0%";
            bar.src = "Images/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}










