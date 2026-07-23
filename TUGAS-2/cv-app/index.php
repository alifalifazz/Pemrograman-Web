<?php
include 'koneksi.php';

// Ambil data profil dari database
$query = mysqli_query($koneksi, "SELECT * FROM cv_profil WHERE id = 1");
$data  = mysqli_fetch_assoc($query);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae — <?= $data['nama']; ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <figure>
            <img
                src="1.jpeg"
                alt="Foto profil <?= $data['nama']; ?>"
                width="150"
            >
        </figure>

        <hgroup>
            <!-- Ambil Nama & Profesi dari Database -->
            <h1><?= $data['nama']; ?></h1>
            <p><?= $data['profesi']; ?></p>
        </hgroup>

        <address>
            <!-- Ambil Kota, Email, dan Telepon dari Database -->
            <?= $data['kota']; ?> &bull;
            <a href="mailto:<?= $data['email']; ?>"><?= $data['email']; ?></a> &bull;
            <a href="tel:<?= $data['telepon']; ?>"><?= $data['telepon']; ?></a>
        </address>

        <!-- Tombol untuk menuju ke halaman Form Edit -->
        <div style="margin-top: 15px;">
            <a href="edit.php" style="padding: 8px 16px; background-color: var(--warna-utama); color: white; border-radius: 4px; text-decoration: none; font-weight: bold;">Edit CV</a>
        </div>
    </header>

    <hr>

    <nav aria-label="Navigasi CV">
        <ol>
            <li><a href="#ringkasan">Ringkasan</a></li>
            <li><a href="#data-diri">Data Diri</a></li>
            <li><a href="#pendidikan">Pendidikan</a></li>
            <li><a href="#pengalaman">Pengalaman &amp; Proyek</a></li>
            <li><a href="#keterampilan">Keterampilan</a></li>
            <li><a href="#sertifikasi">Sertifikasi</a></li>
            <li><a href="#kontak">Kontak</a></li>
        </ol>
    </nav>

    <hr>

    <main>

        <!-- ===== RINGKASAN ===== -->
        <section id="ringkasan" aria-labelledby="judul-ringkasan">
            <h2 id="judul-ringkasan">Ringkasan Profil</h2>
            <!-- Ambil Ringkasan dari Database -->
            <p><?= $data['ringkasan']; ?></p>
        </section>

        <hr>

        <!-- ===== DATA DIRI ===== -->
        <section id="data-diri" aria-labelledby="judul-data-diri">
            <h2 id="judul-data-diri">Data Diri</h2>
            <dl>
                <dt>Nama lengkap</dt>
                <dd><?= $data['nama']; ?></dd>

                <dt>Tempat &amp; Tanggal Lahir</dt>
                <dd>Bandung, 07 April 2005</dd>

                <dt>Jenis Kelamin</dt>
                <dd>Perempuan</dd>

                <dt>Agama</dt>
                <dd>Islam</dd>

                <dt>Alamat</dt>
                <dd>Kp. Cilunjar Rt03/Rw06 Desa sukasari Kec. Pamengpeuk Kab. Bandung</dd>
            </dl>
        </section>

        <hr>

        <!-- ===== PENDIDIKAN ===== -->
        <section id="pendidikan" aria-labelledby="judul-pendidikan">
            <h2 id="judul-pendidikan">Pendidikan</h2>
            <ul>
                <li>
                    <strong>S1 — Teknik Informatika</strong><br>
                    Universitas Bale Bandung, 2024 – 2027
                </li>
                <li>
                    <strong>SMA — keagamaan</strong><br>
                    Mualimin 03 Pamengpeuk, 2021 – 2023
                </li>
                <li>
                    <strong>SMP — keagamaan</strong><br>
                    Pesantren Persatuan Islam 31 Banjaran, 2019 – 2022
                </li>
            </ul>
        </section>

        <hr>

        <!-- ===== PENGALAMAN & PROYEK ===== -->
        <section id="pengalaman" aria-labelledby="judul-pengalaman">
            <h2 id="judul-pengalaman">Pengalaman &amp; Proyek</h2>

            <article aria-labelledby="proyek-1">
                <h3 id="proyek-1">Proyek Praktikum &mdash; Website Profil Sederhana</h3>
                <p>
                    <strong>Peran:</strong> Pengembang Mandiri &bull;
                    <strong>Periode:</strong> Februari 2026 &ndash; Maret 2026
                </p>
                <ul>
                    <li>Membuat halaman web profil pribadi menggunakan HTML dan CSS dasar sebagai bagian dari tugas praktikum.</li>
                    <li>Menerapkan struktur dokumen HTML yang semantik dan layout sederhana menggunakan elemen standar.</li>
                    <li>Mengembangkan kemampuan pemecahan masalah secara mandiri dalam proses pengerjaan proyek.</li>
                </ul>
            </article>
        </section>

        <hr>

        <!-- ===== KETERAMPILAN ===== -->
        <section id="keterampilan" aria-labelledby="judul-keterampilan">
            <h2 id="judul-keterampilan">Keterampilan</h2>

            <h3>Teknis</h3>
            <ul>
                <li><strong>HTML</strong>: Pembuatan struktur halaman web yang semantik dan terorganisir.</li>
                <li><strong>CSS</strong>: Penerapan gaya dasar untuk tampilan halaman web.</li>
                <li><strong>Microsoft Excel</strong>: Penggunaan formula dan fungsi dasar untuk pengolahan data.</li>
            </ul>

            <h3>Non-Teknis</h3>
            <ul>
                <li><strong>Kemampuan Belajar Mandiri</strong>: Aktif mengikuti kursus daring untuk meningkatkan kompetensi.</li>
                <li><strong>Adaptabilitas</strong>: Cepat menyesuaikan diri dengan lingkungan dan situasi baru.</li>
                <li><strong>Komunikasi</strong>: Mampu menyampaikan ide dan informasi dengan jelas.</li>
            </ul>
        </section>

        <hr>

        <!-- ===== SERTIFIKASI ===== -->
        <section id="sertifikasi" aria-labelledby="judul-sertifikasi">
            <h2 id="judul-sertifikasi">Sertifikasi &amp; Pelatihan</h2>
            <ul>
                <li>
                    <strong>Using Basic Formulas and Functions in Microsoft Excel</strong><br>
                    Coursera &mdash; 2024
                </li>
                <li>
                    <strong>Conditional If-Else</strong><br>
                    MySkill &mdash; 2024
                </li>
            </ul>
        </section>

        <hr>

        <!-- ===== KONTAK ===== -->
        <section id="kontak" aria-labelledby="judul-kontak">
            <h2 id="judul-kontak">Kontak</h2>
            <p>
                Untuk keperluan kerja sama, rekrutmen, atau pertanyaan lebih lanjut,
                silakan hubungi saya melalui:
            </p>
            <ul>
                <li>Email: <a href="mailto:<?= $data['email']; ?>"><?= $data['email']; ?></a></li>
                <li>Telepon / WhatsApp: <a href="tel:<?= $data['telepon']; ?>"><?= $data['telepon']; ?></a></li>
                <li>Instagram: <a href="https://www.instagram.com/alifalifazz">https://www.instagram.com/alifalifazz</a></li>
                <li>GitHub: <a href="https://github.com/alifalifazz">https://github.com/alifalifazz</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/alifa-izzatunnisa">www.linkedin.com/in/alifa-izzatunnisa</a></li>
            </ul>
        </section>

    </main>

    <hr>

    <footer>
        <p>&copy; 2026 <?= $data['nama']; ?>. Curriculum Vitae.</p>
    </footer>

</body>
</html>