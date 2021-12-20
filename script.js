let i = 0;
let arr = [];


//generate user
function generateUser() {

    for (n=0 ; n < i; n++) {
        const output_val= n+ ")  " + arr[n].userName
        document.getElementById("output").innerHTML =output_val
    }
  



}


//add new user
function addUser() {
    let newName = prompt("Enter name:")
    let userEmail = prompt("Enter Email:")
    let userPhone = prompt("Enter number:")
    let user = {
        userName: newName,
        email: userEmail,
        phone: userPhone
    }

    arr[i] = user
    i++
}

//delete a user
function deleteUser(){
    arr.pop();
    console.log(arr)
    i--;
    alert("User deleted sucessfully")
    document.getElementById("output").innerHTML =output_val
}

//user login
function loginUser()
{
    form=document.getElementById("loginForm")
    form.style="display:visible"
}

//form
function form(){
    userName=document.getElementById("inp_name").value;
    userEmail=document.getElementById("inp_email").value;
    userPhone=document.getElementById("inp_phone").value;

    if(userName.charAt(0)==' ')
    {
        return false;

    }

    if(userPhone.charAt(0)==' '||userPhone.length>13)
    {
        document.getElementById("inp_phone").style="outline:2px solid red"
        return false
    }
}

// document.getElementById("loginForm").addEventListener("submit",function(){
//     userName=document.getElementById("inp_name").value;
//     userEmail=document.getElementById("inp_email").value;
//     userPhone=document.getElementById("inp_phone").value;

//     if(userName.charAt(0)==' ' || userphone.charAt(0)==' ')
//     return false;
// })