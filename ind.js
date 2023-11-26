let menu = document.getElementById('menu')
let show = document.getElementsByClassName('show')[0]
let can = document.getElementById('can')

menu.onclick = () => {
    show.classList.add('active')
    menu.style.display = 'none'
    can.style.display = 'block'
    
}
can.onclick = () => {
    show.classList.remove('active')
    menu.style.display = 'block'
    can.style.display = 'none'
}

const lines = [
    'I am a FullStack Web Developer with a passion for Technology and a knack for solving problems I like to think I am a go to fun person always thinking about the postives in life always looking to make a difference unafraid of failure because "Failure is a Pathway To Success" '
]

const line = [ 'CODE', 'EAT', 'SLEEP', 'REPEAT']

document.addEventListener('DOMContentLoaded', ()=>{

const typed = new Typed(".greet", {
    strings: ['Hi,^200', 'My Name is^500'],
    typeSpeed: 100,
    fadeOut: true,
    fadeOutDelay:300,
    loop: false,
    showCursor: true,
    onComplete: (self) => {
    self.cursor.remove();
    startSecondAnimation();
    }
});

function startSecondAnimation() {
    const typed1 = new Typed(".name", {
    strings: ['Mohammed Rufai'],
    startDelay: 1000,
    typeSpeed: 100,
    showCursor: true,
    onComplete: (self) => {
        self.cursor.remove();
        startThirdAnimation();
    }
    });
}

function startThirdAnimation() {
    let typed2 = new Typed(".wrk", {
    strings: ['FullStack Web Developer'],
    typeSpeed: 100,
    showCursor: true,
    onComplete: (self) => {
        self.cursor.remove();
        startFourdAnimation()
    }
    });
}
function startFourdAnimation() {
    let typed3 = new Typed(".info", {
    strings: lines,
    typeSpeed: 10,
    showCursor: true,
    loop: false,
    onComplete: (self) => {
        self.cursor.remove();
        startFiveAnimation()
    }
    });
}
function startFiveAnimation() {
    let typed4 = new Typed(".chek", {
    strings: ['CODE^400', 'EAT^400', 'SLEEP^400', 'REPEAT^400'],
    typeSpeed: 10,
    showCursor: true,
    loop: true,
    loopCount: 3,
    fadeOut: true,
    onComplete: (self) => {
        self.cursor.remove();
        bntt()
    }
    });
}

})

const btn = document.getElementById('bt1')
const bt = document.getElementById('bt2')

function bntt(){


const inte =  setTimeout(()=>{
        btn.style.left = '0' 
        bt.style.right= '0' 
        btn.style.transition = 'left 1s ease'   
        bt.style.transition = 'right 1s ease'   
})

}



