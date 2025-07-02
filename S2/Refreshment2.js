let num = 36;

for (let count = 0; count <= 10; count++) {
    let indicator = 0;
    for (index=0; index < 10; ) {
        if(count*index == num) {
            console.log(`${count}${index}`);
            indicator = 1;
        }
        index++
    }
    if (indicator == 1) break;
}