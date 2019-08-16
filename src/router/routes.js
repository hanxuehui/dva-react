import Login from "../containers/login";

export default [
    { path: '/login', component: Login },
    { path: '/', redirect: "/login" }
]