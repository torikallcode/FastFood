const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")
const head = document.querySelector("#head")
const navA = document.getElementById("nav-a")
const navCart = document.getElementById("nav-cart")
const cartBtn = document.getElementById("cartBtn")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("-right-[100%]")
    navMenu.classList.toggle("right-0")
})

cartBtn.addEventListener("click" , () => {
    navCart.classList.toggle("-right-[100%]")
    navCart.classList.toggle("right-0")
})

//Navbar fixed
window.onscroll = () => {
    const header = document.querySelector("header")
    const fixNav = header.offsetTop;

    if ( window.pageYOffset > fixNav){
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}



// Kategori
const optionMenu = document.querySelector(".select-menu")
const selectBtn = document.querySelector(".select-btn")
const options = document.querySelectorAll(".option")
const sBtn = document.querySelector(".sBtn-text")
const optionHehe = document.querySelector(".options")
const arrow = document.querySelector("#arrow")

selectBtn.addEventListener("click" , function(){
    optionHehe.classList.toggle("hidden")
    arrow.classList.toggle("rotate-45")
})

options.forEach(pilihan => {
    pilihan.addEventListener("click" , () =>{
        let selectedOption = pilihan.querySelector(".option-text").innerText
        sBtn.innerText = selectedOption
        console.log(selectedOption)
    })
    console.log(Option)
})

// Menu
const burgerMenu = document.getElementById("burgerMenu")
const pizzaMenu = document.getElementById("pizzaMenu")
const pilihBurger = document.querySelector(".pilihBurger")
const pilihPizza = document.querySelector(".pilihPizza")
const drinksMenu = document.getElementById("kebabMenu")
const pilihKebab = document.querySelector(".pilihKebab")


pilihBurger.addEventListener("click" , () =>{
    burgerMenu.classList.remove("hidden")
    pizzaMenu.classList.add("hidden")
    drinksMenu.classList.add("hidden")
    optionHehe.classList.add("hidden")
    arrow.classList.remove("rotate-45")
})

pilihPizza.addEventListener("click" , () => {
    pizzaMenu.classList.remove("hidden")
    burgerMenu.classList.add("hidden")
    drinksMenu.classList.add("hidden")
    optionHehe.classList.add("hidden")
    arrow.classList.remove("rotate-45")
})

pilihKebab.addEventListener("click" , () => {
    drinksMenu.classList.remove("hidden")
    burgerMenu.classList.add("hidden")
    pizzaMenu.classList.add("hidden")
    optionHehe.classList.add("hidden")
    arrow.classList.remove("rotate-45")
})


// dropdown
const navB = document.getElementById("navB")
const cartProducts = document.querySelectorAll("cart-products")


document.addEventListener("click", e =>  {
    if(!selectBtn.contains(e.target) && !optionHehe.contains(e.target)){
        optionHehe.classList.add("hidden")
        arrow.classList.remove("rotate-45")
    }
    if(!navB.contains(e.target) && !navMenu.contains(e.target)){
        navMenu.classList.add("-right-[100%]")
        navMenu.classList.remove("right-0")
        hamburger.classList.remove("hamburger-active")
    } 
    if(!cartBtn.contains(e.target) && !navCart.contains(e.target)){
        navCart.classList.add("-right-[100%]")
        navCart.classList.remove("right-0")
    } 
})





