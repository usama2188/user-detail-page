let i = 0;
let arr = [];
let output_val = ''

//generate user
function generateUser() {
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("addUser").style = "display:none";
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:visible";

    for (n = 0; n < i; n++) {
        output_val += n + ")  " + arr[n].userName + "<br>"
        document.getElementById("output").innerHTML = output_val
    }
}

//user login button
function loginUser() {
    document.getElementById("loginForm").style = "display:visible"
    document.getElementById("addUser").style = "display:none";
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:hidden";

}

//Add user function button function
function addUser() {
    document.getElementById("addUser").style = "display:visible";
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:hidden";

}

//delete a user
function deleteUser() {
    document.getElementById("addUser").style = "display:none";
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("deleteUser").style = "display:visible";
    document.getElementById("screen").style = "visibility:hidden";
}


// function deleteUserForm() 
document.getElementById("deleteUser").addEventListener("submit",(e)=>{
    e.preventDefault();
    let deleteUser_email=document.getElementById("deleteUser_email").value
    for(let m=0;m<arr.length;m++)
    {
        if(arr[m].email===deleteUser_email)
        {
            arr.splice(m,1)
            alert("User  has been deleted")
            output_val='';
            generateUser();
            break;
        }
        else
        alert("User not found")
    }
})


//user login
function loginUser() {
    form = document.getElementById("loginForm")
    form.style = "display:visible"
    document.getElementById("addUser").style = "display:none";
}



//Add user form
document.getElementById("addUserForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        userName: document.getElementById("add_name").value,
        email: document.getElementById("add_email").value,
        phone: document.getElementById("add_phone").value
    }
    alert(`${user.userName} is added to system `)
    arr[i] = user
    i++
    output_val = '';
    generateUser();

})

//form
document.getElementById("loginForm").addEventListener("submit", (e) => {

    e.preventDefault();
    let inpName = document.getElementById("inp_name").value;
    let inpEmail = document.getElementById("inp_email").value;
    let inpPhone = document.getElementById("inp_phone").value;
    console.log(inpEmail)
    alert(`${inpName} loged in sucessfully`)



    //  {
    //      if (inpName.charAt(0) == ' ') {
    //          alert("Name is not entered yet")
    //          document.getElementById("inp_name").style = "outline:2px solid red"

    //          return false

    //      }

    //      if (inpPhone.charAt(0) == ' ' || userPhone.length > 13) {
    //         alert("phone number is not valid")
    //          document.getElementById("inp_phone").style = "outline:2px solid red"

    //      }
    //  }

})