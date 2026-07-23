<?php
include 'koneksi.php';

// Ambil data lama
$query = mysqli_query($koneksi, "SELECT * FROM cv_profil WHERE id = 1");
$data  = mysqli_fetch_assoc($query);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Data CV</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; font-weight: bold; margin-bottom: 5px; }
        .form-group input, .form-group textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    </style>
</head>
<body>
    <main style="padding-top: 40px;">
        <h2>Edit Profil CV</h2>
        <form action="proses_edit.php" method="POST">
            <div class="form-group">
                <label>Nama Lengkap</label>
                <input type="text" name="nama" value="<?= $data['nama']; ?>" required>
            </div>
            <div class="form-group">
                <label>Profesi</label>
                <input type="text" name="profesi" value="<?= $data['profesi']; ?>" required>
            </div>
            <div class="form-group">
                <label>Kota</label>
                <input type="text" name="kota" value="<?= $data['kota']; ?>" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="<?= $data['email']; ?>" required>
            </div>
            <div class="form-group">
                <label>Telepon</label>
                <input type="text" name="telepon" value="<?= $data['telepon']; ?>" required>
            </div>
            <div class="form-group">
                <label>Ringkasan Profil</label>
                <textarea name="ringkasan" rows="5" required><?= $data['ringkasan']; ?></textarea>
            </div>
            <button type="submit" style="padding: 10px 20px; background-color: #2c5f8a; color: white; border: none; cursor: pointer; border-radius: 4px;">Simpan Perubahan</button>
            <a href="index.php" style="margin-left: 10px;">Batal</a>
        </form>
    </main>
</body>
</html>