const { PORT } = require('./constants/index')
const express = require("express");

const app = express()

const appStarts = () => {
    try {
        app.listen(PORT, () => {
            console.log(`running at http://localhost:${PORT}`)
        })
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStarts()