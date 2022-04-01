let result = 0;
for (let i=2000; i<new Date().getFullYear(); i++) {
    for (let m=0; m<12; m++){
        let date = new Date(i, m, 13);
        if(date.getDay()===5){
            result++;
        }

    }
}
console.log (result)