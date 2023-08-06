const toggleBtn = document.querySelector(".menu-toggle-btn");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("fa-times");
    navMenu.classList.toggle("active");
})