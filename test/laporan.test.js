import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser, getTestUser, removeLaporan, createLaporan } from "./test-util.js";


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
});


describe('POST /api/laporan/create', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeLaporan();
        await removeTestUser();
    });
    it('bisa membuat laporan', async () => {
        const result = await supertest(app)
        .post('/api/laporan/create')
        .set('Cookie', 'token=testtoken')
        .send({
            no_sertifikat: "test-no_sertifikat",
            deskripsi: "test deskripsi",
            latitude: 69.6969,
            longitude: 42.0,
            proses_laporan: "diproses",
            tanggal_lapor: "2020-01-01T00:00:00.000Z",
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data.no_sertifikat).toBe("test-no_sertifikat");
        expect(result.body.data.deskripsi).toBe("test deskripsi");
        expect(result.body.data.latitude).toBe(69.6969);
        expect(result.body.data.longitude).toBe(42.0);
        expect(result.body.data.proses_laporan).toBe("diproses");
        expect(result.body.data.user_nik).toBeDefined();
        expect(result.body.data.tanggal_lapor).toBeDefined();
    })
})

describe('PUT /api/laporan/update', () => {
    beforeEach(async () => {
        await createTestUser();
        await createLaporan();
    });
    afterEach(async () => {
        await removeLaporan();
        await removeTestUser();
    });
    it('bisa update laporan', async () => {
        const result = await supertest(app)
        .put('/api/laporan/update')
        .set('Cookie', 'token=testtoken')
        .send({
            no_sertifikat: "test-no_sertifikat",
            deskripsi: "test deskripsi updates"
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data.no_sertifikat).toBe("test-no_sertifikat");
        expect(result.body.data.deskripsi).toBe("test deskripsi updates");
        expect(result.body.data.latitude).toBe(69.6969);
        expect(result.body.data.longitude).toBe(42.0);
        expect(result.body.data.proses_laporan).toBe("diproses");
        expect(result.body.data.user_nik).toBeDefined();
        expect(result.body.data.tanggal_lapor).toBeDefined();
    })
})

describe('DELETE /api/laporan/delete', () => {
    beforeEach(async () => {
        await createTestUser();
        await createLaporan();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa delete laporan', async () => {
        const result = await supertest(app)
        .delete('/api/laporan/delete')
        .set('Cookie', 'token=testtoken')
        .send({
            no_sertifikat: "test-no_sertifikat"
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBe("success");
    })
});

describe('GET /api/laporan/get/user', () => {
    beforeEach(async () => {
        await createTestUser();
        await createLaporan();
    });
    afterEach(async () => {
        await removeLaporan();
        await removeTestUser();
    });
    it('bisa get laporan user', async () => {
        const result = await supertest(app)
        .get('/api/laporan/get/user')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data.length).toBeGreaterThan(0);
    })
})
