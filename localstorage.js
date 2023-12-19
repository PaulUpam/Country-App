const userAppName=document.querySelector("#userAppBtn");
const dltAppName=document.querySelector("#dltAppBtn");
userAppName.onclick=function(){
    const giveUserName=prompt("Enter User Name");
console.log (giveUserName);
// set avalue in local Storage

localStorage.setItem("userName",giveUserName);

//Retrive from Local Storage
const savedName=localStorage.getItem("userName");
console.log(savedName);
document.querySelector("#appUser").textContent=savedName;
}

document.querySelector("#appUser").textContent=localStorage.getItem("userName");

dltAppName.onclick=function(){
//   localStorage.removeItem("userName"); //specific remove 

//remove all local storage
 localStorage.clear();
}




