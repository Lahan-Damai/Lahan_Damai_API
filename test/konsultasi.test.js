import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestAhli, createTestUser, removeTestUser, removeTestAhli, createUlasanAhli } from "./test-util.js";


describe('GET /api/konsultasi/ahli/get', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    })
    it('bisa get konsultasi ahli', async () => {
        const result = await supertest(app)
        .get('/api/konsultasi/ahli/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
    })
});

describe('GET /api/konsultasi/ahli/get/:id', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestAhli();
    });
    afterEach(async () => {
        await removeTestAhli();
        await removeTestUser();
    })
    it('bisa get konsultasi ahli', async () => {
        const result = await supertest(app)
        .get('/api/konsultasi/ahli/get/1')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
    })
})

describe('GET /api/konsultasi/ahli/get/:id/detail', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestAhli();
    });
    afterEach(async () => {
        await removeTestAhli();
        await removeTestUser();
    })
    it('bisa get detail ahli', async () => {
        const result = await supertest(app)
        .get('/api/konsultasi/ahli/get/1/detail')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
        expect(result.body.data.reviews).toBeDefined();
        expect(result.body.data.total_review).toBeDefined();
    })
})

describe('POST /api/konsultasi/ahli/:id/ulasan', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestAhli();
    });
    afterEach(async () => {
        await removeTestAhli();
        await removeTestUser();
    })
    it('bisa ulasan ahli', async () => {
        const result = await supertest(app)
        .post('/api/konsultasi/ahli/1/ulasan')
        .set('Cookie', 'token=testtoken')
        .send({
            rating: 5,
            isi: "test ulasan"
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
    })
})

describe('DELETE /api/konsultasi/ahli/:id/ulasan', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestAhli();
        await createUlasanAhli();
    });
    afterEach(async () => {
        await removeTestAhli();
        await removeTestUser();
    })
    it('bisa hapus ulasan ahli', async () => {
        const result = await supertest(app)
        .delete('/api/konsultasi/ahli/1/ulasan')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
    })
})

