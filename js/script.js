var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.transform = "translateY(0)";
    } else {
        document.getElementById("navbar").style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const home = document.getElementById('navHome')
const about = document.getElementById('navAbout')
const projects = document.getElementById('navProjects')
const contact = document.getElementById('navContact')

home.addEventListener('click', function(){
    home.classList.add('active')
    about.classList.remove('active')
    projects.classList.remove('active')
    contact.classList.remove('active')
})
about.addEventListener('click', function(){
    home.classList.remove('active')
    about.classList.add('active')
    projects.classList.remove('active')
    contact.classList.remove('active')
})
projects.addEventListener('click', function(){
    home.classList.remove('active')
    about.classList.remove('active')
    projects.classList.add('active')
    contact.classList.remove('active')
})
contact.addEventListener('click', function(){
    home.classList.remove('active')
    about.classList.remove('active')
    projects.classList.remove('active')
    contact.classList.add('active')
})

const vid = document.querySelector('video')

const modal = document.querySelector('div.vid')

modal.addEventListener('click',function(e){
    vid.pause()

    console.log(e.target)
})

const silang = document.querySelector('button.tekan')
const navBar = document.getElementById('navBar')

silang.addEventListener('click', function(){
    navBar.classList.toggle('slide')
})

navBar.addEventListener('click', function(e){
    
    if(e.target.getAttribute('id') == 'nbHome' || e.target.getAttribute('id') == 'nbAbout' || e.target.getAttribute('id') == 'nbProjects' || e.target.getAttribute('id') == 'nbContact'){
        navBar.classList.toggle('slide')
        
    }
})

