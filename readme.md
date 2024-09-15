<h1 style="text-align: center;">SENGKETA-LAHAN API</h1>

### URL = https://api.lahandamai.xyz/

### **API Endpoints**
<details> 
<summary><h1>Home</h1></summary>

### 1. Get Home Content 
- **Deskripsi** : Mendapatkan konten halaman utama. Konten tersebut terdiri dari jumlah laporan per bulan untuk tahun berjalan dan daftar postingan edukasi terbaru.    
- **URL**: `/api/home/get`   
- **Method**: `GET`   

#### Response
```json
{
    "data": {
        "photo_profile": "url photo profile",
        "jumlah_laporan": {
            "0": 1,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 10,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0,
            "11": 0,
        },
            
        "edukasi": [
            {
                "id": "uuid",
                "judul": "string",
                "deskripsi": "string",
                "isi": "string",
                "publisher": "string",
                "tanggal_upload": "2024-06-10T00:00:00.000Z",
                "sumber": "string",
                "isRecommended": "boolean",
                "fotos": [
                    "https://example.com/foto1.jpg",
                    ...
                ]
            },
            ...
        ]
    }
}
```
</details>

<details>
  <summary><h1>User</h1></summary>

### **1. Register User**
- **URL**: `/api/users/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "string",
    "nama": "string",
    "alamat": "string",
    "nik": "string",
    "password": "string",
    "tanggal_lahir": "string"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "email": "string",
        "nama": "string"
      }
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: `email atau NIK sudah ada`

### **2. Login User**
- **URL**: `/api/users/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "token": "string",
        "nama": "string",
        "role": "string",
        "email": "string",
        "nik": "string"
      }
    }
    ```
  - **Cookie**: `token` (httpOnly)
- **Error Response**:
  - **Code**: `401 Unauthorized`
  - **Content**: `email or password wrong`

### **3. Get Current User**
- **URL**: `/api/users/current`
- **Method**: `GET`
- **Headers**:
  - **Cookie**: `token=string`
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "email": "string",
        "nama": "string",
        "alamat": "string",
        "nik": "string",
        "tanggal_lahir": "string"
      }
    }
    ```
- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**: `User tidak ditemukan`


### 4. Get All User
- **URL**: `/api/users/get/all`
- **Method**: `GET`
- **Headers**:
  - **Authorization**: Bearer <token>
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:

### 5. Update User
- **URL**: `/api/users/update`
- **Method**: `PUT`
- **Description**: memperbarui detail pengguna termasuk foto profil dengan pembaruan satu gambar profil per permintaan.
- **Headers**:
  - **Content-Type**: multipart/form-data
- **Success Response**:
  - **Code**: `200 OK`   

#### Body
- **Multipart/Form-Data**: 
  - `files`: (opsional) File gambar profil untuk diunggah.
  - Detail pengguna lainnya sebagai field JSON.

- **Request**
  ```json
  {
    "email": "string",
    "nama": "string",
    "alamat": "string",
    "nik": "string",
    "tanggal_lahir": "string",
    "foto": [<file>]
  }
  ```

- **Response**
  - Success (200)
  ```json
  {
    "data": {
      "email": "string",
      "role": "string",
      "nama": "string",
      "alamat": "string",
      "nik": "string",
      "tanggal_lahir": "string",
      "foto": "string"
    }
  }
  ```

- **Errors**
  - **400 Bad Request**
    - If more than one file is uploaded:
      ```json
      {
        "error": "only one file allowed"
      }
      ```
  - **401 Unauthorized**
    - If the user is not authenticated.
  - **500 Internal Server Error**
    - If there is a server-side error during the update process.




### 6. Update User Role 
- **URL**: `/api/users/update/role`
- **Description** : mengganti peran pengguna, jika pengguna umum maka menjadi admin dan jika admin maka menjadi pengguna umum
- **Method**: `PUT`
- **Body**:
  ```json
  {}
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "email": "string",
        "role": "string"
      }
    }
    ```

