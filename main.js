const moonIcon = document.querySelector('.ri-moon-fill')
const sunIcon = document.querySelector('.ri-sun-fill')

function setThemeToDark() {
    document.body.style.backgroundColor = '#1b1b1b'
    document.body.style.color = '#fff'
    document.querySelectorAll('p').forEach(el => {
        el.style.color = '#fff'
    })
    if (document.getElementsByClassName('line').length > 0) {
        document.querySelector('.line').style.backgroundColor = '#fff'
    }
    document.querySelector('.contact__mail a').style.borderBottom = '2.5px solid #fff'
    sunIcon.style.display = 'block'
    moonIcon.style.display = 'none'
}

function setThemeToLight() {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
    document.querySelectorAll('p').forEach(el => {
        el.style.color = '#000'
    })
    document.querySelectorAll('.description').forEach(el => {
        el.style.color = '#4e4e4e'
    })
    document.querySelectorAll('.description p').forEach(el => {
        el.style.color = '#4e4e4e'
    })
    if (document.getElementsByClassName('line').length > 0) {
        document.querySelector('.line').style.backgroundColor = '#000'
    }
    document.querySelector('.contact__mail a').style.borderBottom = '2.5px solid #000'
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block'
}

moonIcon.addEventListener('click', setThemeToDark)
sunIcon.addEventListener('click', setThemeToLight)
moonIcon.addEventListener('keypress', e => e.key === 'Enter' && setThemeToDark())
sunIcon.addEventListener('keypress', e => e.key === 'Enter' && setThemeToLight())

console.log('Hello there!')