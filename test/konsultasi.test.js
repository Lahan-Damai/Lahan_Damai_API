import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser, getTestUser } from "./test-util.js";


describe('GET /api/laporan/get/all', () => {
    beforeEach(async () => {
        await createTestUser("admin");
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa get semua laporan', async () => {
        const result = await supertest(app)
        .get('/api/laporan/get/all')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data.length).toBeGreaterThan(0);
    })
})

describe('GET /api/map/get', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa get semua laporan', async () => {
        const result = await supertest(app)
        .get('/api/map/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data.length).toBeGreaterThan(0);
    })
})