### 7. get other user by nik
- **URL**: `/api/users/:nik/get/`
- **Description** : Dapatkan detail pengguna berdasarkan nik
- **Method**: `GET`
- **Reqeuest Parameter**: (nik) NIK user
- hanya dapat dipanggil oleh user role admin
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
          "email": "string",
          "nama": "string",
          "alamat": "string",
          "nik": "string",
          "tanggal_lahir": "string",
          "role": "string",
          "foto": "https://storage.googleapis.com/lahan-damai/example-example.jpg"
      }
    }
    ```

</details>

<details> 
<summary><h1>Laporan</h1></summary>

### 1. Create Laporan
- **url:** `/api/laporan/create`  
- **Method:** `POST`  
- **Description:** Membuat laporan baru.  
- **Headers:**  
  - `Authorization: Bearer <token>`  
  - `Content-Type: multipart/form-data`

**Request Body:**
```json
{
  "no_sertifikat": "string",
  "deskripsi": "string",
  "latitude": "float",
  "longitude": "float",
  "proses_laporan": "string",
  "foto": [<file1>, <file2>, ...],
  "foto_dokumen": [<file1>, <file2>, ...],
  "tanggal_lapor": "string"
}
```

    **Note:**
    - `tanggal_lapor` Jika tidak diberikan maka akan diisi dengan tanggal saat ini.


**Responses:**
- `200 OK`: Laporan berhasil dibuat.
```json
{
  "data": {
    "latitude": "string",
    "longitude": "string",
    "no_sertifikat": "string",
    "user_nik": "string",
    "deskripsi": "string",
    "proses_laporan": "string",
    "tanggal_lapor": "string"
  }
}
```
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

---

### 2. Get Koordinat Laporan
- **url:** `/api/map/get`  
- **Method:** `GET`  
- **Description:** Mendapatkan koordinat semua laporan milik pengguna. jika admin, maka akan mengembalikan semua koordinat yang ada di database.  
- **Headers:**  
  - `Authorization: Bearer <token>`

**Responses:**
- `200 OK`: Berhasil mendapatkan koordinat.
```json
{
  "data": [
    {
      "no_sertifikat": "string",
      "latitude": "float",
      "longitude": "float"
    },
    ...
  ]
}
```
- `500 Internal Server Error`: Kesalahan server.

---

### 3. Get Laporan
- **url:** `/api/laporan/:user_nik/:no_sertifikat/get`  
- **Method:** `GET`  
- **Description:** Mendapatkan laporan berdasarkan nomor sertifikat dan nik user pelapor.  
- **Headers:**  
  - `Authorization: Bearer <token>`
**Responses:**
- `200 OK`: Berhasil mendapatkan laporan.
```json

{
    "data": {
        "latitude": -6.966150271,
        "longitude": 107.6612558,
        "no_sertifikat": "10.15.2...",
        "user_nik": "123456...",
        "deskripsi": "Tanah atas nama Coki, meng...",
        "proses_laporan": "Diproses",
        "tanggal_lapor": "2024-05-04T...",
        "fotos": ["https://storage.go ...."],
        "is_voted": false,
        "vote": 10, // jumlah vote
        "id": "ewradf",
        "komentar_sengketa": [
            {
                "comment": "isi komen",
                "id": "704ed6f1-cd...",
                "user": {
                    "nama": "Daf...",
                    "nik": "1234..",
                    "foto": "https://storage.go..."
                }
            }
        ],
        "count_lapor": 1 // jumlah laporan yang memiliki no sertifikat yang sama
    }
}

```
- `404 Not Found`: Laporan tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

---

### 4. Delete Laporan
- **url:** `/api/laporan/delete`  
- **Method:** `DELETE`  
- **Description:** Menghapus laporan berdasarkan nomor sertifikat.  
- **Headers:**  
  - `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "no_sertifikat": "string",
  "user_nik": "string"
}
```

**Responses:**
- `200 OK`: Laporan berhasil dihapus.
```json
{
  "data": "success"
}

