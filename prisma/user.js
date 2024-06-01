export const user = Array.from({length: 10}, (_, index) => ({
    username: `user${index+1}`,
    password: "password123",
    alamat: "Jalan Random No.123, Kota Random, Negara Random",
    nik: `123456789${index+1}`,
    nama: `User Random ${index+1}`,
    token: `testtoken${index+1}`
}))

