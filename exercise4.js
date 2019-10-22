var tanggal=21;
var bulan=1;
var tahun=1945;

if(tanggal<=31){
    switch(tanggal){
        case tanggal : console.log(tanggal);
        break;
    }
}else{
    console.log(tanggal='tanggal yang anda masukkan salah, masukkan kembali tanggal(1-31)');
}

switch(bulan){
    case 1 : console.log(bulan='Januari');
        break;
    case 2 : console.log(bulan='Februari');
        break;
    case 3 : console.log(bulan='Maret');
        break;
    case 4 : console.log(bulan='April');
        break;
    case 5 : console.log(bulan='Mei');
        break;
    case 6 : console.log(bulan='Juni');
        break;
    case 7 : console.log(bulan='Juli');
        break;
    case 8 : console.log(bulan='Agustus');
        break;
    case 9 : console.log(bulan='September');
        break;
    case 10 : console.log(bulan='Oktober');
        break;
    case 11 : console.log(bulan='November');
        break;
    case 12 : console.log(bulan='Desember');
        break;
    default : console.log(bulan='Bulan yang anda masukkan tidak ada, masukkan kembali(1-12)');
        break;
}

if(tahun>=1900 && tahun<=2200){
    switch(tahun){
        case tahun : console.log(tahun);
        break;
    }
}
else{
    console.log(tahun='tahun yang anda masukkan harus (1900-2200)')
}
console.clear();
console.log(`${tanggal} ${bulan} ${tahun}`);