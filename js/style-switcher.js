// style switcher
const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog ");
    });

}
styleSwitcherToggle()
// theme color


const themeColor = () => {
const husSlider = document.querySelector(".js-hue-slider");
const html = document.querySelector("html");

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML = value;
    }

    husSlider.addEventListener("input", function() {
    setHue(this.value);
    //    set the user preferance in local storage

        localStorage.setItem("--hue", this.value)
    });
    const slider = (value) => {
        husSlider.value = value;
    }

// check for saved user preferance , if any , on load of website
    if (localStorage.getItem("--hue") !== null) {
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    }
else{
 const hue = getComputedStyle(html).getPropertyValue("--hue");
 setHue(hue);
 slider(hue.split(" ") .join(""));
    }
}

themeColor();


// theme light & dark mode


const themeLightDark = () => {

const darkModeTrigger = document.querySelector(".js-dark-mode");

//  create theme mode to make it darkmode
const themeMode  = () => {
    if(localStorage.getItem("theme-dark") === "false")
        {   
            document.body.classList.remove("t-dark");
        }
    else
        {
            document.body.classList.add("t-dark");
        }

}
darkModeTrigger.addEventListener("click", function(){

// set the user`s preference in local storage
    
    localStorage.setItem("theme-dark", this.checked)
    themeMode();


})

// check for saved user preference,  of any, on oad the website

    if(localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }

    if(document.body.classList.contains("t-dark")) {
        darkModeTrigger.checked = true;
    }
  
}
    
themeLightDark();
       


    

       

        
