
const passwordBox = document.getElementById("Password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSYUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxhyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+={[]}></-";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * upperCase.length)];
    Password += symbol[Math.floor(Math.random() * upperCase.length)];

    while (length > Password.length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = Password
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}
