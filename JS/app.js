const collapseBtn = document.querySelectorAll('.question-box')
const collapsible = document.querySelectorAll('.collapsible')
const collap = document.querySelectorAll('.collap')
const add = document.querySelectorAll('.plus-icon')
const minus = document.querySelectorAll('.minus-icon')
const unDropItem = document.querySelectorAll('.undrop-item')

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
    // collapseBtn.forEach(a => {
    //     a.addEventListener('click', (e) => {
    //         console.log('list index is ', listIndex)
    //         console.log(e.target.innerText);
    //         // collapsible.style = 'display:block';

//     });
// })