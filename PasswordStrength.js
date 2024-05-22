function checkPassword() {
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    let strength = 0;
    var messages = [];

    // Minimum length
    if (password.length < 8) {
        messages.push("Password should not be less than 8 characters.");
    }else{
    
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength++;

        if (password.match(/[0-9]/)) {
            strength++;

            if (password.match(/[!,+@##%^&*()_+=]/)) {
                strength++;
            }
            else {
                messages.push("Password should contain at least one special character.");
            }

        }
        else {
            messages.push("Password should contain at least one number.");
        }

    }
    else {
        messages.push("Password should contain both uppercase and lowercase letters.");
    }
}

    if (strength == 3) {
        result.innerHTML = "Strong Password ";
        result.style.color = "green";
        if (password.length >= 12) {
            result.innerHTML = "Very Strong Password ";
        result.style.color = " darkgreen";
        }
    } else {
        result.innerHTML = "Weak password :\n " + messages.join(" and ");
        result.style.color = "red";
    }
}