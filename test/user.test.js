import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser, getTestUser } from "./test-util.js";


describe('POST /api/users/register', () => { 
    afterEach(async () => {
        await removeTestUser();
    })
    
    it('bisa register user baru', async () => { 
        const result = await supertest(app)
        .post('/api/users/register')
        .send({
            nik: "1234567890",
            email: "damai0123@gmail.com",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123",
            tanggal_lahir: new Date()
        })

        expect(result.status).toBe(200);
        expect(result.body.data.nama).toBe("damai");
        expect(result.body.data.email).toBe("damai0123@gmail.com");
        expect(result.body.data.password).toBeUndefined();
    }) 
    it('email dan NIK unik', async () => {
        const result1 = await supertest(app)
        .post('/api/users/register')
        .send({
            nik: "1234567890",
            email: "damai0123@gmail.com",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123",
            tanggal_lahir: new Date()
        });
        const result2 = await supertest(app)
        .post('/api/users/register')
        .send({
            nik: "1234567890",
            email: "damai0123@gmail.com",
            nama: "damai",     
            alamat: "beji, depok",   
            password: "lahanku123",
            tanggal_lahir: new Date()
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
            email: "damai0123@gmail.com",
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
            email: "",
            password: ""
        })
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    })
    it("tidak bisa login jika password salah", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            email: "damai0123@gmail.com",
            password: "fakepass"
        })
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    })
    it("tidak bisa login jika email salah", async () => {
        const result = await supertest(app)
        .post('/api/users/login')
        .send({
            email: "fakeuser",
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

    it('bisa mendapatkan current user dengan token valid', async () => {
        const result = await supertest(app)
            .get('/api/users/current')
            .set('Cookie', 'token=testtoken');

        expect(result.status).toBe(200);
        expect(result.body.data.email).toBe('damai0123@gmail.com');
        expect(result.body.data.nama).toBe('damai');
    });

    it('menolak get jika token invalid', async () => {
        const result = await supertest(app)
            .get('/api/users/current')
            .set('Cookie', 'token=faketoken'); 

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});


describe('DELETE /api/users/logout', function () {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });

    it('bisa logout', async () => {
        const result = await supertest(app)
            .delete('/api/users/logout')
            .set('Cookie', 'token=testtoken');

        expect(result.status).toBe(200);
        const user = await getTestUser();
        expect(result.body.data.email).toBe(user.email);
        expect(user.token).toBeNull();
    });

    it('harusnya nolak jika token invalid', async () => {
        const result = await supertest(app)
            .delete('/api/users/logout')
            .set('Cookie', 'token=faketoken');

        expect(result.status).toBe(401);
    });
});