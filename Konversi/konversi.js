function konversi() {
  const nama = document.getElementById("nama").value;
  const utusan = document.getElementById("utusan").value;
  const tauhid = document.getElementById("tauhid").value;
  const tarjih = document.getElementById("tarjih").value;
  const phiwm = document.getElementById("phiwm").value;
  const profil = document.getElementById("profil").value;
  const ipm1 = document.getElementById("ipm1").value;
  const psikologis = document.getElementById("psikologis").value;
  const spi = document.getElementById("spi").value;
  const mk = document.getElementById("mk").value;
  const tp = document.getElementById("tp").value;
  const ob = document.getElementById("ob").value;
  const rktl = document.getElementById("rktl").value;
  var hasil = document.getElementById("hasil");

  const s_tauhid = nilaibobot(tauhid);
  const n_tauhid = 2 * s_tauhid;
  const f_tauhid = prediket(s_tauhid);

  const s_tarjih = nilaibobot(tarjih);
  const n_tarjih = 2 * s_tarjih;
  const f_tarjih = prediket(s_tarjih);

  const s_phiwm = nilaibobot(phiwm);
  const n_phiwm = 2 * s_phiwm;
  const f_phiwm = prediket(s_phiwm);

  const s_profil = nilaibobot(profil);
  const n_profil = 2 * s_profil;
  const f_profil = prediket(s_profil);

  const s_ipm1 = nilaibobot(ipm1);
  const n_ipm1 = 2 * s_ipm1;
  const f_ipm1 = prediket(s_ipm1);

  const s_psikologis = nilaibobot(psikologis);
  const n_psikologis = 2 * s_psikologis;
  const f_psikologis = prediket(s_psikologis);

  const s_spi = nilaibobot(spi);
  const n_spi = 2 * s_spi;
  const f_spi = prediket(s_spi);

  const s_mk = nilaibobot(mk);
  const n_mk = 2 * s_mk;
  const f_mk = prediket(s_mk);

  const s_tp = nilaibobot(tp);
  const n_tp = 2 * s_tp;
  const f_tp = prediket(s_tp);

  const s_ob = nilaibobot(ob);
  const n_ob = 2 * s_ob;
  const f_ob = prediket(s_ob);

  const s_rktl = nilaibobot(rktl);
  const n_rktl = 3 * s_rktl;
  const f_rktl = prediket(s_rktl);

  const total =
    n_tauhid +
    n_tarjih +
    n_phiwm +
    n_profil +
    n_ipm1 +
    n_psikologis +
    n_spi +
    n_mk +
    n_tp +
    n_ob +
    n_rktl;

  const ipk = IPK(total);

  hasil.innerHTML =
    "<h4 class='alert-heading'>Konversi berhasil !</h4><div class='table-responsive'><table class='table table-striped table-hover table-borderless table-primary align-middle'><thead class='table-light'><caption>Total : 23 SKS</caption><caption>IPK : " +
    ipk +
    " </caption><caption>Prediket :</caption><caption>Keterangan : Lulus / tidak lulus</caption><tr><th>Materi</th><th>SKS</th><th>Nilai</th><th>Bobot</th><th>Mutu</th></tr></thead><tbody class='table-group-divider'><tr class='table-primary'><td scope='row'>Tauhid Sebagai Pondasi Kehidupan</td><td>2</td><td>" +
    f_tauhid +
    "</td><td>" +
    s_tauhid +
    "</td><td>" +
    n_tauhid +
    "</td></tr><tr class='table-primary'><td scope='row'>Tuntunan Ibadah Sesuai Tarjih Ibadah Mahdah dan Nafilah</td><td>2</td><td>" +
    f_tarjih +
    "</td><td>" +
    s_tarjih +
    "</td><td>" +
    n_tarjih +
    "</td></tr><tr class='table-primary'><td scope='row'>PHIWM</td><td>2</td><td>" +
    f_phiwm +
    "</td><td>" +
    s_phiwm +
    "</td><td>" +
    n_phiwm +
    "</td></tr><tr class='table-primary'><td scope='row'>Profil Kader dan Nilai Perjuangan Tokoh Muhammadiyah</td><td>2</td><td>" +
    f_profil +
    "</td><td>" +
    s_profil +
    "</td><td>" +
    n_profil +
    "</td></tr><tr class='table-primary'><td scope='row'>Ke – IPMan 1</td><td>2</td><td>" +
    f_ipm1 +
    "</td><td>" +
    s_ipm1 +
    "</td><td>" +
    n_ipm1 +
    "</td></tr><tr class='table-primary'><td scope='row'>Psikologis & Etika Organisasi</td><td>2</td><td>" +
    f_psikologis +
    "</td><td>" +
    s_psikologis +
    "</td><td>" +
    n_psikologis +
    "</td></tr><tr class='table-primary'><td scope='row'>Sejarah Peradaban Islam</td><td>2</td><td>" +
    f_spi +
    "</td><td>" +
    s_spi +
    "</td><td>" +
    n_spi +
    "</td></tr><tr class='table-primary'><td scope='row'>Manajemen dan Keorganisasian</td><td>2</td><td>" +
    f_mk +
    "</td><td>" +
    s_mk +
    "</td><td>" +
    n_mk +
    "</td></tr><tr class='table-primary'><td scope='row'>(Muatan Lokal )Teknik Persidangan</td><td>2</td><td>" +
    f_tp +
    "</td><td>" +
    s_tp +
    "</td><td>" +
    n_tp +
    "</td></tr><tr class='table-primary'><td scope='row'>Outbound</td><td>2</td><td>" +
    f_ob +
    "</td><td>" +
    s_ob +
    "</td><td>" +
    n_ob +
    "</td></tr><tr class='table-primary'><td scope='row'>RKTL</td><td>3</td><td>" +
    f_rktl +
    "</td><td>" +
    s_rktl +
    "</td><td>" +
    n_rktl +
    "</td></tr></tbody><tfoot></tfoot></table></div><hr>";

  document.getElementById("nama").value = " ";
  document.getElementById("utusan").value = " ";
  document.getElementById("tauhid").value = " ";
  document.getElementById("tarjih").value = " ";
  document.getElementById("phiwm").value = " ";
  document.getElementById("profil").value = " ";
  document.getElementById("ipm1").value = " ";
  document.getElementById("psikologis").value = " ";
  document.getElementById("spi").value = " ";
  document.getElementById("mk").value = " ";
  document.getElementById("tp").value = " ";
  document.getElementById("ob").value = " ";
  document.getElementById("rktl").value = " ";
}

function IPK(total) {
  ipk = total / 23;

  return ipk;
}

function prediket(nilai) {
  if (nilai == 4.0) {
    return "A";
  } else if (nilai == 3.75) {
    return "A-";
  } else if (nilai == 3.5) {
    return "B+";
  } else if (nilai == 3.0) {
    return "B";
  } else if (nilai == 2.75) {
    return "B-";
  } else if (nilai == 2.5) {
    return "C+";
  } else if (nilai == 2.0) {
    return "C";
  } else if (nilai == 1.0) {
    return "D";
  } else if (nilai == 0) {
    return "E";
  } else {
    return "F";
  }
}

function nilaibobot(nominal) {
  if (nominal >= 90) {
    return 4.0;
  } else if (nominal >= 80) {
    return 3.75;
  } else if (nominal >= 75) {
    return 3.5;
  } else if (nominal >= 70) {
    return 3.0;
  } else if (nominal >= 65) {
    return 2.75;
  } else if (nominal >= 60) {
    return 2.5;
  } else if (nominal >= 50) {
    return 2.0;
  } else if (nominal >= 40) {
    return 1.0;
  } else if (nominal >= 0) {
    return 0.0;
  } else {
    return "terjadi kesalahan !";
  }
}
