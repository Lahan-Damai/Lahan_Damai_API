import { prismaClient } from "../src/application/database.js"
import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser } from "./test-util.js";


describe('POST /api/users', () => { 
    afterEach(async () => {
        await removeTestUser();
    })
    
    it('bisa register user baru', async () => { 
        const result = await supertest(app)
        .post('/api/users')
        .send({
            nik: "12345678",
            username: "damai01",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123"
        })

        expect(result.status).toBe(200);
        expect(result.body.data.nama).toBe("damai");
        expect(result.body.data.username).toBe("damai01");
        expect(result.body.data.password).toBeUndefined();
    }) 
    it('username dan NIK unik', async () => {
        const result1 = await supertest(app)
        .post('/api/users')
        .send({
            nik: "12345678",
            username: "damai01",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123"
        });
        const result2 = await supertest(app)
        .post('/api/users')
        .send({
            nik: "12345678",
            username: "damai01",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123"
        });
        expect(result1.status).toBe(200);
        expect(result2.status).toBe(400);
    })
 })

 describe('POST /api/users/login', () => { 
    beforeEach(async () => {
        await createTestUser();
    })
    afterEach(async ()=>{
        await removeTestUser();
    })
    it("bisa login ke exsiting user", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            username: "damai01",
            password: "lahanku123"
        })
        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("testtoken");
    })
    it("tidak bisa login jika request invalid", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            username: "",
            password: ""
        })
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    })
    it("tidak bisa login jika password salah", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            username: "damai01",
            password: "fakepass"
        })
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })
    it("tidak bisa login jika username salah", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            username: "fakeuser",
            password: "lahanku123"
        })
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })
 })


 describe('GET /api/users/current', function () {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('bisa mendapatkan current user', async () => {
        const result = await supertest(app)
            .get('/api/users/current')
            .set('Authorization', 'testtoken');

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('damai01');
        expect(result.body.data.nama).toBe('damai');
    });
    it('menolak get jika token invalid', async () => {
        const result = await supertest(app)
            .get('/api/users/current')
            .set('Authorization', 'faketoken');

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});