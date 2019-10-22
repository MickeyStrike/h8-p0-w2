var tanggal=31;
var bulan=1;
var tahun=1900;

if(tanggal<=31){
    switch(tanggal){
        case tanggal : console.log(tanggal);
        break;
    }
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
    default : console.log('Bulan yang anda masukkan tidak ada');
        break;
}

if(tahun>=1900 && tahun<=2200){
    switch(tahun){
        case tahun : console.log(tahun);
        break;
    }
}
console.clear();
console.log(`${tanggal} ${bulan} ${tahun}`);