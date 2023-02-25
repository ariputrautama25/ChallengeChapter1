// Kalkulator sederhana
// Program diawali dengan mengimpor modul readline yang diperlukan untuk meminta input dari pengguna.
const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout,
});

// Kemudian, program meminta input dari pengguna dengan menggunakan objek rl.
rl.question("Masukkan angka pertama: ", function (num1) {
  rl.question("Masukkan angka kedua: ", function (num2) {
    console.log(`Angka pertama: ${num1}`);
    console.log(`Angka kedua: ${num2}`);
    console.log(`1. Tambah`);
    console.log(`2. Kurang`);
    console.log(`3. Kali`);
    console.log(`4. Bagi`);
    console.log(`5. Akar kuadrat`);
    console.log(`6. Luas persegi`);
    console.log(`7. Volume kubus`);
    console.log(`8. Volume tabung`);

    // Jika operasi yang diminta adalah salah satu dari +, -, *, atau /, 
    //program akan melakukan operasi tersebut.

    // Hasil kalkulasi dicetak ke layar dengan menggunakan fungsi console.log()
    rl.question("Pilih operasi (1-8): ", function (choice) {
      switch (choice) {
        case "1":
          console.log(`Hasil penjumlahan: ${Number(num1) + Number(num2)}`);
          break;
        case "2":
          console.log(`Hasil pengurangan: ${Number(num1) - Number(num2)}`);
          break;
        case "3":
          console.log(`Hasil perkalian: ${Number(num1) * Number(num2)}`);
          break;
        case "4":
          console.log(`Hasil pembagian: ${Number(num1) / Number(num2)}`);
          break;
        case "5":
          console.log(`Akar kuadrat dari angka pertama: ${Math.sqrt(Number(num1))}`);
          console.log(`Akar kuadrat dari angka kedua: ${Math.sqrt(Number(num2))}`);
          break;
        case "6":
          console.log(`Luas persegi dengan sisi ${num1}: ${Math.pow(Number(num1), 2)}`);
          break;
        case "7":
          console.log(`Volume kubus dengan sisi ${num1}: ${Math.pow(Number(num1), 3)}`);
          break;
        case "8":
          console.log(`Volume tabung dengan jari-jari ${num1} dan tinggi ${num2}: ${Math.PI * Math.pow(Number(num1), 2) * Number(num2)}`);
          break;
        default:
          console.log("Operasi tidak valid");
          break;
      }
// Terakhir, objek `rl` ditutup dengan menggunakan fungsi close();
      rl.close();
    });
  });
});


//Program ini meminta pengguna untuk memasukkan dua angka dan kemudian memilih operasi yang akan dilakukan pada kedua angka tersebut. 
//Setelah pengguna memilih operasi, program akan menampilkan hasilnya. Program ini dapat dijalankan di terminal dengan menjalankan 
//perintah node `input.js` di direktori tempat file JavaScript disimpan.