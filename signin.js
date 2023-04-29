function login() {

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('userNameStatus').innerHTML = null;
    document.getElementById('passwordStatus').innerHTML = null;


    if (userName.length <= 0) {
        document.getElementById('userNameStatus').innerHTML = 'Enter a Valid Username';
    }
    else if (password.length <= 0) {
        document.getElementById('passwordStatus').innerHTML = 'Enter a Valid Password';
    }
    else {
        document.getElementById('checkStatus').innerHTML = 'Successfully Login';
    }
}