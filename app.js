const formOpenBtn=document.querySelector("#admin_form_open"),
home=document.querySelector(".home"),
form=document.querySelector(".box"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#admin_signUp"),
loginBtn=document.querySelector("#admin_Login");


formOpenBtn.addEventListener("click",()=> home.classList.add("show"));
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"));

signupBtn.addEventListener("click",(e)=>{e.preventDefault();
form.classList.add("active")});
loginBtn.addEventListener("click",(e)=>{e.preventDefault();
form.classList.remove("active")});



const formOpenBtn1=document.querySelector("#member_form_open"),
home1=document.querySelector(".home"),
form1=document.querySelector(".box"),
formCloseBtn1=document.querySelector(".form_close"),
signupBtn1=document.querySelector("#member_signUp"),
loginBtn1=document.querySelector("#member_Login");


formOpenBtn1.addEventListener("click",()=> home.classList.add("show"));
formCloseBtn1.addEventListener("click",()=> home.classList.remove("show"));

signupBtn1.addEventListener("click",(e)=>{e.preventDefault();
form1.classList.add("active")});
loginBtn1.addEventListener("click",(e)=>{e.preventDefault();
form1.classList.remove("active")});


  
  