```
- `404 Not Found`: Laporan tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

---

### 5. Update Laporan
- **url:** `/api/laporan/update`  
- **Method:** `PUT`  
- **Description:** Memperbarui laporan berdasarkan nomor sertifikat.  
- **Headers:**  
  - `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "no_sertifikat": "string",
  "user_nik": "string",
  "deskripsi": "string",
  "latitude": "float",
  "longitude": "float",
  "proses_laporan": "string",
  "tanggal_lapor": "string"
}
```

**Responses:**
```json
{
  "data": {
    "no_sertifikat": "string",
    "deskripsi": "string",
    "latitude": "string",
    "longitude": "string",
    "proses_laporan": "string",
    "tanggal_lapor": "string", 
    "user_nik": "string"
  }
}
```
- `200 OK`: Laporan berhasil diperbarui.
- `404 Not Found`: Laporan tidak ditemukan.
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

---

### 6. Delete Laporan Photos
- **url:** `/api/laporan/photos/delete`  
- **Method:** `DELETE`  
- **Description:** Menghapus semua foto terkait laporan berdasarkan nomor sertifikat.  
- **Headers:**  
  - `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "no_sertifikat": "string",
  "user_nik": "string"
}
```

**Responses:**
```json
{
  "data": "success"
}
```
- `200 OK`: Foto laporan berhasil dihapus.
- `404 Not Found`: Laporan atau foto tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

---

### 7. Add Photos to Laporan
- **url:** `/api/laporan/photos/add`  
- **Method:** `PUT`  
- **Description:** Menambahkan foto ke laporan berdasarkan nomor sertifikat.  
- **Headers:**  
  - `Authorization: Bearer <token>`
  - `Content-Type: multipart/form-data`

**Request Body:**
```json
{
  "no_sertifikat": "string",
  "user_nik": "string",
  "files": [<file1>, <file2>, ...]
}
```

**Responses:**
```json
{
  "data": "success"
}
```
- `200 OK`: Foto berhasil ditambahkan.
- `404 Not Found`: Laporan tidak ditemukan.
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

### 8. Get All Laporan Sengketa
**Endpoint:** `/api/laporan/get/all`  
**Method:** `GET`  
**Description:** Mendapatkan semua laporan sengketa yang tersimpan, diurutkan berdasarkan tanggal lapor dari yang terbaru.  
**Headers:**  
- `Authorization: Bearer <token>`

**Responses:**
- `200 OK`: Berhasil mendapatkan semua laporan sengketa.
```json
{
  "data": [
      {
          "latitude": -6....,
          "longitude": 106...,
          "no_sertifikat": "10.15.22...",
          "user_nik": "1234567...",
          "deskripsi": "Tanah atas nama muh..",
          "proses_laporan": "Diproses",
          "tanggal_lapor": "2024-06-...",
          "vote": 1,
          "id": "pun..",
          "fotos": [
              "https://stora..."
          ],
          "komentar_sengketa": [
            {
                "comment": "isi komen",
                "id": "704ed6f1-cd...",
                "user": {
                    "nama": "Daf...",
                    "nik": "1234..",
                    "foto": "https://storage.go..."
                }
            }
          ],
          "is_voted": false
      },
    ...
  ]
}
```

- `500 Internal Server Error`: Kesalahan server.

---

### 9. Get Laporan Sengketa Milik User
**Endpoint:** `/api/laporan/get/user/`  
**Method:** `GET`  
**Description:** Mendapatkan semua laporan sengketa yang terkait dengan pengguna.
**Headers:**  
- `Authorization: Bearer <token>`

**Request:**
```json
{
  "user_nik": "string" // opsional
}
```

**Responses:**
```json
{
  "data": [
      {
          "latitude": -6....,
          "longitude": 106...,
          "no_sertifikat": "10.15.22...",
          "user_nik": "1234567...",
          "deskripsi": "Tanah atas nama muh..",
          "proses_laporan": "Diproses",
          "tanggal_lapor": "2024-06-...",
          "vote": 1,
          "id": "pun..",
          "fotos": [
              "https://stora..."
          ],
          "komentar_sengketa": [
            {
                "comment": "isi komen",
                "id": "704ed6f1-cd...",
                "user": {
                    "nama": "Daf...",
                    "nik": "1234..",
                    "foto": "https://storage.go..."
                }
            }
          ],
          "is_voted": false
      },
    ...
  ]
}
```

### 10. mendapatkan seluruh Laporan Sengketa berdasarkan jumlah vote
**Endpoint:** `/api/laporan/get/by/vote`  
**Method:** `GET`  
**Headers:**  
- `Authorization: Bearer <token>`

**Responses:**
```json
{
  "data": [
      {
          "latitude": -6....,
          "longitude": 106...,
          "no_sertifikat": "10.15.22...",
          "user_nik": "1234567...",
          "deskripsi": "Tanah atas nama muh..",
          "proses_laporan": "Diproses",
          "tanggal_lapor": "2024-06-...",
          "vote": 1,
          "id": "pun..",
          "fotos": [
              "https://stora..."
          ],
          "komentar_sengketa": [
            {
                "comment": "isi komen",
                "id": "704ed6f1-cd...",
                "user": {
                    "nama": "Daf...",
                    "nik": "1234..",
                    "foto": "https://storage.go..."
                }
            }
          ],
          "is_voted": false
      },
    ...
  ]
}
```

### 11. menambahkan vote ke laporan sengketa
**Endpoint:** `/api/laporan/vote`  
**Method:** `POST`  
**Headers:**  
- `Authorization: Bearer <token>`

**Request:**
```json
{
  "no_sertifikat": "string", 
  "user_nik": "string" // nik milik pelapor bukan milik voter
}
```
**Responses:**
```json
{
    "data": "success"
}
```

### 12. menghapus vote ke laporan sengketa
**Endpoint:** `/api/laporan/unvote`  
**Method:** `DELETE`  
**Headers:**  
- `Authorization: Bearer <token>`

**Request:**
```json
{
  "no_sertifikat": "string", 
  "user_nik": "string" // nik milik pelapor bukan milik voter
}
```
**Responses:**
```json
{
    "data": "success"
}
```

### 13. menambahkan comment ke laporan sengketa
**Endpoint:** `/api/laporan/comment/add`  
**Method:** `POST`  
**Headers:**  
- `Authorization: Bearer <token>`

**Request:**
```json
{
  "no_sertifikat": "string", 
  "user_nik": "string", // nik milik pelapor bukan milik voter
  "comment": "string" // isi comment
}
```
**Responses:**
```json
{
    "data": {
        "user_commenter_nik": "user_commenter_nik",
        "user_nik": "user_nik",
        "no_sertifikat": "no_sertifikat",
        "comment": "comment"
    }
}
```

### 14. menghapus comment di laporan sengketa
**Endpoint:** `/api/laporan/comment/delete`
**Method:** `DELETE`  
**Headers:**  
- `Authorization: Bearer <token>`

**Request:**
```json
{
  "id": "string"
}
```
**Responses:**
```json
{
    "data": "succes"
}
```

### 15. mendapatkan komen pada laporan sengketa
**Endpoint:** `/api/laporan/:user_nik/:no_sertifikat/comment/getall`
**Method:** `GET`  
**Headers:**  
- `Authorization: Bearer <token>`
**Responses:**
```json
{
    "data": [
        {
            "comment": "comment",
            "id": "704ed6f1-cd...",
            "user": {
                "nama": "Daf..",
                "foto": "https://storage.goo..."
            }
        }
    ]
}
```
### 16. Get Laporan by laporan id
- **url:** `/api/laporan/:id/id`  
- **Method:** `GET`  
- **Headers:**  
  - `Authorization: Bearer <token>`
```json

