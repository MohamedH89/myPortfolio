let nav = document.querySelector('nav');
let tog = document.querySelector('.tog');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let color = document.querySelectorAll('.color');

// WoW JS
new WOW().init();

// Popover
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Navbar & Colors
tog.addEventListener('click', function (e) {
    // 0
    moon.classList.toggle('trans1')
    sun.classList.toggle('trans2')
    // 1
    nav.classList.toggle('box')
    // 2
    color.forEach((ele) => {
        ele.classList.toggle('bg-main-moon1');
        ele.classList.toggle('text-main-moon1');
    })
    // 3
    document.querySelector('.cv').classList.toggle('bg-main-moon2')
    document.querySelector('.cv a').classList.toggle('text-main-moon2')
    // 4
    document.querySelectorAll('.background').forEach((sec) => {
        sec.classList.toggle('bg-main-moon1')
    })
})
// Navbar Scroll
window.onscroll = function () {
    if (window.scrollY > 0) {
        nav.classList.remove('position-relative');
        nav.classList.add('fixed-top');
    }
    else {
        nav.classList.add('position-relative');
        nav.classList.remove('fixed-top');
    }
}

// Skills
let skills = [
    { icon: '<i class="fa-brands fa-html5 fa-2x ms-2 me-3"></i>', name: 'HTML' },
    { icon: '<i class="fa-brands fa-css3-alt fa-2x ms-2 me-3"></i>', name: 'CSS' },
    { icon: '<i class="fa-brands fa-js fa-2x ms-2 me-3"></i>', name: 'JAVASCRIPT' },
    { icon: '<i class="fa-brands fa-bootstrap fa-2x ms-2 me-3"></i>', name: 'BOOTSTRAP' },
    { icon: '<i class="bx bxl-jquery fa-2x ms-2 me-3"></i>', name: 'JQUERY' },
    { icon: '<i class="fa-brands fa-sass fa-2x ms-2 me-3"></i>', name: 'SASS' },
    { icon: '<i class="bx bxs-file-json fa-2x ms-2 me-3" ></i>', name: 'JSON & AJAX & AXIOS' },
    { icon: '<i class="fa-brands fa-github fa-2x ms-2 me-3"></i>', name: 'GIT & GITHUB' },
    { icon: '<i class="fa-brands fa-react fa-2x ms-2 me-3"></i>', name: 'REACT JS' }
]
let cartoona = '';
for (let i = 0; i < skills.length; i++) {
    cartoona += `
    <div class="col-lg-4 col-sm-6">
    <div class="item position-relative overflow-hidden">
        ${skills[i].icon}
        <span>${skills[i].name}</span>
    </div>
    </div>
`
}
document.querySelector('.skill').innerHTML = cartoona;

// Projects
let projects = [
    {
        name: 'BuildCon - Landing Page',
        image: 'imgs/buildcon.PNG',
        githPage: 'https://mohamedh89.github.io/buildconproject/',
        code: 'https://github.com/MohamedH89/buildconproject',
        skills: ['HTML', 'CSS', 'Bootstrap']
    },
    {
        name: 'SocialMedia - Landing Page',
        image: 'imgs/social.PNG',
        githPage: 'https://mohamedh89.github.io/SocialMedia/',
        code: 'https://github.com/MohamedH89/SocialMedia',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Education Courses - Landing Page',
        image: 'imgs/education.PNG',
        githPage: ' https://mohamedh89.github.io/education_website/',
        code: 'https://github.com/MohamedH89/education_website',
        skills: ['HTML', 'CSS', 'JavaScript', 'swiperjs', 'iconscout']
    },
    {
        name: 'Coffee Shop - Landing Page',
        image: 'imgs/coffee10.PNG',
        githPage: '  https://mohamedh89.github.io/coffee-shop/',
        code: 'https://github.com/MohamedH89/coffee-shop',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Travel Agency - Landing Page',
        image: 'imgs/travel.PNG',
        githPage: 'https://mohamedh89.github.io/Travel-Agency/',
        code: 'https://github.com/MohamedH89/Travel-Agency',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Covid-19 - Landing Page',
        image: 'imgs/covid-19.PNG',
        githPage: 'https://mohamedh89.github.io/covid-19/',
        code: 'https://github.com/MohamedH89/covid-19',
        skills: ['HTML', 'css', 'Bootstarp', 'JavaScript']
    },
    {
        name: 'Fokir - Landing Page',
        image: 'imgs/fokir.PNG',
        githPage: 'https://mohamedh89.github.io/myFokir/',
        code: 'https://github.com/MohamedH89/myFokir',
        skills: ['HTML', 'css', 'Bootstarp', 'JavaScript']
    },
    {
        name: 'Fitness - Landing Page',
        image: 'imgs/fitness000.PNG',
        githPage: 'https://mohamedh89.github.io/fitness/',
        code: 'https://github.com/MohamedH89/fitness',
        skills: ['React', 'HTML', 'css', 'JavaScript']
    },
    {
        name: 'DevFolio - Landing Page',
        image: 'imgs/divfolioimg.PNG',
        githPage: 'https://mohamedh89.github.io/mydevfolio/',
        code: 'https://github.com/MohamedH89/mydevfolio',
        skills: ['React', 'HTML', 'SASS', 'JavaScript', 'Bootstrap', 'Fontawesome']
    },
    {
        name: 'MovieDB - Landing Page',
        image: 'imgs/MovieDB.PNG',
        githPage: 'https://mohamedh89.github.io/movieDB/',
        code: 'https://github.com/MohamedH89/movieDB',
        skills: ['React','HTML', 'css','SASS', 'Bootstarp', 'JavaScript']
    }
];
let myProjects = '';
for (let i = 0; i < projects.length; i++) {
    myProjects += `
    <div class="col-lg-6">
    <div class="item">
        <div class="inner-box">
            <img src="${projects[i].image}" class="w-100" alt="Fokir">
            <div class="layer">
                <div class="w-75">
                    <ul class="list-unstyled d-flex justify-content-center mb-1">
                        <li><a href="${projects[i].githPage}" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="${projects[i].code}" target="_blank"><i class="fa-solid fa-code"></i></a></li>
                    </ul>
                    <h5 class="fw-bold text-nowrap">${projects[i].name}</h5>
                    <ul class="list-unstyled d-flex flex-wrap skills justify-content-center">
                    ${projects[i].skills.map((skill) => { return `<li>${skill}</li>` })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}
let project = document.getElementById('project').innerHTML = myProjects;

