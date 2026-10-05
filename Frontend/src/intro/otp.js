function generateOtp(){
    let otp = Math.floor(Math.random() * 1000000)
    return otp
}

console.log(generateOtp())