{
    "data": {
        "latitude": -6.966150271,
        "longitude": 107.6612558,
        "no_sertifikat": "10.15.2...",
        "user_nik": "123456...",
        "deskripsi": "Tanah atas nama Coki, meng...",
        "proses_laporan": "Diproses",
        "tanggal_lapor": "2024-05-04T...",
        "fotos": ["https://storage.go ...."],
        "is_voted": false,
        "vote": 10, // jumlah vote
        "id": "ewradf",
        "komentar_sengketa": [
            {
                "comment": "isi komen",
                "id": "704ed6f1-cd...",
                "user": {
                    "nama": "Daf...",
                    "nik": "1234..",
                    "foto": "https://storage.go..."
                }
            }
        ],
        "count_lapor": 1 // jumlah laporan yang memiliki no sertifikat yang sama
    }
}

</details>


<details> 
<summary><h1> Edukasi</h1></summary>

### 1. Get Post Edukasi
**Endpoint:** `/api/edukasi/:id/get`  
**Method:** `GET`  
**Description:** Mendapatkan detail post edukasi berdasarkan ID.  
**Headers:**  
- `Authorization: Bearer <token>`

**Path Parameters:**
- `id` (integer): ID dari post edukasi yang ingin didapatkan.

**Responses:**
- `200 OK`: Berhasil mendapatkan post edukasi.
```json
{
  "data": {
    "id": "string",
    "judul": "string",
    "deskripsi": "string",
    "isi": "string",
    "publisher": "string",
    "tanggal_upload": "string",
    "sumber": "string",
    "fotos": ["url1", "url2", ...]
  }
}
```

---

### 2. Get All Post Edukasi
**Endpoint:** `/api/edukasi/get`  
**Method:** `GET`  
**Description:** Mendapatkan semua post edukasi.  
**Headers:**  
- `Authorization: Bearer <token>`

