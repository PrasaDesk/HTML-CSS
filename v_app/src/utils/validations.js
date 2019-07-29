export const validateEmail = (email) => {
    var re = /^(([a-zA-Z]+)|([0-9][a-zA-Z]+))+([a-zA-Z0-9.\-_]*)@(([a-zA-Z]+)+(\.+)+[a-zA-Z]{2,})$/;
    return re.test(String(email).toLowerCase());
}

export const validatePassword = (password) => {
    return password !== null && password.length > 6;
}

export const validateOTP = (OTP) => {
    return (OTP.length === 6)
}

export const checkEqualPassword = (newPassword, retypePassword) => {
    return (newPassword === retypePassword)
}