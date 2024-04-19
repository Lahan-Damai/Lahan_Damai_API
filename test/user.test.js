import { prismaClient } from "../src/application/database.js"
import supertest from "supertest";
import {app} from "../src/application/app.js";


describe('POST /api/users', function () { 
    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                nik: "12345678"
            }
        })
    })
    
    it('bisa register user baru', async () => { 
        const result = await supertest(app)
        .post('/api/users')
        .send({
            nik: "12345678",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123"
        })

        expect(result.status).toBe(200);
        expect(result.body.data.nama).toBe("damai");
        expect(result.body.data.nik).toBe("12345678");
        expect(result.body.data.password).toBeUndefined();
    }) 
 })