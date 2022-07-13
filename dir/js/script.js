function hubungiSidara() {
  (async () => {
    const { value: nama } = await Swal.fire({
      title:
        "Hallo, Saya boot penghuni website ini Sebelum anda Hubungi Pemilik Saya, Silahkan Isi Nama Anda :)",
      input: "text",
      inputLabel: "Nama Lengkap",
      inputPlaceholder: "",
    });

    if (nama) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3100,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Hallo ${nama} Salam Kenal yaa 🤖 <br><br> Loading...Masuk Ke Whatsapp Pemilik website...`,
      });

      const linkwa = document.getElementById("linkwa");

      const namaUser = `${nama}`;
      const produk = 'Sistem Informasi Data Barang (SIDARA)';

      setInterval(() => {
        document.location.href =
          "https://api.whatsapp.com/send?phone=6289620569613&text=Hallo%2C%20Hadiid%20Andri%20Yulison%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0APerkenalkan%20Nama%20Saya%20%3A%20"+namaUser+"%20%0ASaya%20Berminat%20%3A%20"+produk+"%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0ATerima%20Kasih...";
      }, 3101);
    }
  })();
}


