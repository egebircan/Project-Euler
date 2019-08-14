var sayi = 11111111111111113;
console.log(sayi+1)

for(var i = 1; i<21; i++) {
  console.log("TUR:" + i + "SAYI: " +sayi);
  console.log("\n");
  sayi *= 10;
  if(true) {
    console.log("sayı 10 ile çarpıldı: " + sayi)
  }
  sayi += 1;
  if(true) {
    console.log("sayıya 1 eklendi: " + sayi)
  }

}

for(var i = 0; i<20; i++) {
  console.log(sayi);
  console.log("\n");
  sayi = Math.floor(sayi / 10);

}