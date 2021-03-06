import dva from "dva";
import RouterView from "./router";
const createHashHistory = require('history').createHashHistory

const app = dva({
    history: createHashHistory()
})

app.router(RouterView)
app.start('#root')