**Responses:**
- `200 OK`: Berhasil mendapatkan semua post edukasi.
```json
{
  "data": [
    {
      "id": "string",
      "judul": "string",
      "deskripsi": "string",
      "isi": "string",
      "publisher": "string",
      "tanggal_upload": "string",
      "sumber": "string",
      "fotos": ["url1", "url2", ...]
    },
    ...
  ]
}
```

---

### 3. Create Post Edukasi
**Endpoint:** `/api/edukasi/create`  
**Method:** `POST`  
**Description:** Membuat post edukasi baru.  
**Headers:**  
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

**Request Body:**
```json
{
  "judul": "string",
  "deskripsi": "string",
  "isi": "string",
  "publisher": "string",
  "tanggal_upload": "string",
  "foto": [<file1>, <file2>, ...],
  "sumber": "string"
}
```

**Responses:**
- `200 OK`: Post edukasi berhasil dibuat.
```json
{
  "data": {
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "isi": "string",
    "publisher": "string",
    "tanggal_upload": "string"
  }
}
```

---

### 4. Update Post Edukasi
**Endpoint:** `/api/edukasi/update/:id`  
**Method:** `PUT`  
**Description:** Memperbarui post edukasi berdasarkan ID.  
**Headers:**  
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

**Path Parameters:**
- `id` (integer): ID dari post edukasi yang ingin diperbarui.

**Request Body:**
```json
{
  "judul": "string",
  "deskripsi": "string",
  "isi": "string",
  "publisher": "string",
  "tanggal_upload": "string",
  "sumber": "string"
}
```

**Responses:**
- `200 OK`: Post edukasi berhasil diperbarui.
```json
{
  "data": {
    "id": "integer",
    "judul": "string",
    "deskripsi": "string",
    "isi": "string",
    "publisher": "string",
    "tanggal_upload": "string",
    "sumber": "string"
  }
}
```

---

### 5. Delete Post Edukasi
**Endpoint:** `/api/edukasi/delete/:id`  
**Method:** `DELETE`  
**Description:** Menghapus post edukasi berdasarkan ID.  
**Headers:**  
- `Authorization: Bearer <token>`

**Path Parameters:**
- `id` (integer): ID dari post edukasi yang ingin dihapus.

**Responses:**
- `200 OK`: Post edukasi berhasil dihapus.
```json
{
  "data": "success"
}
```

---

### 6. Delete Post Photos
**Endpoint** `/api/edukasi/photos/delete/:id`   
**Method** `DELETE`   
Response:
```json
{
  "data": "success"
}

```
- 200 OK: { "data": "success" }
- 404 Not Found: No photos found for the post
- 500 Internal Server Error: Server error


### 7. Add Photos to a Post
**Endpoint**: `/api/edukasi/photos/add/:id`   
**Method**: `PUT`   
**Request**: Multipart form data with files field containing image files  
**Response**:
```json
{
  "data": "success"
}

```


### 8. Get Recommended Artikel Edukasi
**Endpoint:** `/api/edukasi/recommended/get`  
**Method:** `GET`  
**Description:** 
**Headers:**  
- `Authorization: Bearer <token>`

**Responses:**
```json
{
    "data": [
        {
            "id": 1,
            "judul": "string",
            "deskripsi": "string",
            "isi": "string",
            "publisher": "string",
            "tanggal_upload": "2023-11-30T00:00:00.000Z",
            "sumber": "string",
            "fotos": [...]
        },
        ...
    ]
}
```

---

</details>

<details> 
<summary> <h1> Forum </h1></summary>

### 1. Membuat Thread Forum
**Endpoint:** `/api/forum/create`  
**Method:** `POST`  
**Deskripsi:** Membuat thread baru di forum.  
**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "judul": "string",
  "isi": "string"
}
```

**Responses:**
- `200 OK`: Berhasil membuat thread.
```json
{
  "data": {
    "id": "string",
    "judul": "string",
    "isi": "string",
    "user_nik": "string",
    "tanggal_upload": "string"
  }
}
```

### 2. Membuat Balasan Thread Forum
**Endpoint:** `/api/forum/reply/add`  
**Method:** `POST`  
**Deskripsi:** Membuat balasan baru di thread forum.  
**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "thread_id": "string",
  "isi": "string"
}
```

**Responses:**
- `200 OK`: Berhasil membuat balasan.
```json
{
  "data": {
    "id": "string",
    "isi": "string",
    "user_nik": "string",
    "tanggal_upload": "string"
  }
}
```

