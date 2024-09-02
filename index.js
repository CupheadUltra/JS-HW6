
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log('7 x ' + k + ' = ' + (7 * k));
}

const numbers1 = [1, 2, 3, 4, 5];
let l = 0;
while (l < numbers1.length) {
    console.log(numbers1[l]);
    l++;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let m = 0; m < numbers2.length; m++) {
    if (numbers2[m] === 7) {
        break;
    }
    console.log(numbers2[m]);
}

const n = 10; 
for (let p = 1; p < n; p++) {
    console.log(p);
}

let q = 1;
while (q <= 20) {
    if (q % 3 === 0) {
        q++;
        continue;
    }
    console.log(q);
    q++;
}
