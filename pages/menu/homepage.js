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