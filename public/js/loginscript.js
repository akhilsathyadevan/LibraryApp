
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



    



