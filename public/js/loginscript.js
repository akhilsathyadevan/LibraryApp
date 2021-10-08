
const form=document.getElementById("form1");
const username=document.getElementById("username");
const small=document.getElementById("s1");
const small1=document.getElementById("s2")
const password=document.getElementById("password");



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkInputs(username,password,slog,elog);
});

function checkInputs(username,password,slog,elog){
  if(username.value==""){
    alert("username cannot be blank");
    small.innerText="username cannot be blank";

  }
  if(password.value==""){
    alert("password cannot be blank");
  }
  if(username.value=="admin"&& password.value=="12345"){
    return slog();
  }else if(username==""){

    alert("username cannot be blank");
    return elog();
  }
}
function slog(){
  form.setAttribute('action','/books');
  form.submit();
  return true;
  
}
function elog(){
  return false;
}
// function checkInputs(username,password,setErrorFor,setSuccessFor){
//     const usernameValue=username.value.trim();
    
//     const password1Value= password.value.trim();
    
//     if(usernameValue===""){
//         setErrorFor(username,'username cannot be blank');
//     }
//     else if(usernameValue=="admin"){
//          setSuccessFor(username);
//     }
//     else{
//         setErrorFor(username,'incorrect username');
//     }
//     if (password1Value===""){
//         setErrorFor(password1,'password cannot be blank');
//     }
//     else if(password1Value=="12345"){
//         setSuccessFor(password1);
//     }
//     else{
//         setErrorFor(password1,'incorrect password');
//     }
//     if(usernameValue=="admin"&&password1Value=="12345"){
//         form.setAttribute('action','todo.html');
//         form.submit();
        
//     }
    
// }
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


// function ValidateEmail(emailValue) 
// {
//  var regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//  var em=emailValue.match(regexp);
//  if (em)
//   {
//     return (true);
//   }
    
//     return (false);
// }
    

// function ValidatePhoneNumber(phoneValue) {
//     // var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
//     var regExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     var phone = phoneValue.match(regExp);
//     if (phone) {
      
//       return true;
//     }
    
//     return false;
//   }
//   function setErrorForpsw(input,message){
//     const formControl=input.parentElement;
//     const weak=formControl.querySelector("weak");
//     if(input.value.match(/[a-z]/))
//     {
//         formControl.className="weak";
//     }
//     else{
//     small.innerText=message;
//     formControl.className='form-control1 error';
// }
//   }
//   function setErrorForpw(input,message){
//     const formControl=input.parentElement;
//     const para=formControl.querySelector("p");
//     para.innerText=message;
//     formControl.className='form-control1 weak';
//   }
//   function setErrorForpm(input,message){
//     const formControl=input.parentElement;
//     const para=formControl.querySelector("p");
//     para.innerText=message;
//     formControl.className='form-control1 medium';
//   }
//   function setErrorForps(input,message){
//     const formControl=input.parentElement;
//     const para=formControl.querySelector("p");
//     para.innerText=message;
//     formControl.className='form-control1 strong';
//   }