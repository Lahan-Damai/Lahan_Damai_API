import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser } from "./test-util.js";


describe('GET /api/home/get', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    })
    it('bisa get home', async () => {
        const result = await supertest(app)
        .get('/api/home/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data.jumlah_laporan).toBeDefined();
        expect(result.body.data.edukasi).toBeDefined();
    })
});