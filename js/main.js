
window.addEventListener("load", () => {
    AOS.init();
})
//  header bg reveal

const headerBg = () => {
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function () {
        if (this.scrollY > 0) {
            header.classList.add("bg-reveal");
        }
        else {
            header.classList.remove("bg-reveal");

        }
    });

}
headerBg();

/* first script has successfully done */

// nav


const navigation = () => {
    
const navToggler = document.querySelector('.js-nav-toggler');
const navItem = document.querySelector('.js-nav');
const navList = document.querySelectorAll('.js-nav li');

    const navToggle = () => {
        navItem.classList.toggle("open");
        navToggler.classList.toggle("active");
    }

    navToggler.addEventListener("click", navToggle);
    



}
navigation();