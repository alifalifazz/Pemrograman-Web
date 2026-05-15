// DATA AWAL CV — Alifa Izzatunnisa
var DATA_AWAL = {
    ringkasan: "Saya adalah mahasiswa Teknik Informatika semester awal yang memiliki antusiasme tinggi terhadap dunia teknologi dan pengembangan perangkat lunak. Meskipun masih berada di tahap awal perjalanan akademis, saya memiliki motivasi kuat untuk terus belajar, mudah beradaptasi dengan lingkungan baru, dan berkomitmen untuk memberikan kontribusi terbaik dalam setiap kesempatan yang ada.",

    dataDiri: {
        nama: "Alifa Izzatunnisa",
        ttl: "Bandung, 07 April 2005",
        jk: "Perempuan",
        agama: "Islam",
        alamat: "Kp. Cilunjar Rt03/Rw06 Desa Sukasari Kec. Pamengpeuk Kab. Bandung"
    },

    pendidikan: [
        "S1 Teknik Informatika | Universitas Bale Bandung | 2024 – 2027",
        "SMA Keagamaan | Mualimin 03 Pamengpeuk | 2021 – 2023",
        "SMP Keagamaan | Pesantren Persatuan Islam 31 Banjaran | 2019 – 2022"
    ],

    pengalaman: [
        "Proyek Praktikum — Website Profil Sederhana | Februari 2026 – Maret 2026 | Membuat halaman web profil pribadi menggunakan HTML dan CSS dasar sebagai bagian dari tugas praktikum."
    ],

    keterampilan: [
        "HTML | Pembuatan struktur halaman web yang semantik dan terorganisir",
        "CSS | Penerapan gaya dasar untuk tampilan halaman web",
        "Microsoft Excel | Penggunaan formula dan fungsi dasar untuk pengolahan data",
        "Belajar Mandiri | Aktif mengikuti kursus daring untuk meningkatkan kompetensi",
        "Adaptabilitas | Cepat menyesuaikan diri dengan lingkungan dan situasi baru",
        "Komunikasi | Mampu menyampaikan ide dan informasi dengan jelas"
    ],

    sertifikasi: [
        "Using Basic Formulas and Functions in Microsoft Excel | Coursera | 2024",
        "Conditional If-Else | MySkill | 2024"
    ],

    kontak: [
        "Email | alifizatunnisa@gmail.com",
        "Telepon / WhatsApp | +62 856-0165-2619",
        "Instagram | https://www.instagram.com/alifalifazz",
        "GitHub | https://github.com/alifalifazz",
        "LinkedIn | https://www.linkedin.com/in/alifa-izzatunnisa"
    ]
};

var LS_KEY = "cv_alifa";

// LOAD & SAVE localStorage
function muatData() {
    var raw = localStorage.getItem(LS_KEY);
    if (raw) {
        try {
            return JSON.parse(raw);
        } catch (e) {
            return DATA_AWAL;
        }
    }
    return DATA_AWAL;
}

function simpanData(data) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}


