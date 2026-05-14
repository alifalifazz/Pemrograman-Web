// Simpan data ke localStorage
function simpanData() {
  var nama       = document.getElementById('nama').value;
  var profesi    = document.getElementById('profesi').value;
  var email      = document.getElementById('email').value;
  var telepon    = document.getElementById('telepon').value;
  var alamat     = document.getElementById('alamat').value;
  var pendidikan = document.getElementById('pendidikan').value;
  var pengalaman = document.getElementById('pengalaman').value;
  var keahlian   = document.getElementById('keahlian').value;

  if (nama == '') {
    document.getElementById('pesan').innerText = 'Nama tidak boleh kosong!';
    document.getElementById('pesan').style.color = 'red';
    return;
  }

  localStorage.setItem('cv_nama',       nama);
  localStorage.setItem('cv_profesi',    profesi);
  localStorage.setItem('cv_email',      email);
  localStorage.setItem('cv_telepon',    telepon);
  localStorage.setItem('cv_alamat',     alamat);
  localStorage.setItem('cv_pendidikan', pendidikan);
  localStorage.setItem('cv_pengalaman', pengalaman);
  localStorage.setItem('cv_keahlian',   keahlian);

  document.getElementById('pesan').innerText = 'Data berhasil disimpan!';
  document.getElementById('pesan').style.color = 'green';
}

// Tampilkan CV dari localStorage
function tampilkanCV() {
  var nama = localStorage.getItem('cv_nama');

  if (nama == null || nama == '') {
    document.getElementById('pesan').innerText = 'Belum ada data. Silakan simpan dulu!';
    document.getElementById('pesan').style.color = 'red';
    return;
  }

  // Isi data ke preview
  var inisial = nama.charAt(0).toUpperCase();
  document.getElementById('cv-avatar').innerText      = inisial;
  document.getElementById('cv-nama').innerText        = nama;
  document.getElementById('cv-profesi').innerText     = localStorage.getItem('cv_profesi') || '-';
  document.getElementById('cv-email').innerText       = localStorage.getItem('cv_email') || '-';
  document.getElementById('cv-telepon').innerText     = localStorage.getItem('cv_telepon') || '-';
  document.getElementById('cv-alamat').innerText      = localStorage.getItem('cv_alamat') || '-';
  document.getElementById('cv-pendidikan').innerText  = localStorage.getItem('cv_pendidikan') || '-';
  document.getElementById('cv-pengalaman').innerText  = localStorage.getItem('cv_pengalaman') || '-';

  // Tampilkan keahlian sebagai tag
  var keahlian = localStorage.getItem('cv_keahlian') || '';
  var keahlianList = keahlian.split(',');
  var keahlianHTML = '';
  for (var i = 0; i < keahlianList.length; i++) {
    var skill = keahlianList[i].trim();
    if (skill != '') {
      keahlianHTML += '<span class="skill-tag">' + skill + '</span>';
    }
  }
  document.getElementById('cv-keahlian').innerHTML = keahlianHTML || '-';

  // Tampilkan preview di bawah form
  document.getElementById('cv-output').style.display = 'block';
  document.getElementById('cv-output').scrollIntoView({ behavior: 'smooth' });
}

// Hapus semua data dari localStorage
function hapusData() {
  localStorage.removeItem('cv_nama');
  localStorage.removeItem('cv_profesi');
  localStorage.removeItem('cv_email');
  localStorage.removeItem('cv_telepon');
  localStorage.removeItem('cv_alamat');
  localStorage.removeItem('cv_pendidikan');
  localStorage.removeItem('cv_pengalaman');
  localStorage.removeItem('cv_keahlian');

  document.getElementById('nama').value       = '';
  document.getElementById('profesi').value    = '';
  document.getElementById('email').value      = '';
  document.getElementById('telepon').value    = '';
  document.getElementById('alamat').value     = '';
  document.getElementById('pendidikan').value = '';
  document.getElementById('pengalaman').value = '';
  document.getElementById('keahlian').value   = '';

  document.getElementById('pesan').innerText = 'Data berhasil dihapus!';
  document.getElementById('pesan').style.color = 'red';
}


// Load data dari localStorage saat halaman dibuka
window.onload = function() {
  if (localStorage.getItem('cv_nama') != null) {
    document.getElementById('nama').value       = localStorage.getItem('cv_nama');
    document.getElementById('profesi').value    = localStorage.getItem('cv_profesi');
    document.getElementById('email').value      = localStorage.getItem('cv_email');
    document.getElementById('telepon').value    = localStorage.getItem('cv_telepon');
    document.getElementById('alamat').value     = localStorage.getItem('cv_alamat');
    document.getElementById('pendidikan').value = localStorage.getItem('cv_pendidikan');
    document.getElementById('pengalaman').value = localStorage.getItem('cv_pengalaman');
    document.getElementById('keahlian').value   = localStorage.getItem('cv_keahlian');
  }
}
