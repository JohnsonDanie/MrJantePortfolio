document.addEventListener("DOMContentLoaded",()=>{
    const menuButton = document.getElementById("menu-button");
    const menuContent = document.getElementById("menu-content");

    menuButton.addEventListener("click",()=>{
        if(menuContent.style.display === "none" || menuContent.style.display === ""){
            menuContent.style.display = "block";
        }
        else{
            menuContent.style.display = "none";
        }
    })
})