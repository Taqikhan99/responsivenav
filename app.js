const togglebtn= document.getElementById("togglebtn");

const navbarLinks = document.getElementsByClassName('navbarlinks')[0]

// add event listener on togglebtn
togglebtn.addEventListener('click',function(){
    navbarLinks.classList.toggle('active')
})