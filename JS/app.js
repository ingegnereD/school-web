const collapseBtn = document.querySelectorAll('.question-box')
const collapsible = document.querySelectorAll('.collapsible')
const collap = document.querySelectorAll('.collap')
const add = document.querySelectorAll('.plus-icon')
const minus = document.querySelectorAll('.minus-icon')
const unDropItem = document.querySelectorAll('.undrop-item')
const menuBar = document.querySelector('.menu-bar')
const closeBar = document.querySelector('.close-bar')
const middleNav = document.querySelector('.middle-nav')
const navDest = document.querySelectorAll('.nav-dest')

menuBar.addEventListener('click', showMeu)
closeBar.addEventListener('click', hideMenu)

let navDestCont = [...navDest]
let minusArray = [...minus]
let addArray = [...add]
let fat = [...collapsible]
let collapCont = [...collap]
let qstBoxCont = [...collapseBtn]
let unDropCont = [...unDropItem]
let listIndex;

collapCont.forEach((a, i) => {
    a.addEventListener('click', () => {
        listIndex = i;
        addArray[i].classList.toggle('plus-icon-active')
        setTimeout(() => {
            addArray[i].style = 'display:none';
            minusArray[i].style = 'display:inline-block';
            addArray[i].classList.remove('plus-icon-active')
            qstBoxCont[i].style = 'border: 1px solid var(--header-bg-color)'
            fat[i].style = 'display:block'
        }, 250)


    })
})

minus.forEach((a, i) => {
    a.addEventListener('click', (e) => {
        // console.log(addArray[listIndex].classList)
        minusArray[i].classList.toggle('minus-icon-active')
        setTimeout(() => {
            minusArray[i].style = 'display:none';
            addArray[listIndex].style = 'display:block';
            minusArray[i].classList.remove('minus-icon-active')
            fat[i].style = 'display:none';
            qstBoxCont[i].style = 'border:none'
        }, 250)
    })
})

add.forEach((a, i) => {
    a.addEventListener('click', (e) => {
        listIndex = i

        // addArray[i].style.color = 'red';

        addArray[i].classList.toggle('plus-icon-active')
        setTimeout(() => {
            addArray[i].style = 'display:none';
            minusArray[i].style = 'display:inline-block';
            addArray[i].classList.remove('plus-icon-active')
            qstBoxCont[i].style = 'border: 1px solid var(--header-bg-color)'
            fat[i].style = 'display:block'
        }, 250)
    })
})

function showMeu(e) {
    // For the Menu Icons
    middleNav.style = 'display: block'
    middleNav.classList.remove('middle-nav-inactive')
    menuBar.classList.toggle('menu-bar-active')
    setTimeout(() => {
        middleNav.classList.toggle('middle-nav-active')
        menuBar.style = 'display: none';
        middleNav.style = 'display: block'
        closeBar.style = 'display: block'
        menuBar.classList.remove('menu-bar-active')

    }, 201);
    e.preventDefault()
}

function hideMenu(e) {
    // For the Menu Icons
    middleNav.classList.remove('middle-nav-active')
    closeBar.classList.toggle('close-bar-active')
    middleNav.classList.toggle('middle-nav-inactive')
    setTimeout(() => {
        closeBar.style = 'display: none';
        menuBar.style = 'display: block'
        closeBar.classList.remove('close-bar-active')
        middleNav.style = 'display: none';

    }, 201);
    e.preventDefault()
}

// FOR THE NAVIGATION HIGHLIGHT
function firstActiveNav() {
    navDestCont[0].classList.toggle('nav-dest-active')
    let ind = 0;
    let d = [{
        index: ind,
        status: 'active'
    }]
    storeNewData(d)
}

function persistDisplay() {
    let checkIndex = JSON.parse(localStorage.getItem('nav-status'))
    lighNav(checkIndex[0].index)
}

function checkStatus(d, i) {
    let checkIndex = JSON.parse(localStorage.getItem('nav-status'))

    if (checkIndex[0].index == i) {
        console.log('present', i);
        //  Do nothing
    } else {
        console.log('checking i ', checkIndex[0].index);
        removeActive(checkIndex[0].index)
            // create a new data
        storeNewData(d, i)
            // console.log('absent', i);
        lighNav(i)
    }
}
navDestCont.forEach((a, i) => {
    a.addEventListener('click', (e) => {
        let f = [a.classList]
        let ind = Number(i);
        let d = [{
            index: ind,
            status: 'active'
        }]

        checkStatus(d, i)
        console.log('showing d =>', d[0].index);

    })
})

function storeNewData(d, i) {
    localStorage.setItem('nav-status', JSON.stringify(d))
}

function lighNav(i) {
    navDestCont[i].classList.toggle('nav-dest-active')
}

function removeActive(a) {
    navDestCont[a].classList.remove('nav-dest-active')
}

// firstActiveNav()
persistDisplay()
    // END OF SWITHCING NAV BG