let nav = document.querySelector(".main__nav")
let toggle = document.querySelector(".hamburger")
let list = document.querySelector(".main__nav--list")
let header = document.querySelector(".main__nav--list")



let hamburger = function(){
    nav.classList.add('show')
    list.classList.add('show')
    toggle.classList.add('show')
    nav.style.display = "block"
    let hamburgerClose = document.createElement('img')
    hamburgerClose.setAttribute("src" , "/src/img/Close.png")
    hamburgerClose.classList.add('hamburger-close')
    nav.append(hamburgerClose)
}



toggle.addEventListener('click' , hamburger)