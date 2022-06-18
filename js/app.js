const listItems = document.querySelectorAll('header ul li a');
const btns = document.querySelectorAll('section .btns button');
const bullets = document.querySelectorAll('main .bullets span');
const portfolioItems = document.querySelectorAll('#Portfolio ul li');

$(document).ready(function () {
    var mixer = mixitup('.images')
})

listItems.forEach(li => {
    li.addEventListener('click', e => {
        listItems.forEach(li => li.classList.remove('active'))
        e.currentTarget.classList.add('active')
    });
});

bullets.forEach(bullet => {
    bullet.addEventListener('click', e => {
        bullets.forEach(bullet => bullet.classList.remove('active'))
        e.currentTarget.classList.add('active')
    });
});

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.currentTarget.getAttribute('id') == 'left') {
            if (bullets[0].className == 'active') {
                bullets[2].className = 'active';
                bullets[0].className = ''
            } else if (bullets[1].className == 'active') {
                bullets[0].className = 'active';
                bullets[1].className = ''
            } else {
                bullets[1].className = 'active';
                bullets[2].className = ''
            }
        }
        else {
            if (bullets[0].className == 'active') {
                bullets[1].className = 'active';
                bullets[0].className = ''
            } else if (bullets[1].className == 'active') {
                bullets[2].className = 'active';
                bullets[1].className = ''
            } else {
                bullets[0].className = 'active';
                bullets[2].className = ''
            }
        }
    });
});

portfolioItems.forEach(li => {
    li.addEventListener('click', e => {
        portfolioItems.forEach(li => li.classList.remove('active'))
        e.currentTarget.classList.add('active')
    });
});


const testmBullets = document.querySelectorAll('.skills-section .testimonial .bullets span');
const testmContent = document.querySelectorAll('.skills-section .testimonial .wrap');



testmBullets.forEach(blt => {
    blt.addEventListener('click', e => {

        const lastActive = document.querySelector('.skills-section .testimonial .bullets span.active').attributes['data-order'].value;
        
        testmBullets.forEach(blt => blt.classList.remove('active'))
        testmContent.forEach(cnt => cnt.classList.remove('active','left','right'))
        

        e.currentTarget.classList.add('active');

        const currentActive = e.currentTarget.attributes['data-order'].value;
        
        if (testmBullets[0].classList == 'active') {

            if(currentActive > lastActive) {
                
                testmContent[0].classList.add('right')
            } else {
                testmContent[0].classList.add('left')
                
            }
            testmContent[0].classList.add('active')

        } else if (testmBullets[1].classList == 'active') {

            if(currentActive > lastActive) {
                
                testmContent[1].classList.add('right')
            } else {
                
                testmContent[1].classList.add('left')
            }

            testmContent[1].classList.add('active')

        } else {
            if(currentActive > lastActive) {
                
                testmContent[2].classList.add('right')
            } else {
                
                testmContent[2].classList.add('left')
            }
            testmContent[2].classList.add('active')
        }
    });
});


console.log(document.querySelectorAll('.prog p'))