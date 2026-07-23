# 📄 Aplikasi Curriculum Vitae (CV) Dinamis Berbasis Web

Proyek ini merupakan pengembangan dari CV statis (Tugas 1) menjadi **aplikasi CV dinamis berbasis web** yang terintegrasi dengan database MySQL menggunakan PHP. Aplikasi ini dilengkapi dengan fitur **CRUD (Update/Edit)** sehingga informasi profil dapat diperbarui secara langsung melalui antarmuka web tanpa perlu mengedit kode sumber HTML/CSS.

---
## 🚀 Alur Kerja Aplikasi

* **Menampilkan Data (`index.php`):**  
  Aplikasi mengambil data profil terbaru dari database MySQL (`db_cv`) dan menampilkannya secara dinamis pada tata letak CV.

* **Formulir Pengeditan (`edit.php`):**  
  Ketika tombol **Edit CV** diklik, halaman akan menampilkan formulir yang terisi otomatis (*pre-filled*) dengan data saat ini dari database.

* **Penyimpanan Data (`proses_edit.php`):**  
  Saat tombol **Simpan Perubahan** ditekan, data baru dikirim ke skrip ini untuk diperbarui ke dalam database melalui perintah SQL `UPDATE`. Setelah berhasil, halaman otomatis dialihkan kembali ke `index.php`.
--

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3
* **Backend:** PHP (Native)
* **Database:** MySQL
* **Web Server Lokal:** XAMPP (Apache)

---

## 📁 Struktur Folder & Berkas Proyek

```text
cv-alifa/
├── 1.jpeg            # Foto profil CV
├── style.css         # Berkas gaya tampilan (CSS)
├── koneksi.php       # Skrip PHP untuk menghubungkan aplikasi ke MySQL
├── index.php         # Halaman utama untuk menampilkan CV (Read)
├── edit.php          # Halaman formulir untuk mengubah data CV (Form Edit)
├── proses_edit.php   # Skrip pemroses data editan ke database (Update)
└── README.md         # Dokumentasi proyek
