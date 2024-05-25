import { createPostEdukasiValidation } from "../validation/edukasi-validation";

const create = (user, request) => {
    // validasi kalo dia admin
    const postEdukasi = validate(createPostEdukasiValidation, request);

    return prismaClient.postEdukasi.create({
        data: postEdukasi,
        select: {
            judul: true
        }
    });
}


export {
    create
}