### 3. Mendapatkan Thread Forum
**Endpoint:** `/api/forum/:id/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan detail dari sebuah thread forum berdasarkan ID.  
**Parameters:**
- `id` (path parameter): ID dari thread yang ingin diambil.
**Headers:**
- `Authorization: Bearer <token>`


**Responses:**
- `200 OK`: Berhasil mendapatkan thread.
```json
{
  "data": {
    "id": "string",
    "judul": "string",
    "isi": "string",
    "user_nik": "string",
    "tanggal_upload": "string"
  }
}
```
### 3.1 Mendapatkan Thread Forum beserta Reply
**Endpoint:** `/api/forum/:id/detail/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan seluruh detail dari suatu thread  
**Parameters:**
- `id` (path parameter): ID dari thread yang ingin diambil.
**Headers:**
- `Authorization: Bearer <token>`


**Responses:**
- `200 OK`: Berhasil mendapatkan thread.
```json
{
    "data": {
        "id": "string",
        "judul": "string",
        "isi": "string",
        "tanggal_upload": "string",
        "total_reply": "integer",
        "user": {
            "nama": "string",
            "foto": "string",
            "email": "string",
            "nik": "string"
        },
        "replies": [
            {
                "id": "string",
                "thread_id": "string",
                "isi": "string",
                "tanggal_upload": "string",
                "user": {
                    "nama": "string",
                    "foto": "string",
                    "email": "string",
                    "nik": "string"
                },
                "replies": [
                    {...},
                    {...},
                    {...},
                ]
            },
            {...},
            {...},
            
        ]
    }
}
```
### 4. Mendapatkan Balasan Thread Forum
**Endpoint:** `/api/forum/:id/replies/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan semua balasan dari sebuah thread forum berdasarkan ID thread.  
**Parameters:**
- `id` (path parameter): ID dari thread yang balasannya ingin diambil.
**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- `200 OK`: Berhasil mendapatkan balasan.
```json
{
  "data": [
    {
      "id": "string",
      "isi": "string",
      "user_nik": "string",
      "tanggal_upload": "string"
    },
    ...
  ]
}
```

### 5. Mendapatkan Semua Thread Forum
**Endpoint:** `/api/forum/get/all`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan semua thread forum.
**Headers:**
- `Authorization: Bearer <token>`

**Responses:**
- `200 OK`: Berhasil mendapatkan semua thread.
```json
{
    "data": [
        {
            "id": "string",
            "judul": "string",
            "isi": "string",
            "tanggal_upload": "2024-06-06T14:37:38.597Z",
            "total_reply": "int",
            "user": {
                "nama": "string",
                "foto": "https://storage.googleapis.com/...",
                "email": "string",
                "nik": "string"
            }
        },
        ...
    ]
}
```

### 6. Menghapus Thread Forum
**Endpoint:** `/api/forum/:id/delete`  
**Method:** `DELETE`  
**Deskripsi:** Menghapus sebuah thread forum berdasarkan ID.  
**Headers:**
- `Authorization: Bearer <token>`

**Parameters:**
- `id` (path parameter): ID dari thread yang ingin dihapus.

**Responses:**
- `200 OK`: Berhasil menghapus thread.
```json
{
  "data": "success"
}
```

### 7. Menghapus Balasan Thread Forum
**Endpoint:** `/api/forum/reply/:id/delete`  
**Method:** `DELETE`  
**Deskripsi:** Menghapus sebuah balasan di thread forum berdasarkan ID balasan.  
**Headers:**
- `Authorization: Bearer <token>`

**Parameters:**
- `id` (path parameter): ID dari balasan yang ingin dihapus.

**Responses:**
- `200 OK`: Berhasil menghapus balasan.
```json
{
  "data": "success"
}
```

### 8. Memperbarui Thread Forum
**Endpoint:** `/api/forum/:id/update`  
**Method:** `PUT`  
**Deskripsi:** Memperbarui sebuah thread forum berdasarkan ID.  
**Headers:**
- `Authorization: Bearer <token>`

**Parameters:**
- `id` (path parameter): ID dari thread yang ingin diperbarui.

**Request Body:**
```json
{
  "judul": "string",
  "isi": "string"
}
```

**Responses:**
- `200 OK`: Berhasil memperbarui thread.
```json
{
  "data": "success"
}
```

### 9. Memperbarui Balasan Thread Forum
**Endpoint:** `/api/forum/reply/:id/update`  
**Method:** `PUT`  
**Deskripsi:** Memperbarui sebuah balasan di thread forum berdasarkan ID balasan.  
**Headers:**
- `Authorization: Bearer <token>`

**Parameters:**
- `id` (path parameter): ID dari balasan yang ingin diperbarui.

**Request Body:**
```json
{
  "isi": "string"
}
```

**Responses:**
- `200 OK`: Berhasil memperbarui balasan.
```json
{
  "data": "success"
}
```
</details>


<details>
<summary><h1> Konsultasi <h1></summary>

### Get All Experts
- **Endpoint**: `/api/konsultasi/ahli/get`
- **Method**: `GET`
- **Description**: Ambil semua ahli.
- **Headers:** `Authorization: Bearer <token>`

- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": "uuid",
                    "nama": "John Doe",
                    "bidang": "Psychology",
                    "nomor_wa": "1234567890",
                    "deskripsi": "Expert in psychology",
                    "lama_kerja": 5,
                    "foto": "https://storage.googleapis.com/bucket/1-photo.jpg",
                    "rating": 4,
                    "total_review": 5,
                },
                ...
            ]
        }
        ```

