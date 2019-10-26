var nama='Dono';
var peran='Tabib';

if (nama===''&&peran==='') {
    console.log("Nama dan Peran harus diisi !");
} else if(nama===''+nama&&peran==='') {
    console.log("Halo " + nama + " Peran anda harus diisi");
} else if(nama===''+nama||peran==='Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
} else if(nama===''+nama||peran==='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka!");
} else if(nama===''+nama||peran==='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}