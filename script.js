// start: Navbar
document.querySelectorAll('[data-toggle~="navbar-submenu-content"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        this.closest('.navbar-submenu-wrapper').querySelectorAll('[data-toggle~="navbar-submenu-content"]').forEach(item=> item.classList.remove('active'))
        this.classList.add('active')

        this.closest('.navbar-submenu-wrapper').querySelectorAll('.navbar-submenu-content-wrapper').forEach(item=> item.classList.remove('active'))
        document.querySelector(this.dataset.target).classList.add('active')
    })
})

document.querySelector('.navbar-toggle').addEventListener('click', function(e) {
    e.preventDefault()

    document.querySelector('.navbar-menu-wrapper').classList.add('navbar-active')
})

document.querySelectorAll('[data-toggle~="navbar-submenu"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        if(window.innerWidth > 767) return

        document.querySelector(this.dataset.target).classList.add('navbar-active')
    })
})

document.querySelectorAll('[data-dismiss="navbar-submenu"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        this.closest('.navbar-active').classList.remove('navbar-active')
    })
})

document.querySelectorAll('[data-dismiss="navbar-menu"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        document.querySelectorAll('.navbar-active').forEach(el=> el.classList.remove('navbar-active'))
    })
})
// end: Navbar



// start: Header
const headerImage = document.querySelector('.header-image')
const headerImageIndicator = document.querySelector('.header-image-indicator')
let activeImage = 0

Array.from(headerImageIndicator.children).forEach((el, idx)=> {
    el.addEventListener('click', function(e) {
        e.preventDefault();

        Array.from(headerImage.children).forEach(item=> item.classList.remove('active'))
        headerImage.children[idx].classList.add('active')

        Array.from(headerImageIndicator.children).forEach(item=> item.classList.remove('active'))
        this.classList.add('active')

        activeImage = idx
    })
})

function carousel() {
    Array.from(headerImage.children).forEach(item=> item.classList.remove('active'))
    headerImage.children[activeImage].classList.add('active')

    Array.from(headerImageIndicator.children).forEach(item=> item.classList.remove('active'))
    headerImageIndicator.children[activeImage].classList.add('active')

    if(activeImage < headerImage.children.length - 1) {
        activeImage++
    } else {
        activeImage = 0
    }

    setTimeout(()=> {
        requestAnimationFrame(carousel)
    }, 5000)
}
carousel()
// end: Header



// start: Destinations
document.querySelectorAll('[data-slider="next"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        document.querySelector(this.dataset.target).scrollLeft += document.querySelector(this.dataset.target).offsetWidth
    })
})

document.querySelectorAll('[data-slider="prev"]').forEach(el=> {
    el.addEventListener('click', function(e) {
        e.preventDefault()

        document.querySelector(this.dataset.target).scrollLeft -= document.querySelector(this.dataset.target).offsetWidth
    })
})
// end: Destinations