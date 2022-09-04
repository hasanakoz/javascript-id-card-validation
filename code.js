let tcNo = prompt("numara giriniz: ");
let teklerFunc = (tcNo) => {
  let tekler = 0;
  for (i = 0; i <= 8; i += 2) {
    tekler += Number(tcNo[i]);
  }
  tekler *= 7;
  return tekler;
};

let çiftler = 0;
for (i = 1; i <= 7; i += 2) {
  çiftler += Number(tcNo[i]);
}

let onuncu = (teklerFunc(tcNo) - çiftler) % 10;

let ilkDokuz = 0;
for (i = 0; i <= 8; i++) {
  ilkDokuz += Number(tcNo[i]);
}

valid = true;
if (tcNo.length != 11) {
  valid = false;
} else if (tcNo[0] == 0) {
  valid = false;
} else if (onuncu != tcNo[9]) {
  valid = false;
} else if ((onuncu + ilkDokuz) % 10 != tcNo[10]) {
  valid = false;
}
console.log(valid);
