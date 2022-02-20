<?php
require '../function.php';

// cek apakah yang mengakses halaman ini sudah login
if ($_SESSION['level'] == "") {
    header("location:../index.php");
}

$idtrans = $_GET["trans"];



$data1 = mysqli_query($conn, "SELECT * FROM transaksi JOIN user ON transaksi.id_user = user.id_user where id_transaksi = $idtrans");
$transaksi = mysqli_fetch_array($data1)













?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Document</title>

    <style>
        .hr {
            border: 1;
            border-top: 2px double #000;
            opacity: 100;
        }

        .nota {
            font-size: medium;
        }
    </style>
</head>

<body>
    <br>
    <br>
    <!-- col -->


    <div class="row">
        <div class="col">
            <table>
                <tr>
                    <p> <b> Toko Bangunan Suka Turun</b><br>Jl.Cipta Karya | No.666 Tampan,Panam <br>Kota Pekanbaru,Riau,29842 <br>Np Telp : 0813209586</p>
                </tr>


            </table>
        </div>



        <div class="col"></div>
        <div class="col"></div>

        <div class="col">
            <table>
                <tr>
                    <td>
                        <img src="../dist/images/icons/logo.png" height="100px" alt="">
                    </td>
                </tr>
            </table>
        </div>

    </div>

    <!-- akhir COl -->

    <hr class="hr">
    </div>
    <h1 class="text-center" style="font-size:x-large;">NOTA PEMBELIAN </h1>
    <!-- col -->


    <div class="row nota ">
        <div class="col">
            <table>
                <tr>
                    <td>Kode Transaksi</td>
                    <td>: TP-<?= $transaksi["id_transaksi"]; ?></td>
                </tr>
                <tr>
                    <td>Tanggal</td>
                    <td>: <?= $transaksi["tanggal_transaksi"]; ?></td>
                </tr>
            </table>
        </div>
        <div class="col order-5">
            <table>
                <tr>
                    <td>Nama Pembeli</td>
                    <td>: <?= $transaksi["nama_pembeli"]; ?></td>
                </tr>
                <tr>
                    <td>Jenis Pembayaran</td>
                    <td>: <?= $transaksi["jenis_pembayaran"]; ?></td>
                </tr>
            </table>
        </div>
        <div class="col order-1">

        </div>
    </div>



    <!-- akhir COl -->

    <!-- tables -->

    <table class="table caption-top">
        <caption></caption>
        <thead>
            <tr></tr>
            <tr>
                <th scope="col">NO</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Harga Satuan</th>
                <th scope="col">Jumlah Beli</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <?php
        if (isset($_COOKIE["shopping_cart"])) {
            $total = 0;
            $cookie_data = stripslashes($_COOKIE['shopping_cart']);
            $cart_data = json_decode($cookie_data, true);
            $i = 1;
            foreach ($cart_data as $keys => $values) {
        ?>
                <tbody>
                    <tr>
                        <th scope="row"><?= $i; ?></th>
                        <td><?php echo $values["item_name"]; ?></td>
                        <td>RP. <?php echo number_format($values["item_price"], 2); ?></td>
                        <td><?php echo $values["item_quantity"]; ?></td>
                        <td>RP. <?php echo number_format($values["item_quantity"] * $values["item_price"], 2); ?></td>
                    </tr>
                <?php
                $total = $total + ($values["item_quantity"] * $values["item_price"]);
                $i++;
            }
                ?>
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td> <b> SUB TOTAL</b></td>
                    <td></td>
                    <td> <b>RP. <?php echo number_format($total, 2); ?></b></td>
                </tr>
            <?php
        } else {
            echo '
    <tr>
     <td colspan="5" align="center">No Item in Cart</td>
    </tr>
    ';
        }
            ?>
            <tr>
                </tbody>
    </table>
    <!-- tables -->

    <!-- bawah -->
    <div class="row nota ">
        <div class="col">
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="col order-4">

            <?php $tanggal = date('d M Y') ?>

            <div style="text-align: center;">Pekabaru, <?= $tanggal; ?></div>

            <div style="text-align: center;">Yang Menerima,</div>
            <tr>
                <td></td>
            </tr> <br>
            <tr>
                <td></td>
            </tr> <br>

            <div style="text-align: center;">(_______________________________)</div>


        </div>
        <div class="col order-1">

        </div>
    </div>
    <script>
        window.print();
    </script>
    <!-- akhir bawah -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

</body>

</html>