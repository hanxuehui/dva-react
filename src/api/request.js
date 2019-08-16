import axios from "axios";


export async function UserLogin(payload) {
    const url = '/user/login';
    return await axios.post(url, {
        ...payload
    })
}

export async function AddUser(payload) {
    console.log(payload)
    const url = '/add';
    return await axios.post(url, {
        ...payload
    })
}

export async function ShowRequest() {
    const url = '/show';
    return await axios.get(url)
}