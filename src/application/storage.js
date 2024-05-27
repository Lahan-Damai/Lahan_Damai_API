import { Storage } from '@google-cloud/storage' 

let projectId = "lahan-damai"
let keyFilename = "mykey.json"
const storage = new Storage({
    projectId,
    keyFilename
})
const bucket = storage.bucket("lahan-damai");

export { bucket }