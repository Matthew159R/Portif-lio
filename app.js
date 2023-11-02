//----------Java script da barra de navegação----------

// Aplicando uma animação suave nos links da barra de navegação

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(navLink => navLink.addEventListener('mouseover', () => {
    navLink.classList.remove('nav-link-LEFT-animation-reverse')
    navLink.classList.remove('nav-link-RIGHT-animation-reverse')
    navLink.classList.add('nav-link-RIGHT-animation')
    navLink.classList.add('nav-link-LEFT-animation')
}))
navLinks.forEach(navLink => navLink.addEventListener('mouseleave', () => {
    navLink.classList.remove('nav-link-LEFT-animation')
    navLink.classList.remove('nav-link-RIGHT-animation')
    navLink.classList.add('nav-link-LEFT-animation-reverse')
    navLink.classList.add('nav-link-RIGHT-animation-reverse')
}))

// Criando uma função para aplicar animações suaves aos botões da página

const divContactButton = document.querySelector('.contact-button')
const contactButton = divContactButton.querySelector('button')

const hoverAnimationButton = (button, classAnimation, classAnimationReverse) => {

    button.addEventListener('mouseover', () => {
        button.classList.remove(classAnimationReverse)
        button.classList.add(classAnimation)
    }) 

    button.addEventListener('mouseleave', () => {
        button.classList.remove(classAnimation)
        button.classList.add(classAnimationReverse)
    })
}

// Aplicando uma animação suave ao botão de contato da barra de navegação
hoverAnimationButton(contactButton, 'contact-button-hover-animation', 'contact-button-hover-animation-reverse')

//---------Java script da primeira sessão--------

const buttonDownloadCurriculum = document.querySelector('[data-js="button-download-curriculum"]')

hoverAnimationButton(buttonDownloadCurriculum, 'button-content-animation-hover', 'button-content-animation-hover-reverse')

buttonDownloadCurriculum.addEventListener('click', () => {
    const download = document.querySelector('.download');
    download.click();
});

//--------Java script da sessão de skills---------

const hardSkills = document.querySelectorAll('.hard-skill')

hardSkills.forEach(hardSkill => {
    let CheckingMouseOver;

    hardSkill.addEventListener('mouseenter', () => {
        const boxMoreInfo = Array.from(hardSkill.children)[1]
        const boxMainInfo = Array.from(hardSkill.children)[0]

        boxMainInfo.classList.add('boxMainInfo-hover-animation')
        boxMoreInfo.classList.add('box-more-info-hover-animation')

        CheckingMouseOver = setTimeout(() => {
            boxMoreInfo.style.display = 'flex'
            boxMoreInfo.classList.remove('box-more-info-hover-animation-reverse')
            boxMainInfo.classList.remove('boxMainInfo-hover-animation-reverse')
        }, 300)
    })

    hardSkill.addEventListener('mouseleave', () => {
        clearTimeout(CheckingMouseOver)
        const boxMoreInfo = Array.from(hardSkill.children)[1]
        const boxMainInfo = Array.from(hardSkill.children)[0]

        setTimeout(() => {
            boxMainInfo.classList.remove('boxMainInfo-hover-animation-reverse')
            boxMoreInfo.classList.remove('box-more-info-hover-animation-reverse')
        }, 200)
            boxMainInfo.classList.add('boxMainInfo-hover-animation-reverse')
            boxMoreInfo.classList.add('box-more-info-hover-animation-reverse')
        
        boxMainInfo.classList.remove('boxMainInfo-hover-animation')
        boxMoreInfo.classList.remove('box-more-info-hover-animation')

        setTimeout(() => {
            boxMoreInfo.style.display = 'none'
        }, 200)
    })
})

//----------Java script da sessão de projetos----------


// Aplicando animação suave nos botões
const projects = document.querySelector('.projects')

projects.addEventListener('mouseover', event => {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.remove('button-project-hover-animation-reverse')
        event.target.classList.add('button-project-hover-animation')    
    }
})
projects.addEventListener('mouseout', event => {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.remove('button-project-hover-animation')
        event.target.classList.add('button-project-hover-animation-reverse')    
    }
})

