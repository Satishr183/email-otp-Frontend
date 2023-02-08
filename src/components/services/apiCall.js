import axios from 'axios'

export const registerFunction = async(data)=>{
    return await axios.post("https://lovely-bull-overalls.cyclic.app/user/register",data)
}

export const sentOtpFunction = async(data)=>{
    return await axios.post("https://lovely-bull-overalls.cyclic.app/user/otp",data)
}

export const userVerify = async(data)=>{
    return await axios.post("https://lovely-bull-overalls.cyclic.app/user/login",data)
}