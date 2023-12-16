 function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
 
 const serviceID="service_pbil5kg";
 const templateID="template_9vaoc6x";


 emailjs.send(serviceID,templateID,params)
 .then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message successfully");
    }
  
 )
 .catch((error)=>console.log(error));
}
/*===============toggle icon navbar========= */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }

    })
    /*===============Sticky navbar========= */
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

};
ScrollReveal({
     distance:'80px',
      reset: true,
      duration:2000,
      delay:200
    
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-image, .services-container,.portfolio-box,.about-img,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .heading', { origin:'left' });
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const handleSubmit=(e)=>{
 e.preventDefault();
 const name=e.target.name.value;
 console.log(name);
}