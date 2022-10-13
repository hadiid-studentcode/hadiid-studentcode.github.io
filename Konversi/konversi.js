function totalkan() {
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
  const total1 = document.getElementById('total');
    const ipk1 = document.getElementById("ipk");

  const n_tauhid = 2 * tauhid;
  const n_tarjih = 2 * tarjih;
  const n_phiwm = 2 * phiwm;
  const n_profil = 2 * profil;
  const n_ipm1 = 2 * ipm1;
  const n_psikologis = 2 * psikologis;
  const n_spi =  2 * spi;
  const n_mk = 2 * mk;
  const n_tp = 2 * tp;
  const n_ob = 2 * ob;
  const n_rktl = 2 * rktl;

  total = n_tauhid + n_tarjih + n_phiwm + n_profil + n_ipm1 + n_psikologis + n_spi + n_mk + n_tp + n_ob + n_rktl;

 

  total1.innerHTML = total;


 const ipk = konversi(total);

 ipk1.innerHTML = ipk;


}



function konversi(total) {
    
    ipk =  total / 23


    return ipk;
}
