let i = 0;
let n
let arr = [];
let output_val = ''

//GENERATE USER LIST
function generateUser() {
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("addUser").style = "display:none";
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:visible";
    if (output_val == '') {
        document.getElementById("output").innerHTML = "No user found in system"
    }

    for (n = 0; n < i; n++) {
        output_val += n + ")  " + arr[n].userName + "<br>"
        document.getElementById("output").innerHTML = output_val
    }
}

//Add user function button function
function addUser() {
    document.getElementById("addUser").style = "display:visible";
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:hidden";
}

//ADD USER FORM
document.getElementById("addUserForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let add_name = document.getElementById("add_name").value
    let add_email = document.getElementById("add_email").value
    let add_phone = document.getElementById("add_phone").value


    let user = {
        userName: add_name,
        email: add_email,
        phone: add_phone
    }
    if (add_name.charAt(0) == ' ' || add_name == '') {
        alert("Name is not entered yet")
        document.getElementById("add_name").style = "outline:2px solid red";

        let inp = false;

        if (add_phone.charAt(0) == ' ' || add_phone.length < 11) {
            alert("phone number is not valid")
            document.getElementById("add_phone").style = "outline:2px solid red"
            inp = false

        }

        alert(`${inpName} loged in sucessfully`)
        alert(`${user.userName} is added to system `)
        arr[i] = user
        i++
        output_val = '';
        generateUser();
       

    })



//DELETE USER SIDE BUTTON
function deleteUser() {
    document.getElementById("addUser").style = "display:none";
    document.getElementById("loginForm").style = "display:none"
    document.getElementById("deleteUser").style = "display:visible";
    document.getElementById("screen").style = "visibility:hidden";
}

//DELETE USER FUNCTION
document.getElementById("deleteUser").addEventListener("submit", (e) => {
    e.preventDefault();
    let deleteUser_email = document.getElementById("deleteUser_email").value
    for (let m = 0; m < arr.length; m++) {
        if (arr[m].email === deleteUser_email) {
            arr.splice(m, 1)
            alert("User  has been deleted")
            output_val = '';
            isDeleted = true;
            i--;
            generateUser();
            break;
        }
    }
    if (isDeleted == false)
        alert("User not found")
})


//LOGIN FORM SIDE BUTTON
function loginUser() {
    document.getElementById("loginForm").style = "display:visible"
    document.getElementById("addUser").style = "display:none";
    document.getElementById("deleteUser").style = "display:none";
    document.getElementById("screen").style = "visibility:hidden";

}
//LOGIN FORM
document.getElementById("loginForm").addEventListener("submit", (e) => {

    e.preventDefault();
    let inpName = document.getElementById("inp_name").value;
    let inpEmail = document.getElementById("inp_email").value;
    let inpPhone = document.getElementById("inp_phone").value;
    // console.log(inpEmail)

    //FORM VELIDATION
    {
        if (inpName.charAt(0) == ' ' || inpName == '') {
            alert("Name is not entered yet")
            document.getElementById("inp_name").style = "outline:2px solid red"

            return false

        }

        if (inpPhone.charAt(0) == ' ' || inpPhone.length < 11) {
            alert("phone number is not valid")
            document.getElementById("inp_phone").style = "outline:2px solid red"
            return false

        }
    }
    alert(`${inpName} loged in sucessfully`)


})