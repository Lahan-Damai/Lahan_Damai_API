<h1 style="text-align: center;">SENGKETA-LAHAN API</h1>

### URL = https://lahandamaiapi-production.up.railway.app/

### **API Endpoints**

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
        "role": "string"
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
- **Description** updates the user's details including their profile picture. The endpoint allows updating one profile picture per request.
- **Headers**:
  - **Content-Type**: multipart/form-data
- **Success Response**:
  - **Code**: `200 OK`   

#### Body
- **Multipart/Form-Data**: 
  - `files`: (optional) Profile picture file to upload.
  - Other user details as JSON fields.

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
- **Description** : switch user role, if user then become admin and if admin then become user
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
- **URL**: `/api/users/get/`
- **Description** : Get the user details by email
- **Method**: `GET`
- **Body**:
  ```json
  {
    "email": "string"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
          "email": "string",
          "nama": "string",
          "alamat": "",
          "nik": "",
          "tanggal_lahir": "",
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
  "tanggal_lapor": "string"
}
```

    **Note:**
    - `tanggal_lapor` defaultnya adalah tanggal sekarang. Jika tidak diberikan maka akan diisi dengan tanggal saat ini.


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
- **Description:** Mendapatkan koordinat semua laporan.  
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
- **url:** `/api/laporan/get`  
- **Method:** `GET`  
- **Description:** Mendapatkan laporan berdasarkan nomor sertifikat.  
- **Headers:**  
  - `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "no_sertifikat": "string"
}
```

**Responses:**
- `200 OK`: Berhasil mendapatkan laporan.
```json
{
  "data": {
    "latitude": "float",
    "longitude": "float",
    "no_sertifikat": "string",
    "user_nik": "string",
    "deskripsi": "string",
    "proses_laporan": "string",
    "tanggal_lapor": "string",
    "fotos": ["url1", "url2", ...]
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
  "no_sertifikat": "string"
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
  "no_sertifikat": "string"
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
      "latitude": "string",
      "longitude": "string",
      "no_sertifikat": "string",
      "user_nik": "string",
      "deskripsi": "string",
      "proses_laporan": "string",
      "fotos": ["url1", "url2", ...]
    },
    ...
  ]
}
```
- `500 Internal Server Error`: Kesalahan server.

---

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
    "id": "integer",
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
- `404 Not Found`: Post edukasi tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

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
      "id": "integer",
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
- `500 Internal Server Error`: Kesalahan server.

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
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

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
- `404 Not Found`: Post edukasi tidak ditemukan.
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

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
- `404 Not Found`: Post edukasi tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

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
- 200 OK: Photos added successfully
- 400 Bad Request: No files provided
- 404 Not Found: Post not found
- 500 Internal Server Error: Server error

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
    "id": "integer",
    "judul": "string",
    "isi": "string",
    "user_nik": "string"
  }
}
```
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

### 2. Membuat Balasan Thread Forum
**Endpoint:** `/api/forum/reply/add`  
**Method:** `POST`  
**Deskripsi:** Membuat balasan baru di thread forum.  
**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "thread_id": "integer",
  "isi": "string"
}
```

**Responses:**
- `200 OK`: Berhasil membuat balasan.
```json
{
  "data": {
    "id": "integer",
    "isi": "string",
    "user_nik": "string"
  }
}
```
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

### 3. Mendapatkan Thread Forum
**Endpoint:** `/api/forum/:id/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan detail dari sebuah thread forum berdasarkan ID.  
**Parameters:**
- `id` (path parameter): ID dari thread yang ingin diambil.

**Responses:**
- `200 OK`: Berhasil mendapatkan thread.
```json
{
  "data": {
    "id": "integer",
    "judul": "string",
    "isi": "string",
    "user_nik": "string"
  }
}
```
- `404 Not Found`: Thread tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

### 4. Mendapatkan Balasan Thread Forum
**Endpoint:** `/api/forum/:id/replies/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan semua balasan dari sebuah thread forum berdasarkan ID thread.  
**Parameters:**
- `id` (path parameter): ID dari thread yang balasannya ingin diambil.

