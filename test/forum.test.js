import supertest from "supertest";
import {app} from "../src/application/app.js";
import { createTestUser, removeTestUser, createThreadForum, createReplyForum } from "./test-util.js";


describe('GET /api/forum/get/all', () => {
    beforeEach(async () => {
        await createTestUser("admin");
    });
    afterEach(async () => {
        await removeTestUser();
    })
    it('bisa get semua forum', async () => {
        const result = await supertest(app)
        .get('/api/forum/get/all')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data.length).toBeGreaterThan(0);
    })
})

describe('POST /api/forum/create', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa membuat forum', async () => {
        const result = await supertest(app)
        .post('/api/forum/create')
        .set('Cookie', 'token=testtoken')
        .send({
            judul: "test judul",
            isi: "test isi",
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data.judul).toBe("test judul");
    })
});

describe('DELETE /api/forum/:id/delete', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa delete forum', async () => {
        const result = await supertest(app)
        .delete('/api/forum/1/delete')
        .set('Cookie', 'token=testtoken')
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data).toBe('success');
    })
});

describe('PUT /api/forum/:id/update', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa update forum', async () => {
        const result = await supertest(app)
        .put('/api/forum/1/update')
        .set('Cookie', 'token=testtoken')
        .send({
            judul: "update judul",
            isi: "test isi",
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data).toBe("success");
    })
});

describe('GET /api/forum/:id/detail/get/', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa get detail forum', async () => {
        const result = await supertest(app)
        .get('/api/forum/1/detail/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
        expect(result.body.data.replies).toBeDefined();
        expect(result.body.data.user).toBeDefined();
    })
})

describe('POST /api/forum/reply/add', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa reply forum', async () => {
        const result = await supertest(app)
        .post('/api/forum/reply/add')
        .set('Cookie', 'token=testtoken')
        .send({
            isi: "test reply",
            thread_id: '1'
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
        expect(result.body.data.user_nik).toBeDefined();
    })
});

describe('DELETE /api/forum/reply/:id/delete', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
        await createReplyForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa delete reply forum', async () => {
        const result = await supertest(app)
        .delete('/api/forum/reply/1/delete')
        .set('Cookie', 'token=testtoken')
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
    })
});

describe('GET /api/forum/:id/get', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa get forum', async () => {
        const result = await supertest(app)
        .get('/api/forum/1/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
        expect(result.body.data.id).toBe('1');
    })
});

describe('GET /api/forum/:id/replies/get', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
        await createReplyForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa get replies forum', async () => {
        const result = await supertest(app)
        .get('/api/forum/1/replies/get')
        .set('Cookie', 'token=testtoken')
        .expect(200)
        expect(result.body.data).toBeDefined();
        expect(result.body.data.length).toBeGreaterThan(0);
    })
})

describe('PUT /api/forum/reply/:id/update', () => {
    beforeEach(async () => {
        await createTestUser();
        await createThreadForum();
        await createReplyForum();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    it('bisa update reply forum', async () => {
        const result = await supertest(app)
        .put('/api/forum/reply/1/update')
        .set('Cookie', 'token=testtoken')
        .send({
            isi: "test reply update",
        })
        expect(result.status).toBe(200);
        expect(result.body.data).toBeDefined();
    })
})