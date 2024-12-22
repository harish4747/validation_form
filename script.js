var sno = 1001;
let fname;
let lname;
let mail;
let password;
const details = [];

function validateMail(input) {
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