const nama = "Abrar Sagusta Putra";
let usia = 18;

function generateBiodata() {
    let  generasi;

if (usia => 10 && usia < 18) {
    generasi = "remaja"
}
else if (usia => 18 && usia < 60) {
    generasi = "dewasa"
}

else if ( usia => 2 && usia < 10) {
    generasi = "anak-anak"
}

else if (usia => 60){
    generasi ="lansia"
}

else{
    generasi = "remaja"
}


return console.log("generasi saya adalah", generasi);


}

console.log (nama);
console.log(usia);

generateBiodata()