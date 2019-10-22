var nama='Irfan';
var peran='';

if (nama===''&&peran==='') {
    console.log("Nama dan Peran harus diisi !");
} else if(nama==='Irfan'&&peran==='') {
    console.log("Halo " + nama + " Peran anda harus diisi");
} else if(nama==='Agus'||peran==='Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
} else if(nama==='Muti'||peran==='Tabib'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka!");
} else if(nama==='Michael'||peran==='Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}