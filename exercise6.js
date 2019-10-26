// //TUGAS 1
var i=1;
console.log('Looping Pertama');
while(i<=20){
    if(i%2==0){
        console.log(i + " I Love Coding !");
    }
    i++;
}

console.log('Looping Kedua');
i=20;
while(i>=0){
    if(i%2==0){
        console.log(i + " I Love Coding !");
    }
    i--;
}

// //TUGAS 2
console.log('Looping Pertama');
for(var n=1; n<=20; n++){
    console.log(n + " - I Love Coding")
}

console.log('Looping Kedua');
for(var n=20;n>=0;n--){
    console.log(n + " - I Love Coding")
}

// TUGAS 3
for(var counter=1;counter<=100;counter++){
    if(counter%2==0){
        console.log(counter + " Genap")
    }
    else{
        console.log(counter + " Ganjil")
    }
}

for(var counter=1;counter<=100;counter+=2){
    if(counter%3==0){
        console.log(counter + " Kelipatan 3")
    }
}

for(var counter=1;counter<=100;counter+=5){
    if(counter%6==0){
        console.log(counter + " Kelipatan 6")
    }
}

for(var counter=1;counter<=100;counter+=9){
    if(counter%10==0){
        console.log(counter + " Kelipatan 10")
    }
}