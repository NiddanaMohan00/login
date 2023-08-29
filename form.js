let btnClear= document.querySelector('#reset');
let inputs=document.querySelectorAll('input');
btnClear.addEventListener('click',()=>{
  inputs.forEach(input=>input.value="")
});
function welcome(){
  var UserName=document.getElementById("uname");
  var password=document.getElementById("pws");
  if(UserName.value.trim()==""||password.value.trim()=="")
  {
    alert("please enter correct information");
    return false;
  }
  else{
    true;
  }
}