function konversiMenit(menit){
    var jam=0;
    var menit1='';
    // var val;
    if(menit>=60){
        menit1=menit%60;
        jam=menit/60;
        if(menit1<10){
            return `${parseInt(jam)}:0${menit1}`;    
        }else{
            return `${parseInt(jam)}:${menit1}`;
        }        
    }else{
        return `${jam}:${menit}`;
    }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));