let shannon1 = document.getElementsByClassName("prado-img");

for(i=0;i<shannon1.length; i++){
    shannon1[i].addEventListener("click", function(){
        location.pathname = "pages\\Del Prado\\prado.htm";
    });
}

let hoch1 = document.getElementsByClassName("hoch");

for(i=0;i<hoch1.length; i++){
    hoch1[i].addEventListener("click", function(){
        location.pathname = "pages\\Hochkammer\\hoch.htm";
    });
}

let corr1 = document.getElementsByClassName("corr");

for(i=0;i<corr1.length; i++){
    corr1[i].addEventListener("click", function(){
        location.pathname = "pages\\Corradino\\corr.htm";
    });
}

let logo = document.querySelector("#small-logo");
logo.addEventListener("click", function(){
    location.pathname = "pages\\homepage\\homepage.htm";
});

let imgs =  document.querySelectorAll("img");

// for(i=0;i<imgs.length; i++){
//     imgs[i].addEventListener("mouseover", function(){
//         imgs[i].classList.add("loading");
//     });
// }

let toggleNavStatus = false;
let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus == false){
        getSidebar.style.visibility = "visible";
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        
        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i<arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }
    else if (toggleNavStatus == true){
        getSidebar.style.width = "0px";
        
        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i<arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }

        
        getSidebar.style.visibility = "hidden";
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

let home = document.querySelector("#home");

home.addEventListener("click", function(){
    location.pathname = "pages\\homepage\\homepage.htm";
});

let btns = document.querySelectorAll(".btn");

for(i = 0; i < btns.length; i++){
    btns[i].style.color = "white"
    btns[i].addEventListener("mouseover", function(){
        btns[i].style.backgroundcolor = "#cc0027"
    });
}

let gear = document.querySelector("#gear");

gear.addEventListener("mouseover", function(){ 
    gear.style.transform = "rotate(-180deg)";
    gear.style.transition = "all 0.5s ease-in-out";
        
})

gear.addEventListener("mouseleave", function(){ 
    gear.style.transform = "";
    gear.style.transition = "";
})

