// showNotification
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { } // Callback after click
    }).showToast();

}


// round a number 
const roundNumber = () => {
    let number = document.getElementById("inputField").value;
    if (!number) {
        showNotification("please enter any number", "error")
        return
    }
    number = Math.round(number)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${number}</span><br /> this number is rounded`
}

// ceil a number 
const ceilNumber = () => {
    let number = document.getElementById("inputField").value;
    if (!number) {
        showNotification("please enter any number", "error")
        return
    }
    number = Math.ceil(number)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${number}</span><br /> this number is ceiled`
}

// floor a number 
const floorNumber = () => {
    let number = document.getElementById("inputField").value;
    if (!number) {
        showNotification("please enter any number", "error")
        return
    }
    number = Math.floor(number)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${number}</span><br /> this number is floored`
}

// random number 
const randomNumber = () => {
    let randomNumber = Math.random()
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${randomNumber}</span><br /> random number is generated`

}

// throw a dice 
const dice = () => {
    let randomNumber = Math.random()
    let dice = (randomNumber * 6) + 1
    dice = Math.floor(dice)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${dice}</span><br /> Random number is generated between 1 to 6`

}

// generate password
const generatePassword = () => {
    let password = ""
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "~`!@#$%^&*()_+,.:?"
    let possiblePassword = upperCaseLetters + lowerCaseLetters + numbers + symbols
    let passwordLimit = prompt("please enter password length limit")
    for (let i = 0; i < passwordLimit; i++) {
        let randomNumber = Math.random()
        password += possiblePassword.charAt(randomNumber * possiblePassword.length)
        document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${password}</span><br /> Strong password is generated of "${passwordLimit}" digits`
    }

}

// converting String
const convertingString = () => {
    let str = document.getElementById("inputField").value
    if (!str) {
        showNotification("please fill input field", "error")
        return
    }
    document.getElementById("output").innerHTML = `${str} ${(typeof str)} <br />`
    str = Number(str)
    document.getElementById("output").innerHTML += `${str} ${(typeof str)} <br />`
}

// controlling Length 
const controllingLength = () => {
    let number = document.getElementById("inputField").value;
    if (!number) {
        showNotification("please enter any number", "error")
        return
    }
    number = Number(number)
    number = number.toFixed(2)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${number}</span><br /> Limit is fixed upto 2 decimals`

}

// calculate GST
const calculateGST = () => {
    let price = document.getElementById("inputField").value;
    if (!price) {
        alert("please enter some price")
        return
    }
    let tax = 17;
    tax = price * (tax / 100);
    tax = Math.round(tax)
    let totalPrice = Number(price) + tax;
    totalPrice = Math.round(totalPrice)
    document.getElementById("output").innerHTML = `<span class='fw-bold' style='font-size:25px'>${totalPrice}</span><br /> Total price including GST`

}


// clear output 
const clearOutput = () => {
    document.getElementById("output").innerHTML = " "
}