### Get Experts by Field
- **Endpoint**: `/api/konsultasi/ahli/get/bidang/:bidang`
- **Method**: `GET`
- **Description**: Dapatkan ahli berdasarkan bidangnya.
- **Parameters**:
    - `bidang` (string) - bidang keahliannya.
- **Headers:** `Authorization: Bearer <token>`
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": "uuid",
                    "nama": "John Doe",
                    "bidang": "Psychology",
                    "nomor_wa": "1234567890",
                    "deskripsi": "Expert in psychology",
                    "lama_kerja": "5",
                    "foto": "https://storage.googleapis.com/bucket/1-photo.jpg",
                    "rating": 4,
                    "total_review": 5,
                },
                ...
            ]
        }
        ```

### Get Expert by ID
- **Endpoint**: `/api/konsultasi/ahli/get/:id`
- **Method**: `GET`
- **Description**: Mengambil ahli berdasarkan ID.
- **Parameters**:
    - `id` The ID of the expert.
- **Headers:** `Authorization: Bearer <token>`
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "id": "uuid",
                "nama": "John Doe",
                "bidang": "Psychology",
                "nomor_wa": "1234567890",
                "deskripsi": "Expert in psychology",
                "lama_kerja": "5",
                "foto": "https://storage.googleapis.com/bucket/1-photo.jpg"
            }
        }
        ```

### Get Reviews of an Expert
- **Endpoint**: `/api/konsultasi/ahli/get/:id/ulasan`
- **Method**: `GET`
- **Description**: Ambil ulasan seorang ahli berdasarkan ID.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": "uuid",
                    "ahli_id": 1,
                    "rating": 4,
                    "user_nik": "9876543210",
                    "isi": "Great consultation!"
                },
                ...
            ]
        }
        ```

### Get Rating of an Expert
- **Endpoint**: `/api/konsultasi/ahli/get/:id/rating`
- **Method**: `GET`
- **Description**: Ambil rating rata-rata seorang ahli berdasarkan ID.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "rating": 4.5
            }
        }
        ```

### Get expert detail
- **Endpoint**: `/api/konsultasi/ahli/get/:id/detail`
- **Method**: `GET`
- **Description**: Mendapatkan detail dari sebuah ahli berdasarkan ID.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` id ahli.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "id": "string",
                "nama": "string",
                "bidang": "string",
                "nomor_wa": "string",
                "deskripsi": "string",
                "lama_kerja": "integer",
                "foto": "string",
                "rating": "integer",
                "reviews": [
                    {
                        "ahli_id": "string",
                        "rating": "integer",
                        "user_nik": "string",
                        "isi": "string",
                        "nama": "string",
                        "foto": "string"
                    }
                    ...
                ],
                "total_review": "integer"
            }
        }
        ```


### Create Review for an Expert
- **Endpoint**: `/api/konsultasi/ahli/:id/ulasan`
- **Method**: `POST`
- **Description**: Buat ulasan untuk seorang ahli.
- pengguna hanya dapat membuat maksimal 1 ulasan untuk satu ahli 
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Request Body**:
    ```json
    {
        "rating": 5,
        "isi": "Excellent service!"
    }
    ```
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "ahli_id": 1,
                "rating": 5,
                "user_nik": "1234567890",
                "isi": "Excellent service!"
            }
        }
        ```

### Add Expert to Favorite List
- **Endpoint**: `/api/konsultasi/ahli/:id/favorite`
- **Method**: `POST`
- **Description**: Menambahkan pakar ke daftar favorit pengguna
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.

- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": "success"
        }
        ```

