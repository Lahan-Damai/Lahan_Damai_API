<h1 style="text-align: center;">SENGKETA-LAHAN API</h1>

### URL = https://lahandamaiapi-production.up.railway.app/

### **API Endpoints**

<details>
  <summary><h1>User</h1></summary>

#### **1. Register User**
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

#### **2. Login User**
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

#### **3. Get Current User**
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
  "foto": [<file1>, <file2>, ...]
}
```

**Responses:**
- `200 OK`: Laporan berhasil dibuat.
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
      "id": "string",
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
    "laporan_photos": ["url1", "url2", ...]
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
  "proses_laporan": "string"
}
```

**Responses:**
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
- `200 OK`: Foto laporan berhasil dihapus.
- `404 Not Found`: Laporan atau foto tidak ditemukan.
- `500 Internal Server Error`: Kesalahan server.

---

### 7. Add Laporan Photos
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
- `200 OK`: Foto berhasil ditambahkan.
- `404 Not Found`: Laporan tidak ditemukan.
- `400 Bad Request`: Permintaan tidak valid.
- `500 Internal Server Error`: Kesalahan server.

</details>


<details> 
<summary><h1>edukasi</h1></summary>

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
    "sumber": "string"
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
      "sumber": "string"
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


</details>