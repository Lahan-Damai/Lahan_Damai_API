import {app} from "./application/app.js";


app.listen(process.env.PORT || 3001, () => {
    console.log(`running at http://localhost:3001`)
})