// RENDER — tampilkan data ke halaman
function render(data) {
    // Ringkasan
    document.getElementById('teks-ringkasan').innerText = data.ringkasan;

    // Data Diri
    document.getElementById('dd-nama').innerText   = data.dataDiri.nama;
    document.getElementById('dd-ttl').innerText    = data.dataDiri.ttl;
    document.getElementById('dd-jk').innerText     = data.dataDiri.jk;
    document.getElementById('dd-agama').innerText  = data.dataDiri.agama;
    document.getElementById('dd-alamat').innerText = data.dataDiri.alamat;

    // Sidebar
    document.getElementById('sidebar-nama').innerText  = data.dataDiri.nama;
    document.getElementById('sidebar-role').innerText  = 'Mahasiswa Teknik Informatika';
    document.getElementById('sidebar-lokasi').innerText = 'Bandung, Indonesia';

    // Pendidikan
    var ulPend = document.getElementById('list-pendidikan');
    ulPend.innerHTML = '';
    for (var i = 0; i < data.pendidikan.length; i++) {
        var bagian = data.pendidikan[i].split('|');
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + (bagian[0] ? bagian[0].trim() : '') + '</strong><br>' +
                       (bagian[1] ? bagian[1].trim() : '') + ' &mdash; ' +
                       (bagian[2] ? bagian[2].trim() : '');
        ulPend.appendChild(li);
    }

    // Pengalaman
    var divPeng = document.getElementById('list-pengalaman');
    divPeng.innerHTML = '';
    for (var i = 0; i < data.pengalaman.length; i++) {
        var bagian = data.pengalaman[i].split('|');
        var div = document.createElement('div');
        div.className = 'pengalaman-item';
        div.innerHTML = '<h4>' + (bagian[0] ? bagian[0].trim() : '') + '</h4>' +
                        '<p class="periode">' + (bagian[1] ? bagian[1].trim() : '') + '</p>' +
                        '<p>' + (bagian[2] ? bagian[2].trim() : '') + '</p>';
        divPeng.appendChild(div);
    }

    // Keterampilan
    var divSkill = document.getElementById('list-keterampilan');
    divSkill.innerHTML = '';
    for (var i = 0; i < data.keterampilan.length; i++) {
        var bagian = data.keterampilan[i].split('|');
        var div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = '<strong>' + (bagian[0] ? bagian[0].trim() : '') + '</strong>: ' +
                        (bagian[1] ? bagian[1].trim() : '');
        divSkill.appendChild(div);
    }

    // Sertifikasi
    var ulSert = document.getElementById('list-sertifikasi');
    ulSert.innerHTML = '';
    for (var i = 0; i < data.sertifikasi.length; i++) {
        var bagian = data.sertifikasi[i].split('|');
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + (bagian[0] ? bagian[0].trim() : '') + '</strong>' +
                       ' &mdash; ' + (bagian[1] ? bagian[1].trim() : '') +
                       ' (' + (bagian[2] ? bagian[2].trim() : '') + ')';
        ulSert.appendChild(li);
    }

    // Kontak
    var ulKontak = document.getElementById('list-kontak');
    ulKontak.innerHTML = '';
    for (var i = 0; i < data.kontak.length; i++) {
        var bagian = data.kontak[i].split('|');
        var label = bagian[0] ? bagian[0].trim() : '';
        var nilai = bagian[1] ? bagian[1].trim() : '';
        var li = document.createElement('li');
        if (nilai.indexOf('http') === 0) {
            li.innerHTML = '<strong>' + label + ':</strong> <a href="' + nilai + '" target="_blank">' + nilai + '</a>';
        } else if (label === 'Email') {
            li.innerHTML = '<strong>' + label + ':</strong> <a href="mailto:' + nilai + '">' + nilai + '</a>';
        } else if (label.indexOf('Telepon') !== -1) {
            li.innerHTML = '<strong>' + label + ':</strong> <a href="tel:' + nilai + '">' + nilai + '</a>';
        } else {
            li.innerHTML = '<strong>' + label + ':</strong> ' + nilai;
        }
        ulKontak.appendChild(li);
    }
}

