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

  const status = keterangan(ipk);

  

  

  

  hasil.innerHTML =
    "<h4 class='alert-heading'>Konversi berhasil !</h4><p>Nama : " +
    nama +
    "</p><p>NBA : -</p><p>Utusan : " +
    utusan +
    "</p><div class='table-responsive'><table class='table table-striped table-hover table-borderless table-primary align-middle'><thead class='table-light'><caption>Total : 23 SKS</caption><caption>IPK : " +
    ipk +
    " </caption><caption>Prediket :</caption><caption>Keterangan : "+status+"</caption><tr><th>Materi</th><th>SKS</th><th>Nilai</th><th>Bobot</th><th>Mutu</th></tr></thead><tbody class='table-group-divider'><tr class='table-primary'><td scope='row'>Tauhid Sebagai Pondasi Kehidupan</td><td>2</td><td>" +
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

    var myImage = new Image(300, 300);
    x = myImage.src = "page_001.jpg";
    


    var w = window.open(
      "",
      "_blank",
      "toolbar = yes, top = 500, kiri = 500, lebar = 400, tinggi = 400"
    );

    w.document.body.innerHTML = "<html><head><title>"+nama+"</title><style type='text/css'><!--body{font-family: Arial; font-size: 20.0px}.pos{position: absolute; z-index: 0; left: 0px; top: 0px}--></style></head><body><nobr><nowrap><div class='pos' id='_0:0' style='top:0'><img name='_1170:827' src="+x+" height='1170' width='827' border='0' usemap='#Map'></div><div class='pos' id='_288:102' style='top:102;left:288'><span id='_15.4' style='font-weight:bold; font-family:Arial; font-size:15.4px; color:#000000'>LEMBAR HASIL BELAJAR PESERTA</span></div><div class='pos' id='_100:141' style='top:141;left:100'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>Nama</span></div><div class='pos' id='_199:141' style='top:141;left:199'><span id='_16.5' style=' font-family:Arial; font-size:16.5px; color:#000000'>: "+nama+"</span></div><div class='pos' id='_100:180' style='top:180;left:100'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>NBA</span></div><div class='pos' id='_199:180' style='top:180;left:199'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>: -</span></div><div class='pos' id='_100:219' style='top:219;left:100'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>Utusan</span></div><div class='pos' id='_199:219' style='top:219;left:199'><span id='_16.5' style=' font-family:Arial; font-size:16.5px; color:#000000'>: "+utusan+"</span></div><div class='pos' id='_101:266' style='top:266;left:101'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>No.</span></div><div class='pos' id='_244:266' style='top:266;left:244'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>Materi</span></div><div class='pos' id='_442:266' style='top:266;left:442'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>SKS</span></div><div class='pos' id='_545:266' style='top:266;left:545'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>Nilai</span></div><div class='pos' id='_638:266' style='top:266;left:638'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>Bobot</span></div><div class='pos' id='_724:266' style='top:266;left:724'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>Mutu</span></div><div class='pos' id='_105:298' style='top:298;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>1.</span></div><div class='pos' id='_137:297' style='top:297;left:137'><span id='_13.9' style=' font-family:Arial; font-size:13.9px; color:#000000'>Tauhid Sebagai Pondasi Kehidupan</span></div><div class='pos' id='_448:298' style='top:298;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_553:298' style='top:298;left:553'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_tauhid+"</span></div><div class='pos' id='_642:298' style='top:298;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_tauhid+"</span></div><div class='pos' id='_727:298' style='top:298;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_tauhid+"</span></div><div class='pos' id='_105:333' style='top:333;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2.</span></div><div class='pos' id='_137:323' style='top:323;left:137'><span id='_14.1' style=' font-family:Arial; font-size:14.1px; color:#000000'>Tuntunan Ibadah Sesuai Tarjih Ibadah </span></div><div class='pos' id='_448:333' style='top:333;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:333' style='top:333;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_tarjih+"</span></div><div class='pos' id='_642:333' style='top:333;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_tarjih+"</span></div><div class='pos' id='_727:333' style='top:333;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_tarjih+"</span></div><div class='pos' id='_137:341' style='top:341;left:137'><span id='_14.3' style=' font-family:Arial; font-size:14.3px; color:#000000'>Mahdah dan Nafilah</span></div><div class='pos' id='_105:367' style='top:367;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>3.</span></div><div class='pos' id='_137:367' style='top:367;left:137'><span id='_15.0' style=' font-family:Arial; font-size:15.0px; color:#000000'>PHIWM</span></div><div class='pos' id='_448:367' style='top:367;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_554:367' style='top:367;left:554'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_phiwm+"</span></div><div class='pos' id='_642:367' style='top:367;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_phiwm+"</span></div><div class='pos' id='_727:367' style='top:367;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_phiwm+"</span></div><div class='pos' id='_105:402' style='top:402;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>4.</span></div><div class='pos' id='_137:392' style='top:392;left:137'><span id='_14.0' style=' font-family:Arial; font-size:14.0px; color:#000000'>Profil Kader dan Nilai Perjuangan Tokoh </span></div><div class='pos' id='_448:402' style='top:402;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:402' style='top:402;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_profil+"</span></div><div class='pos' id='_642:402' style='top:402;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_profil+"</span></div><div class='pos' id='_727:402' style='top:402;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_profil+"</span></div><div class='pos' id='_137:410' style='top:410;left:137'><span id='_14.4' style=' font-family:Arial; font-size:14.4px; color:#000000'>Muhammadiyah</span></div><div class='pos' id='_105:436' style='top:436;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>5.</span></div><div class='pos' id='_137:436' style='top:436;left:137'><span id='_13.7' style=' font-family:Arial; font-size:13.7px; color:#000000'>Ke &#150; IPMan 1</span></div><div class='pos' id='_448:436' style='top:436;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:436' style='top:436;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_ipm1+"</span></div><div class='pos' id='_642:436' style='top:436;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_ipm1+"</span></div><div class='pos' id='_727:436' style='top:436;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_ipm1+"</span></div><div class='pos' id='_105:468' style='top:468;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>6.</span></div><div class='pos' id='_137:468' style='top:468;left:137'><span id='_13.8' style=' font-family:Arial; font-size:13.8px; color:#000000'>Psikologis & Etika Organisasi</span></div><div class='pos' id='_448:468' style='top:468;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:468' style='top:468;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_psikologis+"</span></div><div class='pos' id='_642:468' style='top:468;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_psikologis+"</span></div><div class='pos' id='_727:468' style='top:468;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_psikologis+"</span></div><div class='pos' id='_105:501' style='top:501;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>7.</span></div><div class='pos' id='_137:500' style='top:500;left:137'><span id='_13.9' style=' font-family:Arial; font-size:13.9px; color:#000000'>Sejarah Peradaban Islam</span></div><div class='pos' id='_448:501' style='top:501;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_554:501' style='top:501;left:554'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_spi+"</span></div><div class='pos' id='_642:501' style='top:501;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_spi+"</span></div><div class='pos' id='_727:501' style='top:501;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_spi+"</span></div><div class='pos' id='_105:534' style='top:534;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>8.</span></div><div class='pos' id='_137:533' style='top:533;left:137'><span id='_14.1' style=' font-family:Arial; font-size:14.1px; color:#000000'>Manajemen dan Keorganisasian</span></div><div class='pos' id='_448:534' style='top:534;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:534' style='top:534;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_mk+"</span></div><div class='pos' id='_642:534' style='top:534;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_mk+"</span></div><div class='pos' id='_727:534' style='top:534;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_mk+"</span></div><div class='pos' id='_105:567' style='top:567;left:105'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>9.</span></div><div class='pos' id='_137:566' style='top:566;left:137'><span id='_14.1' style=' font-family:Arial; font-size:14.1px; color:#000000'>(Muatan Lokal )Teknik Persidangan</span></div><div class='pos' id='_448:567' style='top:567;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_554:567' style='top:567;left:554'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_tp+"</span></div><div class='pos' id='_642:567' style='top:567;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_tp+"</span></div><div class='pos' id='_727:567' style='top:567;left:727'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_tp+"</span></div><div class='pos' id='_102:600' style='top:600;left:102'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>10.</span></div><div class='pos' id='_137:599' style='top:599;left:137'><span id='_15.0' style=' font-family:Arial; font-size:15.0px; color:#000000'>Outbound</span></div><div class='pos' id='_448:600' style='top:600;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>2</span></div><div class='pos' id='_552:600' style='top:600;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+f_ob+"</span></div><div class='pos' id='_642:600' style='top:600;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+s_ob+"</span></div><div class='pos' id='_731:600' style='top:600;left:731'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>"+n_ob+"</span></div><div class='pos' id='_102:632' style='top:632;left:102'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>11.</span></div><div class='pos' id='_137:632' style='top:632;left:137'><span id='_15.0' style=' font-family:Arial; font-size:15.0px; color:#000000'>RKTL</span></div><div class='pos' id='_448:632' style='top:632;left:448'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#000000'>3</span></div><div class='pos' id='_552:632' style='top:632;left:552'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#ff0000'>"+f_rktl+"</span></div><div class='pos' id='_642:632' style='top:632;left:642'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#ff0000'>"+s_rktl+"</span></div><div class='pos' id='_724:632' style='top:632;left:724'><span id='_13.6' style=' font-family:Arial; font-size:13.6px; color:#ff0000'>"+n_rktl+"</span></div><div class='pos' id='_100:695' style='top:695;left:100'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>Total SKS</span></div><div class='pos' id='_199:695' style='top:695;left:199'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>: 23</span></div><div class='pos' id='_100:730' style='top:730;left:100'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>IPK</span></div><div class='pos' id='_199:730' style='top:730;left:199'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>: "+ipk+"</span></div><div class='pos' id='_100:770' style='top:770;left:100'><span id='_16.6' style=' font-family:Arial; font-size:16.6px; color:#000000'>Keterangan : "+status+"</span></div><div class='pos' id='_222:809' style='top:809;left:222'><span id='_16.6' style=' font-family:Arial; font-size:16.6px; color:#000000'>Mengetahui</span></div><div class='pos' id='_508:809' style='top:809;left:508'><span id='_16.6' style=' font-family:Arial; font-size:16.6px; color:#000000'>Master Of Training,</span></div><div class='pos' id='_190:831' style='top:831;left:190'><span id='_16.6' style=' font-family:Arial; font-size:16.6px; color:#000000'>Ketua Umum PC IPM</span></div><div class='pos' id='_217:853' style='top:853;left:217'><span id='_16.6' style=' font-family:Arial; font-size:16.6px; color:#000000'>Kec. Tampan,</span></div><div class='pos' id='_168:971' style='top:971;left:168'><span id='_16.0' style='font-weight:bold; font-family:Arial; font-size:16.0px; color:#000000'>Arief Hidayatullah Alfarizy</span></div><div class='pos' id='_503:967' style='top:967;left:503'><span id='_16.0' style='font-weight:bold; font-family:Arial; font-size:16.0px; color:#000000'>Hadiid Andri Yulison</span></div><div class='pos' id='_243:1010' style='top:1010;left:243'><span id='_17.7' style=' font-family:Arial; font-size:17.7px; color:#000000'>NBA. -</span></div><div class='pos' id='_513:1005' style='top:1005;left:513'><span id='_16.5' style=' font-family:Arial; font-size:16.5px; color:#000000'>NBA. 05.06.64192</span></div></nowrap></nobr></body></html>";




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

function keterangan(ipk) {
  if (ipk >= 3) {
    return "Lulus";
  } else if (ipk >= 0) {
    return "Tidak lulus";
  } else {
    return "Kesalahan!";
  }
}
