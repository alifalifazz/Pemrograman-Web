# 📄 Aplikasi Curriculum Vitae (CV) Dinamis Berbasis Web

Proyek ini merupakan pengembangan dari CV statis (Tugas 1) menjadi **aplikasi CV dinamis berbasis web** yang terintegrasi dengan database MySQL menggunakan PHP. Aplikasi ini dilengkapi dengan fitur **CRUD (Update/Edit)** sehingga informasi profil dapat diperbarui secara langsung melalui antarmuka web tanpa perlu mengedit kode sumber HTML/CSS.

---

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

## 🚀 Alur Kerja Aplikasi

Secara umum, aplikasi CV dinamis ini bekerja dengan alur sebagai berikut:

```text
[ Browser ]  <--->  [ index.php (Tampilan CV) ]  <--->  [ Database MySQL ]
                            |
                     (Klik Edit CV)
                            v
                    [ edit.php (Form) ]
                            |
                   (Klik Simpan Data)
                            v
                 [ proses_edit.php (Backend) ]  --->  [ UPDATE Database ]