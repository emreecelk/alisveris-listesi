let alisverisListesi = [];

while (true) {
    let urun = prompt("Alışveriş listenize bir ürün ekleyin (Veya 'Tamam' yazıp çıkabilirsiniz):");

    if (urun.toLowerCase() === "tamam") {
        break;
    }

    alisverisListesi.push(urun);
}

console.log("Alışveriş Listesi:");
for (let urun of alisverisListesi) {
    console.log(urun);
}