**Responses:**
- `200 OK`: Berhasil mendapatkan balasan.
```json
{
  "data": [
    {
      "id": "integer",
      "isi": "string",
      "user_nik": "string"
    },
    ...
  ]
}
```
- `404 Not Found`: Thread tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

### 5. Mendapatkan Semua Thread Forum
**Endpoint:** `/api/forum/get`  
**Method:** `GET`  
**Deskripsi:** Mendapatkan semua thread forum.

**Responses:**
- `200 OK`: Berhasil mendapatkan semua thread.
```json
{
  "data": [
    {
      "id": "integer",
      "judul": "string",
      "isi": "string",
      "user_nik": "string"
    },
    ...
  ]
}
```
- `500 Internal Server Error`: Kesalahan server.

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
- `403 Forbidden`: Tidak memiliki izin untuk menghapus thread.
- `404 Not Found`: Thread tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

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
- `403 Forbidden`: Tidak memiliki izin untuk menghapus balasan.
- `404 Not Found`: Balasan tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

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
- `403 Forbidden`: Tidak memiliki izin untuk memperbarui thread.
- `404 Not Found`: Thread tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

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
- `403 Forbidden`: Tidak memiliki izin untuk memperbarui balasan.
- `404 Not Found`: Balasan tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.
</details>


<details>
<summary><h1> Konsultasi <h1></summary>

### Get All Experts
- **Endpoint**: `/api/konsultasi/ahli/get`
- **Method**: `GET`
- **Description**: Retrieve all experts.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": 1,
                    "nama": "John Doe",
                    "bidang": "Psychology",
                    "nomor_wa": "1234567890",
                    "deskripsi": "Expert in psychology",
                    "lama_kerja": "5",
                    "foto": "https://storage.googleapis.com/bucket/1-photo.jpg"
                },
                ...
            ]
        }
        ```

### Get Experts by Field
- **Endpoint**: `/api/konsultasi/ahli/get/bidang/:bidang`
- **Method**: `GET`
- **Description**: Retrieve experts by field.
- **Parameters**:
    - `bidang` (string) - The field of expertise.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": 1,
                    "nama": "John Doe",
                    "bidang": "Psychology",
                    "nomor_wa": "1234567890",
                    "deskripsi": "Expert in psychology",
                    "lama_kerja": "5",
                    "foto": "https://storage.googleapis.com/bucket/1-photo.jpg"
                },
                ...
            ]
        }
        ```

### Get Expert by ID
- **Endpoint**: `/api/konsultasi/ahli/get/:id`
- **Method**: `GET`
- **Description**: Retrieve an expert by ID.
- **Parameters**:
    - `id` (integer) - The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": {
                "id": 1,
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
- **Description**: Retrieve reviews of an expert by ID.
- **Parameters**:
    - `id` (integer) - The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": [
                {
                    "id": 1,
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
- **Description**: Retrieve the average rating of an expert by ID.
- **Parameters**:
    - `id` (integer) - The ID of the expert.
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

### Create Review for an Expert
- **Endpoint**: `/api/konsultasi/ahli/:id/ulasan`
- **Method**: `POST`
- **Description**: Create a review for an expert.
- **Parameters**:
    - `id` (integer) - The ID of the expert.
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

---

## Admin API Endpoints

### Create Expert
- **Endpoint**: `/api/konsultasi/ahli/create`
- **Method**: `POST`
- **Description**: Create a new expert.
- **Middleware**: `multerMiddleware` (for handling file uploads)
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
                "id": 1,
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
- **Description**: Update an expert's details.
- **Middleware**: `multerMiddleware` (for handling file uploads)
- **Parameters**:
    - `id` (integer) - The ID of the expert.
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
                "id": 1,
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
- **Description**: Delete an expert by ID.
- **Parameters**:
    - `id` (integer) - The ID of the expert.
- **Response**:
    - **Status**: `200 OK`
    - **Body**:
        ```json
        {
            "data": "success"
        }
        ```
</details>
