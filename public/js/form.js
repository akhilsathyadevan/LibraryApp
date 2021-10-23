console.log("hai");
const form=document.getElementById("form1");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");
const phone=document.getElementById("phone");
const weak=document.querySelector(".weak");
const medium=document.querySelector(".medium");
const strong=document.querySelector(".strong");
const pwd=document.querySelector(".pwd");
const indicator=document.querySelector(".indicator");
let regExpWeek=/[a-z]/;
let regExpMedium=/\d+/;
let regExpStrong=/[A-Z]/;
var flag=0;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
    if(flag==50){
        form.submit();

    }
    
});
function checkInputs(){

    
    const usernameValue=username.value.trim();
    const emailValue= email.value.trim();
    const password1Value= password1.value.trim();
    const password2Value= password2.value.trim();
    const phoneValue=phone.value.trim();
    
    if(usernameValue===""){
        setErrorFor(username,'username cannot be blank');
    }
    else if(usernameValue.length<6){
        setErrorFor(username,'username is too short');
    }
    else{
        flag=flag+10;
        setSuccessFor(username);
    }
    if(emailValue===""){
        setErrorFor(email,'email cannot be blank');
    }
    else if(!ValidateEmail(emailValue)){
        setErrorFor(email,'email format error');
    }
    else{
        flag=flag+10;
        setSuccessFor(email);
    }
   
    if(phoneValue===""){
        setErrorFor(phone,'phone no cannot be blank');
    }else if(!ValidatePhoneNumber(phoneValue)){
        setErrorFor(phone,'number format error');
    }
    else{
        flag=flag+10;
        setSuccessFor(phone);
    }
    
    
    if (password1Value===""){
        setErrorFor(password1,'password cannot be empty');
    }

    if(password1Value!=""){
        indicator.style.display="block";
        indicator.style.display="flex";
        if(password1Value.length<=3 && (password1Value.match(regExpWeek) || password1Value.match(regExpMedium)||password1Value.match(regExpStrong)))no=1;
        if(password1Value.length>=6 && (password1Value.match(regExpWeek) && password1Value.match(regExpMedium))||(password1Value.match(regExpMedium) && password1Value.match(regExpStrong)) || (password1Value.match(regExpWeek) && (password1Value.match(regExpStrong))))no=2;
        if(password1Value.length>=6 && password1Value.match(regExpWeek) && password1Value.match(regExpMedium) && password1Value.match(regExpStrong))no=3;
        if(no == 1){
            weak.classList.add("active");
            // setErrorFor(password1,'weak password');
            setErrorForpw(password1,'Weak Password');
            
        }
        else if(no == 2){
            weak.classList.add("active");
            medium.classList.add("active");
            // setErrorFor(password1,'medium password');
            setErrorForpm(password1,'Medium Password');
        }
        else if(no == 3){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            flag=flag+10;
            setSuccessFor(password1);
            
            setErrorForps(password1,'Strong Password');
        }
    }
    if(password2Value===""){
        setErrorFor(password2,'password cannot be blank');
    }
    else if(password1Value!=password2Value){
        setErrorFor(password2,'password miss match');
    }
    else{
        flag=flag+10;
        setSuccessFor(password2);
    }
 return flag;  
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
    small.innerText=message;
    formControl.className='form-control1 error';

}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control1 success';

}



function ValidateEmail(emailValue) 
{
 var regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 var em=emailValue.match(regexp);
 if (em)
  {
    return (true);
  }
    
    return (false);
}
    

function ValidatePhoneNumber(phoneValue) {
    // var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    var regExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phone = phoneValue.match(regExp);
    if (phone) {
      
      return true;
    }
    
    return false;
  }
  function setErrorForpsw(input,message){
    const formControl=input.parentElement;
    const weak=formControl.querySelector("weak");
    if(input.value.match(/[a-z]/))
    {
        formControl.className="weak";
    }
    else{
    small.innerText=message;
    formControl.className='form-control1 error';
}
  }
  function setErrorForpw(input,message){
    const formControl=input.parentElement;
    const para=formControl.querySelector("p");
    para.innerText=message;
    formControl.className='form-control1 weak';
  }
  function setErrorForpm(input,message){
    const formControl=input.parentElement;
    const para=formControl.querySelector("p");
    para.innerText=message;
    formControl.className='form-control1 medium';
  }
  function setErrorForps(input,message){
    const formControl=input.parentElement;
    const para=formControl.querySelector("p");
    para.innerText=message;
    formControl.className='form-control1 strong';
  }