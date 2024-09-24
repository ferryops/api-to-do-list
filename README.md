# To-Do List API

API To-Do List ini memungkinkan pengguna untuk mengelola checklist dan item-item di dalamnya. Pengguna dapat melakukan registrasi, login, membuat checklist, menambahkan item ke dalam checklist, mengubah status item, dan menghapus checklist atau item.

## Fitur

- API untuk registrasi pengguna
- API untuk login pengguna
- API untuk membuat checklist
- API untuk menghapus checklist
- API untuk menampilkan checklist yang sudah dibuat
- API untuk mendapatkan detail checklist beserta item-item di dalamnya
- API untuk membuat item-item to-do di dalam checklist
- API untuk mendapatkan detail item to-do
- API untuk mengubah item-item di dalam checklist
- API untuk mengubah status dari item di dalam checklist
- API untuk menghapus item dari checklist

## Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- JSON Web Token (JWT) untuk otentikasi
- bcrypt untuk hashing password

## Prerequisites

Sebelum memulai, pastikan Anda memiliki:

- Node.js terinstal di komputer.
- MySQL server yang berjalan.
- Postman atau alat serupa untuk menguji API.

## Instalasi

### Buat database

Ekspor database yang sudah ane bikin dengan nama `to_do_list`.

### Clone repository

clone repo ini dengan perintah:

```bash
https://github.com/ferryops/api-to-do-list.git
```

### Install dependensi

```bash
npm install
```

### Mulai server

```bash
node --watch index.js
```

### Dokumentasi API

[Dokumen API](https://github.com/ferryops/api-to-do-list/blob/main/Dokumen%20API.pdf)
