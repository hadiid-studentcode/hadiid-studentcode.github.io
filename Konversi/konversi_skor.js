function nilaibobot() {
    var nominal = document.getElementById("nominal").value;
    const nilai = document.getElementById("nilai");

    if (nominal >= 90) {
      nilai.innerHTML =
        "<h4 class='alert-heading'>Konversi berhasil !</h4><p>4.00 / A </p><hr />";
    } else if (nominal >= 80) {
       nilai.innerHTML =
         "<h4 class='alert-heading'>Konversi berhasil !</h4><p>3.75 / A- </p><hr />";
    } else if (nominal >= 75) {
      nilai.innerHTML =
        "<h4 class='alert-heading'>Konversi berhasil !</h4><p>3.5 / B+ </p><hr />";
    } else if (nominal >= 70) {
        nilai.innerHTML =
          "<h4 class='alert-heading'>Konversi berhasil !</h4><p>3.00 / B </p><hr />";
    } else if (nominal >= 65) {
       nilai.innerHTML =
         "<h4 class='alert-heading'>Konversi berhasil !</h4><p>2.75 / B- </p><hr />";
    } else if (nominal >= 60) {
      nilai.innerHTML =
        "<h4 class='alert-heading'>Konversi berhasil !</h4><p>2.50 / C+ </p><hr />";
    } else if (nominal >= 50) {
       nilai.innerHTML =
         "<h4 class='alert-heading'>Konversi berhasil !</h4><p>2.00 / C </p><hr />";
    } else if (nominal >= 40) {
     nilai.innerHTML =
       "<h4 class='alert-heading'>Konversi berhasil !</h4><p>1.00 / D </p><hr />";
    } else if (nominal >= 0) {
        nilai.innerHTML =
          "<h4 class='alert-heading'>Konversi berhasil !</h4><p>0.00 / E </p><hr />";
    } else {
        nilai.innerHTML =
          "<h4 class='alert-heading'>Konversi berhasil !</h4><p>Terjadi Kesalahan !</p><hr />";
    }
}