// EDITOR — buka / tutup / simpan per bagian
function bukaTombolEdit(bagian) {
    var data = muatData();

    // Isi editor dengan data saat ini
    if (bagian === 'ringkasan') {
        document.getElementById('input-ringkasan').value = data.ringkasan;
    } else if (bagian === 'dataDiri') {
        document.getElementById('input-nama').value   = data.dataDiri.nama;
        document.getElementById('input-ttl').value    = data.dataDiri.ttl;
        document.getElementById('input-jk').value     = data.dataDiri.jk;
        document.getElementById('input-agama').value  = data.dataDiri.agama;
        document.getElementById('input-alamat').value = data.dataDiri.alamat;
    } else if (bagian === 'pendidikan') {
        document.getElementById('input-pendidikan').value = data.pendidikan.join('\n');
    } else if (bagian === 'pengalaman') {
        document.getElementById('input-pengalaman').value = data.pengalaman.join('\n');
    } else if (bagian === 'keterampilan') {
        document.getElementById('input-keterampilan').value = data.keterampilan.join('\n');
    } else if (bagian === 'sertifikasi') {
        document.getElementById('input-sertifikasi').value = data.sertifikasi.join('\n');
    } else if (bagian === 'kontak') {
        document.getElementById('input-kontak').value = data.kontak.join('\n');
    }

    // Tampilkan editor, sembunyikan view
    document.getElementById('view-' + bagian).style.display = 'none';
    document.getElementById('editor-' + bagian).style.display = 'block';
}

function tutupEditor(bagian) {
    document.getElementById('view-' + bagian).style.display = 'block';
    document.getElementById('editor-' + bagian).style.display = 'none';
}

function simpanBagian(bagian) {
    var data = muatData();

    if (bagian === 'ringkasan') {
        data.ringkasan = document.getElementById('input-ringkasan').value;

    } else if (bagian === 'dataDiri') {
        data.dataDiri.nama   = document.getElementById('input-nama').value;
        data.dataDiri.ttl    = document.getElementById('input-ttl').value;
        data.dataDiri.jk     = document.getElementById('input-jk').value;
        data.dataDiri.agama  = document.getElementById('input-agama').value;
        data.dataDiri.alamat = document.getElementById('input-alamat').value;

    } else if (bagian === 'pendidikan') {
        var baris = document.getElementById('input-pendidikan').value.split('\n');
        data.pendidikan = [];
        for (var i = 0; i < baris.length; i++) {
            if (baris[i].trim() !== '') data.pendidikan.push(baris[i].trim());
        }

    } else if (bagian === 'pengalaman') {
        var baris = document.getElementById('input-pengalaman').value.split('\n');
        data.pengalaman = [];
        for (var i = 0; i < baris.length; i++) {
            if (baris[i].trim() !== '') data.pengalaman.push(baris[i].trim());
        }

    } else if (bagian === 'keterampilan') {
        var baris = document.getElementById('input-keterampilan').value.split('\n');
        data.keterampilan = [];
        for (var i = 0; i < baris.length; i++) {
            if (baris[i].trim() !== '') data.keterampilan.push(baris[i].trim());
        }

    } else if (bagian === 'sertifikasi') {
        var baris = document.getElementById('input-sertifikasi').value.split('\n');
        data.sertifikasi = [];
        for (var i = 0; i < baris.length; i++) {
            if (baris[i].trim() !== '') data.sertifikasi.push(baris[i].trim());
        }

    } else if (bagian === 'kontak') {
        var baris = document.getElementById('input-kontak').value.split('\n');
        data.kontak = [];
        for (var i = 0; i < baris.length; i++) {
            if (baris[i].trim() !== '') data.kontak.push(baris[i].trim());
        }
    }

    // Simpan ke localStorage lalu render ulang
    simpanData(data);
    render(data);
    tutupEditor(bagian);

    alert('Data "' + bagian + '" berhasil disimpan ke localStorage!');
}

// RESET & HAPUS
function resetData() {
    if (confirm('Reset semua data ke data awal?')) {
        simpanData(DATA_AWAL);
        render(DATA_AWAL);
        alert('Data berhasil direset ke data awal!');
    }
}

function hapusStorage() {
    if (confirm('Hapus semua data dari localStorage? Halaman akan memuat ulang data awal.')) {
        localStorage.removeItem(LS_KEY);
        render(DATA_AWAL);
        alert('localStorage berhasil dihapus!');
    }
}

// INIT — jalankan saat halaman dibuka
window.onload = function () {
    var data = muatData();
    render(data);
};
