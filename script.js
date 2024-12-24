// -------------------------------------- for Sigmup {
var sno = 1001;
let fname;
let lname;
let mail;
let password;
let details = []

function validateName(input, name) {
    if ((input == "")) {
        window.alert("Please Enter " + `${name}`);
    }
    else if (input.split("").every((char) => /[a-zA-Z]/.test(char))) {
        return input;
    }
    else {
        window.alert("invalid " + `${name}`);
    }
}
function validateMail(input) {
    if (input == "") {
        window.alert("Please Enter Email");
    }
    else {
        let specialcharacter = false;
        let requiredlength = false;
        if ((input.includes(".com", input.length - 4)) && input.length > 4) {
            requiredlength = true;
        }
        if (input.includes("@", 1)) {
            specialcharacter = true;
        }

        if (requiredlength && specialcharacter) {
            return input;
        }
        else {
            window.alert("Please Enter Valid email");
        }
    }
}

function validatePassword(input) {
    if (input == "") {
        window.alert("please enter password");
    }
    else if (input.length < 8) {
        window.alert("password length must be greater than 8");
    }
    else if (!(input.split("").some((char) => /[a-zA-Z]/.test(char)))) {
        window.alert("password must be alpha numeric");
    }
    else if (!(input.split("").some((char) => /[@#$%&*]/.test(char)))) {
        window.alert("password must contains atleast 1 special symbol");
    }
    else if (!input.split("").some((char) => /[0-9]/.test(char))) {
        window.alert("password must contains atleast 1 digit");
    }
    else {
        return input;
    }
}

function addDetails(fname, lname, mail, password) {
    details.push({
        SNo: sno,
        firstName: fname,
        lastName: lname,
        email: mail,
        password: password,

    });
    window.alert("Successfully Submitted \n" + `Your Serial No is ${sno} !`);
    sno++;
    console.clear();
    console.table(details);

}

const finalOutput = (fname, lname, mail, password) => {
    addDetails(fname, lname, mail, password);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
}

document.getElementById("submit").onclick = () => {
    fname = validateName(document.getElementById("fname").value.trim(), "First Name");
    if (fname != undefined) {
        lname = validateName(document.getElementById("lname").value.trim(), "Last Name")
    }
    if (fname != undefined && lname != undefined) {
        mail = validateMail(document.getElementById("mail").value.trim().toLowerCase());
    }
    if (fname != undefined && lname != undefined && mail != undefined) {
        password = validatePassword(document.getElementById("password").value.trim());
    }
    if (fname != undefined && lname != undefined && mail != undefined && password != undefined) {
        finalOutput(fname, lname, mail, password);
    }

}

// -------------------------------------- }
// -------------------------------------- for login { 

let loginmail;
let loginpassword;
let firstoutput;
let finaldisplay;

function checkUser(loginmail, loginpassword) {
    firstoutput = details.filter((val) => val.email == loginmail);
    firstoutput.length != 0 ? checkPassword(loginmail, loginpassword) : window.alert("invalid user");

}

function checkPassword(finalOutput, loginpassword) {
    finaldisplay = details.filter((val) => val.email == loginmail && val.password === loginpassword);
    if (finaldisplay.length == 0) {
        window.alert("wrong password");
    }
    else {
        alert("welcome "+finaldisplay[0].firstName);
        console.table(finaldisplay);
        // console.table(typeof(finaldisplay));
    }

}



document.getElementById("loginbutton").onclick = () => {
    event.preventDefault();
    loginmail = validateMail(document.getElementById("loginmail").value.trim().toLowerCase());
    if (loginmail != undefined) {
        loginpassword = validatePassword(document.getElementById("loginpassword").value.trim());
    }
    if (loginmail != undefined && loginpassword != undefined) {
        checkUser(loginmail, loginpassword);
    }

}
// -------------------------------------- }

function choice(event,cho)
{
    let select1=document.getElementById("fform");
    let select2=document.getElementById("sform");
    let color1 =document.getElementById("login");
    let color2 =document.getElementById("signup");
    if(cho=="login") 
    {
        color1.style.backgroundColor="aqua";
        color2.style.backgroundColor="grey";
        select1.style.zIndex=1;
        select2.style.zIndex=-1;
    }
    
    else{
        color1.style.backgroundColor="grey";
        color2.style.backgroundColor="rgb(235, 73, 73)";
        select2.style.zIndex=1;
        select1.style.zIndex=-1;
    }
}
