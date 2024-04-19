import {app} from "./application/app.js";
import { PORT } from './constants/index.js';


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`)
})