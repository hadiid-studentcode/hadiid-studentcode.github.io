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

  const n_tauhid = 2 * tauhid;
  const f_tauhid = prediket(tauhid);

  const n_tarjih = 2 * tarjih;
  const f_tarjih = prediket(tarjih);

  const n_phiwm = 2 * phiwm;
  const f_phiwm = prediket(phiwm);

  const n_profil = 2 * profil;
  const f_profil = prediket(profil);

  const n_ipm1 = 2 * ipm1;
  const f_ipm1 = prediket(ipm1);

  const n_psikologis = 2 * psikologis;
  const f_psikologis = prediket(psikologis);

  const n_spi = 2 * spi;
  const f_spi = prediket(spi);

  const n_mk = 2 * mk;
  const f_mk = prediket(mk);

  const n_tp = 2 * tp;
  const f_tp = prediket(tp);

  const n_ob = 2 * ob;
  const f_ob = prediket(ob);

  const n_rktl = 3 * rktl;
  const f_rktl = prediket(rktl);

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
    "<h4 class='alert-heading'>Konversi berhasil !</h4><div class='table-responsive'><table class='table table-striped table-hover table-borderless table-primary align-middle'><thead class='table-light'><caption>Total : 23 SKS</caption><caption>IPK : "+ ipk +" </caption><caption>Prediket :</caption><caption>Keterangan : Lulus / tidak lulus</caption><tr><th>Materi</th><th>SKS</th><th>Nilai</th><th>Bobot</th><th>Mutu</th></tr></thead><tbody class='table-group-divider'><tr class='table-primary'><td scope='row'>Tauhid Sebagai Pondasi Kehidupan</td><td>2</td><td>" +
    f_tauhid +
    "</td><td>" +
    tauhid +
    "</td><td>" +
    n_tauhid +
    "</td></tr><tr class='table-primary'><td scope='row'>Tuntunan Ibadah Sesuai Tarjih Ibadah Mahdah dan Nafilah</td><td>2</td><td>" +
    f_tarjih +
    "</td><td>" +
    tarjih +
    "</td><td>" +
    n_tarjih +
    "</td></tr><tr class='table-primary'><td scope='row'>PHIWM</td><td>2</td><td>" +
    f_phiwm +
    "</td><td>" +
    phiwm +
    "</td><td>" +
    n_phiwm +
    "</td></tr><tr class='table-primary'><td scope='row'>Profil Kader dan Nilai Perjuangan Tokoh Muhammadiyah</td><td>2</td><td>" +
    f_profil +
    "</td><td>" +
    profil +
    "</td><td>" +
    n_profil +
    "</td></tr><tr class='table-primary'><td scope='row'>Ke – IPMan 1</td><td>2</td><td>" +
    f_ipm1 +
    "</td><td>" +
    ipm1 +
    "</td><td>" +
    n_ipm1 +
    "</td></tr><tr class='table-primary'><td scope='row'>Psikologis & Etika Organisasi</td><td>2</td><td>" +
    f_psikologis +
    "</td><td>" +
    psikologis +
    "</td><td>" +
    n_psikologis +
    "</td></tr><tr class='table-primary'><td scope='row'>Sejarah Peradaban Islam</td><td>2</td><td>" +
    f_spi +
    "</td><td>" +
    spi +
    "</td><td>" +
    n_spi +
    "</td></tr><tr class='table-primary'><td scope='row'>Manajemen dan Keorganisasian</td><td>2</td><td>" +
    f_mk +
    "</td><td>" +
    mk +
    "</td><td>" +
    n_mk +
    "</td></tr><tr class='table-primary'><td scope='row'>(Muatan Lokal )Teknik Persidangan</td><td>2</td><td>" +
    f_tp +
    "</td><td>" +
    tp +
    "</td><td>" +
    n_tp +
    "</td></tr><tr class='table-primary'><td scope='row'>Outbound</td><td>2</td><td>" +
    f_ob +
    "</td><td>" +
    ob +
    "</td><td>" +
    n_ob +
    "</td></tr><tr class='table-primary'><td scope='row'>RKTL</td><td>3</td><td>" +
    f_rktl +
    "</td><td>" +
    rktl +
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
