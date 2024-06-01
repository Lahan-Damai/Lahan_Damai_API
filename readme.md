<h1 style="text-align: center;">SENGKETA-LAHAN API</h1>

### Install dependency : `npm install`

### Menjalankan proyek : `npm run dev`

### **API Endpoints**

#### **1. Register User**
- **URL**: `/api/users/`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "string",
    "nama": "string",
    "alamat": "string",
    "nik": "string",
    "password": "string"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "username": "string",
        "nama": "string"
      }
    }
    ```
- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**: `Username atau NIK sudah ada`

#### **2. Login User**
- **URL**: `/api/users/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "data": {
        "token": "string"
      }
    }
    ```
  - **Cookie**: `token` (httpOnly)
- **Error Response**:
  - **Code**: `401 Unauthorized`
  - **Content**: `Username or password wrong`

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
        "username": "string",
        "nama": "string",
        "alamat": "string",
        "nik": "string"
      }
    }
    ```
- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**: `User tidak ditemukan`

