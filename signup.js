
function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("txtDate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "-" + parts[0] + "-" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}



function validation() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    const phoneNumber = document.getElementById('phone').value;
    let emailId = document.getElementById('email').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const DOB = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    var city = document.getElementById('city');
    var getCityValue = city.options[city.selectedIndex].value;
    // alert("value = "+ getCityValue);
    const genderValue = document.querySelector('input[name="gender"]:checked');

    document.getElementById('firstNameStatus').innerHTML = null;
    document.getElementById('lastNameStatus').innerHTML = null;
    document.getElementById('mobileStatus').innerHTML = null;
    document.getElementById('emailStatus').innerHTML = null;
    document.getElementById('userNameStatus').innerHTML = null;
    document.getElementById('passwordStatus').innerHTML = null;
    document.getElementById('DOBStatus').innerHTML = null;
    document.getElementById('addressStatus').innerHTML = null;
    document.getElementById('cityStatus').innerHTML = null;
    document.getElementById('genderStatus').innerHTML = null;
    document.getElementById('checkStatus').innerHTML = null;


    if (firstName.length <= 3) {
        document.getElementById('firstNameStatus').innerHTML = 'Enter a Valid First Name';
    }
    else if (lastName.length <= 3) {
        document.getElementById('lastNameStatus').innerHTML = 'Enter a Valid Last Name';
    }
    else if (phoneNumber.length !== 10 || phoneNumber.value == "") {
        document.getElementById('mobileStatus').innerHTML = 'Enter a Valid Phone Number';
    }
    else if (!emailId.match(validRegex)) {
        document.getElementById('emailStatus').innerHTML = 'Enter a Valid Email Address';
    }
    else if (userName.length <= 0) {
        document.getElementById('userNameStatus').innerHTML = 'Enter a Valid Username';
    }
    else if (password.length <= 0) {
        document.getElementById('passwordStatus').innerHTML = 'Enter a Valid Password';
    }
    else if (DOB.length <= 0) {
        document.getElementById('DOBStatus').innerHTML = 'Enter a Valid Date Of Birth';
    }
    else if (address.length <= 0) {
        document.getElementById('addressStatus').innerHTML = 'Enter a Valid Address';
    }
    else if (getCityValue == "0") {

        document.getElementById('cityStatus').innerHTML = 'Please Choose Your City';
    }
    else if (genderValue == null) {
        document.getElementById('genderStatus').innerHTML = 'Please Choose Your Gender';
    }
    else {
        document.getElementById('checkStatus').innerHTML = 'Successfully Registration';
    }
}
