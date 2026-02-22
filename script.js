// AUTO YEAR
document.getElementById("year")
.textContent=new Date().getFullYear();


// CURSOR GLOW
document.addEventListener("mousemove",(e)=>{
document.body.style.setProperty('--x',e.clientX+'px');
document.body.style.setProperty('--y',e.clientY+'px');
});


// TYPING EFFECT
const words=["Web Developer","JavaScript Developer","Internship Seeker"];

let i=0,j=0,current="",deleting=false;

function type(){

current=words[i];

j=deleting?j-1:j+1;

document.getElementById("typing")
.textContent=current.substring(0,j);

if(!deleting && j===current.length){
deleting=true;
setTimeout(type,1000);
return;
}

if(deleting && j===0){
deleting=false;
i=(i+1)%words.length;
}

setTimeout(type,deleting?40:80);
}

type();


// EMAILJS
emailjs.init("oN1riIJ48tB4gVOI_");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_6egf5so",
"template_2y8u7ls",
this
)
.then(function () {

alert("✅ Message Sent Successfully!");

}, function (error) {

alert("❌ Failed to send message.");
console.log(error);

});

this.reset();

});
// SCROLL REVEAL
ScrollReveal().reveal('.hero-text',{origin:'left',distance:'60px',duration:1800});
ScrollReveal().reveal('.profile',{origin:'right',distance:'60px',duration:1800});
ScrollReveal().reveal('.card',{interval:200});
ScrollReveal().reveal('.glass',{origin:'bottom',distance:'40px'});
