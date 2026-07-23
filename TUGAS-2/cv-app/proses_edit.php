<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama      = $_POST['nama'];
    $profesi   = $_POST['profesi'];
    $kota      = $_POST['kota'];
    $email     = $_POST['email'];
    $telepon   = $_POST['telepon'];
    $ringkasan = $_POST['ringkasan'];

    // Perintah SQL UPDATE
    $query = "UPDATE cv_profil SET 
                nama = '$nama', 
                profesi = '$profesi', 
                kota = '$kota', 
                email = '$email', 
                telepon = '$telepon', 
                ringkasan = '$ringkasan' 
              WHERE id = 1";

    if (mysqli_query($koneksi, $query)) {
        // Jika berhasil, balikkan ke halaman utama
        header("Location: index.php");
    } else {
        echo "Gagal mengupdate data: " . mysqli_error($koneksi);
    }
}
?>