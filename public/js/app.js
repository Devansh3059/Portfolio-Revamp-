window.onload = function(){
    const navSlide = function(){
        var burgerr = document.querySelector(".burger");
        const nav = document.querySelector(".nav-menu");
        const navMenu = document.querySelectorAll(".nav-menu li");

        burgerr.addEventListener("click",function(){
            nav.classList.toggle("nav-active");
            // console.log("clicked")
            //link animation
        navMenu.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }
            else
            link.style.animation = `navLinkFade 0.5s ease forwards ${(index/7) + 0.65}s`        //inndex/5 s for delay
        });
        burgerr.classList.toggle("toggle");
        });
        
    };
    navSlide();
    //classList error
};