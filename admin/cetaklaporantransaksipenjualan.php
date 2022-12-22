 <?php
    require '../function.php';

    // cek apakah yang mengakses halaman ini sudah login
    if ($_SESSION['level'] == "") {
        header("location:../index.php");
    }

    $penjualan = $_GET["penjualan"];
    $tanggalAwal = $_GET["tanggalAwal"];
    $tanggalAkhir = $_GET["tanggalAkhir"];




    // cetak laporan

    $query = mysqli_query($conn, "SELECT * FROM $penjualan WHERE tanggal_masuk BETWEEN '$tanggalAwal' and '$tanggalAkhir' ORDER BY kode_barang_masuk ASC");

    $laporanBarangMasuk = mysqli_fetch_array($query);
    var_dump($laporanBarangMasuk);






    ?>

 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>

 <body>
<h1>woi</h1>
 </body>
 <script>
     window.print();
 </script>

 </html>