### delete Expert from Favorite List
- **Endpoint**: `/api/konsultasi/ahli/:id/favorite`
- **Method**: `DELETE`
- **Description**: Menghapus pakar dari daftar favorit pengguna
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.

- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": "success"
        }
        ```

### get User Expert Favorite List
- **Endpoint**: `/api/konsultasi/ahli/favorite/get`
- **Method**: `GET`
- **Description**: Mengambil daftar pakar yang telah ditambahkan pengguna ke daftar favorit mereka.
- **Headers:** `Authorization: Bearer <token>`
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": "string",
                    "nama": "string",
                    "bidang": "string",
                    "nomor_wa": "string",
                    "deskripsi": "string",
                    "lama_kerja": 5,
                    "foto": "url string",
                    "rating": 4
                }
            ]
        }
        ```
---

### Create Expert
- **Endpoint**: `/api/konsultasi/ahli/create`
- **Method**: `POST`
- **Description**: Membuat pakar baru.
- **Headers:** `Authorization: Bearer <token>`
- **Request Body**:
    ```json
    {
        "nama": "John Doe",
        "bidang": "Psychology",
        "nomor_wa": "1234567890",
        "deskripsi": "Expert in psychology",
        "lama_kerja": "5",
        "foto": "<file>"
    }
    ```
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "id": "uuid",
                "nama": "John Doe",
                "bidang": "Psychology",
                "nomor_wa": "1234567890",
                "deskripsi": "Expert in psychology",
                "lama_kerja": "5",
                "foto": "https://storage.googleapis.com/bucket/1-photo.jpg"
            }
        }
        ```

### Update Expert
- **Endpoint**: `/api/konsultasi/ahli/update/:id`
- **Method**: `PUT`
- **Description**: Memperbarui detail pakar.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Request Body**:
    ```json
    {
        "nama": "John Doe",
        "bidang": "Psychology",
        "nomor_wa": "1234567890",
        "deskripsi": "Expert in psychology",
        "lama_kerja": "5"
    }
    ```
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "id": "uuid",
                "nama": "John Doe",
                "bidang": "Psychology",
                "nomor_wa": "1234567890",
                "deskripsi": "Expert in psychology",
                "lama_kerja": "5",
                "foto": "https://storage.googleapis.com/bucket/1-photo.jpg"
            }
        }
        ```

### Delete Expert
- **Endpoint**: `/api/konsultasi/ahli/delete/:id`
- **Method**: `DELETE`
- **Description**: Menghapus pakar berdasarkan ID.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": "success"
        }
        ```

### Delete Ulasan Ahli 
- **Endpoint**: `/api/konsultasi/ahli/:id/ulasan`
- **Method**: `DELETE`
- **Description**: hapus ulasan ahli berdasarkan id ahli.
- **Headers:** `Authorization: Bearer <token>`
- **Parameters**:
    - `id` The ID of the expert.
- **Request**: 
    - jika admin yang melakukan delete tambahkan request body dengan atribut user_nik milik ulasan yang ingin dihapus
    - **Body**:
    ```json
      {
        "user_nik": "string"
      }
    ```
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": "success"
        }
        ```
- server akan mengembalikan respon unauthorized apabila user yang melakukan request delete bukan user pembuat ulasan

</details>


<details> 
<summary><h1>ChatBot</h1></summary>

### 1. Generate Answer
- **Endpoint**: `/api/chatbot/generate`
- **Method**: `POST`

**Request Body:**
```json
{
	"query": "string"
}
```

**Response:**
```json
{
	"data": "string"
}
```

### 2. Insert Document As Context for Chatbot
- **Endpoint**: `/api/chatbot/insert-document`
- **Method**: `POST`

**Request Body:**
- contoh:
```json
{
    "file_name": "UUTanah/UU_05_1960.pdf",
    "uu_name": "Undang-Undang Nomor 5 Tahun 1960"
}
```
- file_name: nama file di bucket google cloud, format: direktori/nama_file.pdf
- uu_name: nama undang-undang; nama uu dan file harus sesuai 

**Response:**
```json
{
	"data": "success"
}
```

</details>