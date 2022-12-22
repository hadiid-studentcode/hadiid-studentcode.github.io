 <?php
    require '../function.php';



    // cek apakah yang mengakses halaman ini sudah login
    if ($_SESSION['level'] == "") {
        header("location:../index.php");
    }

    // pagination
    // konfigurasi
    $jumlahDataPerHalaman = 5;
    $jumlahData = count(query("SELECT * FROM suplier"));
    $jumlahhalaman = ceil($jumlahData / $jumlahDataPerHalaman);
    $halamanAktif = (isset($_GET["page"])) ? $_GET["page"] : 1;
    $awalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;


    $masuk = mysqli_query($conn, "SELECT * FROM barang_masuk JOIN user ON barang_masuk.id_user = user.id_user JOIN suplier ON barang_masuk.id_suplier = suplier.id_suplier LIMIT $awalData,$jumlahDataPerHalaman");


    // tambah data barang masuk dari supplier

    // cek apakah tombol tambah barang sudah di submit
    if (isset($_POST["tambahdata"])) {

        // cek apakah barang masuk sudah ditambahkan atau tidak
        if (tambahbarangmasuk($_POST) > 0) {
            echo "
            <script>
            alert ('data berhasil ditambahkan !');
            document.location.href = 'barangmasuk.php';
            </script>
        ";
        } else {
            echo "
            <script>
            alert ('data gagal  ditambah !');
            document.location.href = 'barangmasuk.php';
            </script>
        ";
        }
    }


    // ubah data barang masuk
    // cek apakah tombil submit ubah sudah ditekan atau belum

    if (isset($_POST["ubahbrg"])) {
        // cek apakah data berhasil diubah atau tidak

        if (ubahbrg($_POST) > 0) {
            echo "
            <script>
            alert ('data berhasil diubah !');
            document.location.href = 'barangmasuk.php';
            </script>
        ";
        } else {
            echo "
            <script>
            alert ('data gagal diubah !');
            document.location.href = 'barangmasuk.php';
            </script>
        ";
        }
    }




    // tombol cari ditekan

    if (isset($_POST['caribrg'])) {
        $masuk = caribarangmsk($_POST['keyword']);
    }




    ?>



 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
     <link rel="icon" type="image/png" href="../dist/images/icons/logo.png">
     <title>SIBANGUN</title>
     <!--     Fonts and icons     -->
     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
     <!-- Nucleo Icons -->
     <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
     <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
     <!-- Font Awesome Icons -->
     <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
     <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
     <!-- CSS Files -->
     <link id="pagestyle" href="../assets/css/argon-dashboard.css?v=2.0.0" rel="stylesheet" />

 </head>

 <body class="g-sidenav-show   bg-gray-100">
     <div class="min-height-300 bg-primary position-absolute w-100"></div>
     <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">

         <div class="sidenav-header">
             <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
             <a class="navbar-brand m-0" href="dashboard.php">
                 <img src="../dist/images/icons/logo.png" class="navbar-brand-img h-100" alt="main_logo">
                 <span class="ms-1 font-weight-bold">SIBANGUN</span>
             </a>
         </div>
         <hr class="horizontal dark mt-0">
         <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
             <ul class="navbar-nav">
                 <li class="nav-item">
                     <a class="nav-link active" href="dashboard.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Dashboard</span>
                     </a>
                 </li>
                 <li class="nav-item mt-3">
                     <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Inventory</h6>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="suplier.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Supplier</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="barang.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Barang Bangunan</span>
                     </a>
                 </li>
                 <li class="nav-item mt-3">
                     <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Transaksi</h6>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="barangmasuk.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-app text-info text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Barang Masuk</span>
                     </a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="transaksi.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-world-2 text-danger text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Transaksi Penjualan</span>
                     </a>
                 </li>
                 <li class="nav-item mt-3">
                     <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Cetak</h6>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="cetak.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">Cetak Laporan</span>
                     </a>
                 </li>
                 <li class="nav-item mt-3">
                     <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">User</h6>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link " href="usermanagement.php">
                         <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                             <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
                         </div>
                         <span class="nav-link-text ms-1">User management</span>
                     </a>
                 </li>

             </ul>
         </div>

     </aside>
     <main class="main-content position-relative border-radius-lg ">
         <!-- Navbar -->
         <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
             <div class="container-fluid py-1 px-3">
                 <nav aria-label="breadcrumb">
                     <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                         <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="dashboard.php">Dashboard</a></li>
                         <li class="breadcrumb-item text-sm text-white active" aria-current="page">Barang Masuk</li>
                     </ol>
                     <h6 class="font-weight-bolder text-white mb-0">Barang Masuk</h6>
                 </nav>
                 <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                     <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                         <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                             <!-- form pencarian -->
                             <form action="" method="POST">
                                 <div class="input-group">
                                     <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                                     <button type="submit" name="caribrg" id="tombol-cari-barang-masuk" hidden='true'>Cari</button>
                                     <input type="text" class="form-control" autofocus autocomplete="off" id="keyword" placeholder="Cari barang.." name="keyword">

                                 </div>
                             </form>
                             <!-- akhir form pencarian -->
                         </div>
                     </div>
                     <ul class="navbar-nav  justify-content-end">
                         <li class="nav-item d-flex align-items-center">
                             <a href="#" class="nav-link text-white font-weight-bold px-0">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                 </svg>
                                 <span class="d-sm-inline d-none"><?php echo $_SESSION['username']; ?> |</span>


                             </a>

                         </li>

                         <li class="nav-item px-3 d-flex align-items-center">
                             <a href="../logout/logout.php" class="nav-link text-white p-0">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                     <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                 </svg>
                                 <span class="d-sm-inline d-none">Logout</span>

                             </a>
                         </li>



                     </ul>
                 </div>
             </div>
         </nav>
         <!-- End Navbar -->
         <div class="col-12 container">
             <div class="card mb-4">
                 <div class="card-header pb-0">
                     <h6>Data Barang Masuk</h6>


                     <div data-bs-toggle="modal" data-bs-target="#tambahdata" style="float: right;">
                         <button class="btn bg-gradient-warning mb-0" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                                 <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                             </svg>&nbsp;&nbsp; Form Barang Masuk</button>
                     </div>
                     <!-- navigasi -->
                     <nav aria-label="Page navigation example">
                         <ul class="pagination">
                             <li class="page-item">
                                 <?php if ($halamanAktif > 1) : ?>
                                     <a class="page-link" href="?page=INI PHP $halamanAktif - 1; ?>" aria-label="Previous">

                                         <span aria-hidden="true">&laquo;</span>
                                     </a>
                                 <?php endif; ?>
                             </li>
                             <?php for ($i = 1; $i <= $jumlahhalaman; $i++) : ?>
                                 <?php if ($i == $halamanAktif) : ?>
                                     <li class="page-item"><a class="page-link" href="?page=INI PHP $i; ?>" style="font-weight: bold; color: red;">INI PHP $i; ?></a></li>
                                 <?php else : ?>
                                     <li class="page-item"><a class="page-link" href="?page=INI PHP $i; ?>">INI PHP $i; ?></a></li>
                                 <?php endif; ?>
                             <?php endfor; ?>
                             <li class="page-item">
                                 <?php if ($halamanAktif < $jumlahhalaman) : ?>
                                     <a class="page-link" href="?page=INI PHP $halamanAktif + 1; ?>" aria-label="Next">
                                         <span aria-hidden="true">&raquo;</span>
                                     </a>
                                 <?php endif; ?>
                             </li>
                         </ul>
                     </nav>
                     <!-- end -->
                     <!-- modal -->



                     <!-- Modal -->
                     <div class="modal fade" id="tambahdata" tabindex="-1" aria-labelledby="tambahdata" aria-hidden="true">
                         <div class="modal-dialog">
                             <div class="modal-content">
                                 <div class="modal-header">
                                     <h5 class="modal-title" id="exampleModalLabel">Tambah Data Barang Masuk</h5>
                                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" name="tambahdata"></button>
                                 </div>
                                 <div class="modal-body">
                                     <!-- form -->
                                     <form action="" method="POST">

                                         <div class="mb-3">
                                             <label for="tglmsk" class="form-label">Tanggal Masuk Barang</label>
                                             <input type="date" class="form-control" id="tglmsk" name="tglmsk">
                                         </div>

                                         <div class="mb-3">
                                             <label for="nmbrgmsk" class="form-label">Nama Barang Masuk</label>
                                             <input type="text" class="form-control" id="nmbrgmsk" placeholder="masukkan nama barang" name="nmbrgmsk">
                                         </div>

                                         <div class="mb-3">
                                             <label for="hrgbeli" class="form-label">Harga Beli Barang Masuk</label>
                                             <input type="number" class="form-control" id="hrgbeli" placeholder="Masukkan harga beli barang" name="hrgbeli">
                                         </div>
                                         <div class="mb-3">
                                             <label for="stnbrg" class="form-label">Satuan Barang</label>
                                             <input type="text" class="form-control" id="stnbrg" placeholder="masukkan Satuan Barang" name="stnbrg">
                                         </div>
                                         <div class="mb-3">
                                             <label for="jmlhmskbrg" class="form-label">Jumlah Masuk Barang</label>
                                             <input type="number" class="form-control" id="jmlhmskbrg" placeholder="Masukkan Jumlah Masuk barang" name="jmlhmskbrg">
                                         </div>
                                         <div class="mb-3">
                                             <label for="nmspl" class="form-label">Supplier</label>


                                             <select name="nmspl" id="nmspl">
                                                 <option selected>Choose..</option>
                                                 <?php $suplier = mysqli_query($conn, "SELECT id_suplier, nama_suplier, keterangan FROM suplier"); ?>
                                                 <?php while ($spl = mysqli_fetch_array($suplier)) : ?>
                                                     <option value=INI PHP $spl["id_suplier"]; ?>>INI PHP $spl["nama_suplier"]; ?> ( INI PHP $spl["keterangan"]; ?> ) </option>
                                                 <?php endwhile; ?>
                                             </select>


                                         </div>
                                         <div class="mb-3" hidden="true">
                                             <label for=" nmusr" class="form-label">User</label>



                                             <?php $usr = $_SESSION['username']; ?>
                                             <?php $user = mysqli_query($conn, "SELECT id_user, username FROM user WHERE username = '$usr'"); ?>
                                             <?php $usr = mysqli_fetch_array($user); ?>

                                             <input type="text" name="nmusr" id="nmusr" value="INI PHP $usr[" id_user"]; ?>">


                                             </select>

                                         </div>

                                         <div class="mb-3" hidden="true">
                                             <label for="status" class="form-label">status</label>
                                             <input type="text" class="form-control" id="status" name="status" value="NO ACC">
                                         </div>



                                 </div>
                                 <div class="modal-footer" name="tambahdata">
                                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                     <button type="submit" class="btn btn-primary" name="tambahdata" id="liveAlertBtn">Simpan Data</button>
                                 </div>
                                 </form>
                                 <!-- form -->
                             </div>
                         </div>
                     </div>
                     <!-- akhir modal -->
                 </div>
                 <div class="card-body px-0 pt-0 pb-2">
                     <div class="table-responsive p-0">
                         <table class="table align-items-center mb-0">
                             <thead>
                                 <tr>
                                     <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No</th>
                                     <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Kode Barang Masuk</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tanggal Masuk</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Barang</th>

                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Harga Beli</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Satuan Barang</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Jumlah Masuk</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Supplier</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User</th>
                                     <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                     <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Aksi</th>
                                 </tr>

                             </thead>
                             <?php $i = 1; ?>
                             <?php while ($barangMasuk = mysqli_fetch_array($masuk)) : ?>
                                 <tbody>
                                     <tr scope="row">
                                         <td>
                                             <div class="d-flex px-2 py-1">

                                                 <div class="d-flex flex-column justify-content-center">
                                                     <h6 class="mb-0 text-sm">INI PHP $i; ?></h6>

                                                 </div>
                                             </div>
                                         </td>
                                         <td>
                                             <p class="text-xs font-weight-bold mb-0">IN-INI PHP $barangMasuk["tanggal_masuk"] ?>INI PHP $barangMasuk["kode_barang_masuk"]; ?></p>

                                         </td>
                                         <td class="align-middle text-center text-sm">
                                             <span class="badge badge-sm bg-gradient-success">INI PHP $barangMasuk["tanggal_masuk"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["nama_barang"]; ?></span>
                                         </td>


                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">RP.INI PHP $barangMasuk["harga_beli"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["satuan_barang"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["jumlah_masuk"]; ?> INI PHP $barangMasuk["satuan_barang"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["nama_suplier"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["username"]; ?></span>
                                         </td>
                                         <td class="align-middle text-center">
                                             <span class="text-secondary text-xs font-weight-bold">INI PHP $barangMasuk["status_barang_masuk"]; ?></span>
                                         </td>

                                         <td class="align-middle">

                                             <a href="../tbhstok.php?tmbbrg=INI PHP $barangMasuk[" kode_barang_masuk"]; ?>" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="tambah stok">

                                                 <button type="button" class="btn " name="tambahstok" id="svg">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#157347" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                                                         <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"></path>
                                                     </svg>

                                                 </button>
                                             </a>




                                             <a href="../del/delmsk.php?kdbrgmsk=INI PHP $barangMasuk[" kode_barang_masuk"]; ?>" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="del barang masuk">
                                                 <button type="button" class="btn">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                     </svg>

                                                 </button>
                                             </a>
                                         </td>
                                     </tr>


                                     <?php $i++; ?>
                                 <?php endwhile; ?>
                                 </tbody>
                         </table>
                     </div>
                 </div>
             </div>
         </div>
     </main>





     <!--   Core JS Files   -->

     <script src="../assets/js/core/popper.min.js"></script>
     <script src="../assets/js/core/bootstrap.min.js"></script>
     <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
     <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
     <script src="../assets/js/plugins/chartjs.min.js"></script>
     <script>
         var ctx1 = document.getElementById("chart-line").getContext("2d");

         var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

         gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
         gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
         gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');
         new Chart(ctx1, {
             type: "line",
             data: {
                 labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 datasets: [{
                     label: "Mobile apps",
                     tension: 0.4,
                     borderWidth: 0,
                     pointRadius: 0,
                     borderColor: "#5e72e4",
                     backgroundColor: gradientStroke1,
                     borderWidth: 3,
                     fill: true,
                     data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                     maxBarThickness: 6

                 }],
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 plugins: {
                     legend: {
                         display: false,
                     }
                 },
                 interaction: {
                     intersect: false,
                     mode: 'index',
                 },
                 scales: {
                     y: {
                         grid: {
                             drawBorder: false,
                             display: true,
                             drawOnChartArea: true,
                             drawTicks: false,
                             borderDash: [5, 5]
                         },
                         ticks: {
                             display: true,
                             padding: 10,
                             color: '#fbfbfb',
                             font: {
                                 size: 11,
                                 family: "Open Sans",
                                 style: 'normal',
                                 lineHeight: 2
                             },
                         }
                     },
                     x: {
                         grid: {
                             drawBorder: false,
                             display: false,
                             drawOnChartArea: false,
                             drawTicks: false,
                             borderDash: [5, 5]
                         },
                         ticks: {
                             display: true,
                             color: '#ccc',
                             padding: 20,
                             font: {
                                 size: 11,
                                 family: "Open Sans",
                                 style: 'normal',
                                 lineHeight: 2
                             },
                         }
                     },
                 },
             },
         });
     </script>
     <script>
         var win = navigator.platform.indexOf('Win') > -1;
         if (win && document.querySelector('#sidenav-scrollbar')) {
             var options = {
                 damping: '0.5'
             }
             Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
         }
     </script>
     <!-- Github buttons -->
     <script async defer src="https://buttons.github.io/buttons.js"></script>
     <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
     <script src="../assets/js/argon-dashboard.min.js?v=2.0.0"></script>

 </body>

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

 </html>