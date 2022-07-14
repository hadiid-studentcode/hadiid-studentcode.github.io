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
    "hayati",
    
  ];

 var nilai1 = data[Math.floor(Math.random() * data.length)];
 fas1.innerHTML = nilai1;
 data.splice(data.indexOf(nilai1), 1);

 var nilai2 = data[Math.floor(Math.random() * data.length)];
  fas2.innerHTML = nilai2;
  data.splice(data.indexOf(nilai2), 1);


  var nilai3 = data[Math.floor(Math.random() * data.length)];
  fas3.innerHTML = nilai3;
  data.splice(data.indexOf(nilai3), 1);

  var nilai4 = data[Math.floor(Math.random() * data.length)];
  fas4.innerHTML = nilai4;
  data.splice(data.indexOf(nilai4), 1);

  var nilai5 = data[Math.floor(Math.random() * data.length)];
  fas5.innerHTML = nilai5;
  data.splice(data.indexOf(nilai5), 1);

  var nilai6 = data[Math.floor(Math.random() * data.length)];
  fas6.innerHTML = nilai6;
  data.splice(data.indexOf(nilai6), 1);

  var nilai7 = data[Math.floor(Math.random() * data.length)];
  fas7.innerHTML = nilai7;
  data.splice(data.indexOf(nilai7), 1);

  var nilai8 = data[Math.floor(Math.random() * data.length)];
  fas8.innerHTML = nilai8;
  data.splice(data.indexOf(nilai8), 1);

  var nilai9 = data[Math.floor(Math.random() * data.length)];
  fas9.innerHTML = nilai9;
  data.splice(data.indexOf(nilai9), 1);

  var nilai10 = data[Math.floor(Math.random() * data.length)];
  fas10.innerHTML = nilai10;
  data.splice(data.indexOf(nilai10), 1);




















}