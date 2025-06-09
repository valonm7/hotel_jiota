$('.owl-carousel').owlCarousel({
    dots:false,
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3.2
        }
    }
})



const elements = document.querySelectorAll('.fadeinleft');
const elements1 = document.querySelectorAll('.fade-in');
const elements2 = document.querySelectorAll('.fadeinright');
const elements3 = document.querySelectorAll('.fadeindown');



const options = {
    root:null,
    rootMargin: '0px',
    threshold: .4
}

const callbacks = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-left');
        }
    });
}

const callbacks1 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}

const callbacks2 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-right');
        }
    });
}

const callbacks3 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-down');
        }
    });
}

let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);

let observer2 = new IntersectionObserver(callbacks2, options);

let observer3 = new IntersectionObserver(callbacks3, options);


elements.forEach(elements =>{

    observer.observe(elements);
})

elements1.forEach(elements1 =>{

    observer1.observe(elements1);
})

elements2.forEach(elements2 =>{

    observer2.observe(elements2);
})

elements3.forEach(elements3 =>{

    observer3.observe(elements3);
})

