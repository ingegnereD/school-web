const header = document.querySelector('header')
const team = document.querySelectorAll('.team-profile')
const teamImg = document.querySelectorAll('.team-img')
const teamIcon = document.querySelectorAll('.team-social')
const courseBox = document.querySelectorAll('.course-box')
const courseImg = document.querySelectorAll('.course-img')

let courseImgCont = [...courseImg]
let courseBoxCont = [...courseBox]
let teamIconCont = [...teamIcon]
let teamImgCont = [...teamImg]
let teamCont = [...team]
team.forEach((a, i) => {
    a.addEventListener('mouseover', (e) => {
        teamImgCont[i].style = 'filter: grayscale(0%)';
        teamIconCont[i].style = 'display:block'
        a.addEventListener('mouseout', () => {
            teamImgCont[i].style = 'filter: grayscale(100%)';
            teamIconCont[i].style = 'display:none'

        })
    })
})

courseBox.forEach((a, i) => {
    a.addEventListener('mouseover', (e) => {
        courseImgCont[i].style = 'filter: grayscale(0%)'
        a.addEventListener('mouseout', () => {
            courseImgCont[i].style = 'filter: grayscale(100%)'
        })
    })
})