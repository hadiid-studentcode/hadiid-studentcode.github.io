function acak() {
  var fas1 = document.getElementById("fas1");
  var fas2 = document.getElementById("fas2");
  var fas3 = document.getElementById("fas3");
  var fas4 = document.getElementById("fas4");
  var fas5 = document.getElementById("fas5");
  var fas6 = document.getElementById("fas6");
  var fas7 = document.getElementById("fas7");
  var fas8 = document.getElementById("fas8");
  var fas9 = document.getElementById("fas9");
  var fas10 = document.getElementById("fas10");

  // nilai random
  var data = [
    "Dicky Aditya",
    "Sherly Kurniawan",
    "Raditya",
    "Nabila Putri Marlilam",
    "Arfan Dailani",
    "Frengky Okto Rasya",
    "Afni",
    "Nabil",
    "Nisya Fresetia",
  ];
  var nilai1 = data[Math.floor(Math.random() * data.length)];
  var nilai2 = data[Math.floor(Math.random() * data.length)];
  var nilai3 = data[Math.floor(Math.random() * data.length)];
  var nilai4 = data[Math.floor(Math.random() * data.length)];
  var nilai5 = data[Math.floor(Math.random() * data.length)];
  var nilai6 = data[Math.floor(Math.random() * data.length)];
  var nilai7 = data[Math.floor(Math.random() * data.length)];
  var nilai8 = data[Math.floor(Math.random() * data.length)];
  var nilai9 = data[Math.floor(Math.random() * data.length)];
  var nilai10 = data[Math.floor(Math.random() * data.length)];

  fas1.innerHTML = nilai1;
  fas2.innerHTML = nilai2;
  fas3.innerHTML = nilai3;
  fas4.innerHTML = nilai4;
  fas5.innerHTML = nilai5;
  fas6.innerHTML = nilai6;
  fas7.innerHTML = nilai7;
  fas8.innerHTML = nilai8;
  fas9.innerHTML = nilai9;
  fas10.innerHTML = nilai10;
}
