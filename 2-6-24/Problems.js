function NumbersPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let spaces = n - i;

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    let counter = 1;

    for (let k = 1; k <= i; k++) {
      str += counter;
      counter++;
    }

    let c2 = i - 1;
    for (let l = 1; l <= i - 1; l++) {
      str += c2;
      c2--;
    }

    console.log(str);
  }
}

NumbersPattern(4);
