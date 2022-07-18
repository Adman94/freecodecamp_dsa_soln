function rot13(str) {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(
    /[a-z]/gi,
    (letter) => cipher[originalAlpha.indexOf(letter)]
  );
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
